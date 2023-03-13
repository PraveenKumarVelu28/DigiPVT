import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;

@Component({
  selector: 'app-validated-tand-ldetails',
  templateUrl: './validated-tand-ldetails.component.html',
  styleUrls: ['./validated-tand-ldetails.component.css']
})
export class ValidatedTandLDetailsComponent implements OnInit {

   
  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }
  timedetails:any;
  count:any;
  currentUrl:any;
  term:any;
  p: any = 1;
  count1: any = 10;
  loader: any
  ngOnInit(): void {
    this.loader=false
    this.GetValidatedPayrollElementsForPayperiod();
  }



  public GetValidatedPayrollElementsForPayperiod() {
    debugger
    this.DigiofficeService.GetValidatedPayrollElementsForPayperiod()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;

          this.count = this.timedetails.length
          this.loader=false
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff Over Time Details');
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
  fileName = 'Basic Pay Validation Reports.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  delete(ID : any){
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteValidatedPayrollElementsForPayperiod(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              location.reload();
              this.loader=false
              
            }
          })
      }
    })

  }


}
