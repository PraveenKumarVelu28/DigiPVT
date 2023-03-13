import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;
@Component({
  selector: 'app-validated-payroll-summary-report',
  templateUrl: './validated-payroll-summary-report.component.html',
  styleUrls: ['./validated-payroll-summary-report.component.css']
})
export class ValidatedPayrollSummaryReportComponent implements OnInit {

 
  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }

  ngOnInit(): void {

    this.GetValidatedPayrollSummaryDetails();
  }

  timedetails:any;
  count:any;
  currentUrl:any;
  term:any;
  p: any = 1;
  count1: any = 10;
  loader : any

  public GetValidatedPayrollSummaryDetails() {
    debugger
    this.loader=false;
    this.DigiofficeService.GetValidatedPayrollSummaryDetails()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;
          this.count = this.timedetails.length
          this.loader=false;
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
        this.DigiofficeService.DeleteValidatedPayrollSummaryDetails(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              location.reload();
              this.loader=false;
              
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
        ElementName: String,
        ElementDesciption: String,
        ElementType: String,
        PreviousPayperiodValue: String,
        CurrentPayperiodValue: String,
        PayperiodValueDescrepency: String,
        PayDate: String,
     

      }
      //singleData.SequenceNumber = this.sequenceNumber1;
      singleData.EmployeeID = this.timedetails[i].employeID;
      singleData.EmployeeName = this.timedetails[i].name;
      singleData.ElementName = this.timedetails[i].elementName;
      singleData.ElementDesciption = this.timedetails[i].elementDescription;
      // singleData.CompanyName = this.companycode;
      singleData.ElementType = this.timedetails[i].elementType;
      singleData.PreviousPayperiodValue = this.timedetails[i].previousPayrollValue;
      singleData.CurrentPayperiodValue = this.timedetails[i].currentPayrollValue;
      singleData.PayperiodValueDescrepency = this.timedetails[i].payValueDescrepency;
      singleData.PayDate = this.timedetails[i].paydate;
      ExportData.push(singleData);
      debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Payroll Summary Report',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'Payroll Summary Report'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    debugger
    csvExporter.generateCsv(ExportData);

  }







}
