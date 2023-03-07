import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;
@Component({
  selector: 'app-validated-retro-basic-pay-adjustments',
  templateUrl: './validated-retro-basic-pay-adjustments.component.html',
  styleUrls: ['./validated-retro-basic-pay-adjustments.component.css']
})
export class ValidatedRetroBasicPayAdjustmentsComponent implements OnInit {

  
  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }
  companyid:any;
  ngOnInit(): void {
    this.companyid = sessionStorage.getItem('companyid');
    this.GetRetroValidatedBasicPayAllowances();
  }

  timedetails:any;
  count:any;
  currentUrl:any;
  term:any;
  p: any = 1;
  count1: any = 10;

  public GetRetroValidatedBasicPayAllowances() {
    debugger
    this.DigiofficeService.GetRetroValidatedBasicPayAllowances()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;

          this.count = this.timedetails.length
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


}
