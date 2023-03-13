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
  timedetails:any;
  count:any;
  currentUrl:any;
  term:any;
  p: any = 1;
  count1: any = 10;
  loader : any

  ngOnInit(): void {
    this.loader=false
    this.companyid = sessionStorage.getItem('companyid');
    this.GetRetroValidatedBasicPayAllowances();
  }

  
  public GetRetroValidatedBasicPayAllowances() {
    debugger
    this.DigiofficeService.GetRetroValidatedBasicPayAllowances()
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
        this.DigiofficeService.DeleteRetroValidatedBasicPayAllowances(ID)
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

  undefined: any;
  sequenceNumber1: any
  attendancelist: any
  public exportexcel1() {
    debugger
    var ExportData = [];
    this.sequenceNumber1 = 0;
    this.undefined = 'NA'
    for (let i = 0; i < this.timedetails.length; i++) {
      debugger;
      this.sequenceNumber1 = i + 1;
      let singleData = {
        EmployeeID: String,
        EmployeeName: String,
        OldBasicPay: String,
        NewBasicPay : String,
        EffectiveDate: String,
        PayDate: String,
        UploadedBasicPayAdjustment: String,
        ValidatedBasicPayAdjustment: String,
        DescrepencyBasicPayAdjustment: String,
  
      }
      //singleData.SequenceNumber = this.sequenceNumber1;
      singleData.EmployeeID = this.timedetails[i].employeID;
      singleData.EmployeeName = this.timedetails[i].name;
      singleData.OldBasicPay = this.timedetails[i].oldbasicpay;
      singleData.NewBasicPay = this.timedetails[i].basicPay;
      singleData.EffectiveDate = this.timedetails[i].effectiveDate;
      singleData.PayDate = this.timedetails[i].noofPayperiods;
      singleData.UploadedBasicPayAdjustment = this.timedetails[i].uploadedBasicPayAdjustment;
      singleData.ValidatedBasicPayAdjustment = this.timedetails[i].basicPayAdjustment;
      singleData.DescrepencyBasicPayAdjustment = this.timedetails[i].basicPayAdjustmentDescrepency;

      ExportData.push(singleData);
      debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Basic Pay Validation Reports.xlsx',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'Basic Pay Validation Reports.xlsx'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    debugger
    csvExporter.generateCsv(ExportData);

  }



}
