import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-staff-bulk-upload-exceptions',
  templateUrl: './staff-bulk-upload-exceptions.component.html',
  styleUrls: ['./staff-bulk-upload-exceptions.component.css']
})
export class StaffBulkUploadExceptionsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  term: any;
  exceptionlist: any;
  loader:any;
  p: any = 1;
  count1: any = 10;
  fileName = 'Bulk Exception Log.xlsx';
  
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.GetStaffBulkUploadExceptions();
  }
  
  public GetStaffBulkUploadExceptions() {
    debugger
    this.loader=true;
      this.DigiofficeService.GetStaffBulkUploadExceptions()
        .subscribe({
          next: data => {
            debugger
            this.exceptionlist = data;
            this.loader=false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Exception');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
  }

  public DeleteStaffBulkUploadExceptions(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      debugger
      if (result.value == true) {
        this.DigiofficeService
          .DeleteStaffBulkUploadExceptions(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Exception');
              this.loader = false;
              // Insert error in Db Here//
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
      }
    })
  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('lvs');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}