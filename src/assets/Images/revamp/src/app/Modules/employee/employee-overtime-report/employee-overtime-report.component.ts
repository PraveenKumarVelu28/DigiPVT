import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExportToCsv } from 'export-to-csv';
import * as XLSX from 'xlsx';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-employee-overtime-report',
  templateUrl: './employee-overtime-report.component.html',
  styleUrls: ['./employee-overtime-report.component.css']
})
export class EmployeeOvertimeReportComponent implements OnInit {
  currentUrl: any;
  companycode: any;
  fileName: any;
  loader: boolean = false;
  todaydate: any;
  companyName: any
  firstDayofcurrentmonth: any;
  constructor(public router: Router, private datePipe: DatePipe, public DigiofficeService: DigiofficecorehrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.companycode = sessionStorage.getItem('companycode');

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.GetStaffOverTimeDetails();
  }

  overtimedetails: any
  data: any
  // public GetStaffOverTimeDetails(){
  //   this.DigiofficeService.GetStaffOverTimeDetails().subscribe(x=>{
  //     this.overtimedetail=this.data;
  //   })
  // }

  public GetStaffOverTimeDetails() {
    this.loader = true;
    this.DigiofficeService.GetStaffOverTimeDetailsByDateforreport(this.firstDayofcurrentmonth, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          this.overtimedetails = data;
          this.loader = false;
        }, error: (err) => {

          this.loader = false;
          // Swal.fire('Issue in Getting Staff Over Time Details');
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

  startdate: any;
  enddate: any;
  public getedate() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetStaffOverTimeDetailsByDateforreport(this.startdate, this.enddate)
      .subscribe({
        next: data => {
          debugger
          this.overtimedetails = data;
          this.loader = false;
        }, error: (err) => {

          this.loader = false;
          // Swal.fire('Issue in Getting Staff Over Time Details');
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


  // public exportexcel1() {
  //   this.loader = true;
  //   this.fileName = " Employee_Overtime_Report.xlsx"
  //   debugger
  //   /* table id is passed over here */
  //   let element = document.getElementById('lvs');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);
  //   this.loader = false;
  // }

  undefined: any;
  sequenceNumber1: any
  attendancelist: any
  public exportexcel1() {
    debugger
    var ExportData = [];
    this.sequenceNumber1 = 0;
    for (let i = 0; i < this.overtimedetails.length; i++) {
      //debugger;
      this.sequenceNumber1 = i + 1;
      let singleData: any = {


        EmployeeNo: String,
        EmployeeName: String,
        DATE: String,
        CompanyName: String,
        SHIFTCODE: String,
        ExpectedIn: String,
        ExpectedOut: String,
        StartTime: String,
        EndTime: String,
        OT_REGULAR: String,
        OT_EXC_REGULAR: String,
        OT_RESTDAY: String,
        OT_EXC_RESTDAY: String,

        OT_LEGALHD: String,
        OT_EXC_LEGALHD: String,
        OT_LEGALHDONREST: String,
        OT_EXC_LEGALHDONREST: String,
        OT_SPECIALHD: String,
        OT_EXC_SPECIALHD: String,
        OT_SPECIALHDONREST: String,
        OT_EXC_SPECIALHDONREST: String,

        OT_DOUBLEHDREST: String,
        OT_EXC_DOUBLEHDREST: String,
        OT_DOUBLEHDREGULAR: String,
        OT_EXC_DOUBLEHDREGULAR: String,
        NSD_REGULAR: String,
        NSDOT_REGULAR: String,
        NSDOT_EXC_REGULAR: String,
        NSD_RESTDAY: String,
        NSDOT_RESTDAY: String,
        NSDOT_EXC_RESTDAY: String,
        NSD_LEGALHD: String,

        NSDOT_LEGALHD: String,

        NSDOT_EXC_LEGALHD: String,
        NSD_LEGALHDONREST: String,
        NSDOT_LEGALHDONREST: String,
        NSDOT_EXC_LEGALHDONREST: String,
        NSD_SPECIALHD: String,
        NSDOT_SPECIALHD: String,
        NSDOT_EXC_SPECIALHD: String,
        NSD_SPECIALHDONREST: String,
        NSDOT_SPECIALHDONREST: String,
        NSDOT_EXC_SPECIALHDONREST: String,
        NSD_DOUBLEHDREST: String,
        NSDOT_DOUBLEHDREST: String,
        NSDOT_EXC_DOUBLEHDREST: String,
        NSD_DOUBLEHDREGULAR: String,
        NSDOT_DOUBLEHDREGULAR: String,
        NSDOT_EXC_DOUBLEHDREGULAR: String,


      }
      //singleData.SequenceNumber = this.overtimedetails[i].this.sequenceNumber1;
      singleData.EmployeeNo = this.overtimedetails[i].employeID;
      singleData.EmployeeName = this.overtimedetails[i].name1;
      singleData.DATE = this.overtimedetails[i].dateforreport;
      singleData.CompanyName = this.companycode
      singleData.SHIFTCODE = this.overtimedetails[i].shiftcode;
      singleData.ExpectedIn = this.overtimedetails[i].expectedIn;
      singleData.ExpectedOut = this.overtimedetails[i].expectedOut;
      singleData.StartTime = this.overtimedetails[i].startTime1;
      singleData.EndTime = this.overtimedetails[i].endTime1;
      singleData.OT_REGULAR = this.overtimedetails[i].noofhours;
      singleData.OT_EXC_REGULAR = this.overtimedetails[i].exccessNormalOt;
      singleData.OT_RESTDAY = this.overtimedetails[i].restNormalOT;
      singleData.OT_EXC_RESTDAY = this.overtimedetails[i].exccessRestNormalOt;

      singleData.OT_LEGALHD = this.overtimedetails[i].legalNormalOT;
      singleData.OT_EXC_LEGALHD = this.overtimedetails[i].legalExccessNormalOt;
      singleData.OT_LEGALHDONREST = this.overtimedetails[i].legalRestNormalOT;
      singleData.OT_EXC_LEGALHDONREST = this.overtimedetails[i].legalExccessRestNormalOt;
      singleData.OT_SPECIALHD = this.overtimedetails[i].specialNormalOT;
      singleData.OT_EXC_SPECIALHD = this.overtimedetails[i].specialExccessNormalOt;
      singleData.OT_SPECIALHDONREST = this.overtimedetails[i].specialRestNormalOT;
      singleData.OT_EXC_SPECIALHDONREST = this.overtimedetails[i].specialRestExccessNormalOt;
      singleData.OT_DOUBLEHDREST = 0;
      singleData.OT_EXC_DOUBLEHDREST = 0;
      singleData.OT_DOUBLEHDREGULAR = 0;
      singleData.OT_EXC_DOUBLEHDREGULAR = 0;
      singleData.NSD_REGULAR = 0 ;
      singleData.NSDOT_REGULAR = this.overtimedetails[i].nightOT;
      singleData.NSDOT_EXC_REGULAR = this.overtimedetails[i].exccessNightOt;
      singleData.NSD_RESTDAY = this.overtimedetails[i].restNightOt;
      singleData.NSDOT_RESTDAY = 0;
      singleData.NSDOT_EXC_RESTDAY = this.overtimedetails[i].restExccessNightOt;
      singleData.NSD_LEGALHD = this.overtimedetails[i].legalExccessNightOt;
      singleData.NSDOT_LEGALHD = 0;
      singleData.NSDOT_EXC_LEGALHD = this.overtimedetails[i].legalExccessNightOt;
      singleData.NSD_LEGALHDONREST = 0;
      singleData.NSDOT_LEGALHDONREST = 0;
      singleData.NSDOT_EXC_LEGALHDONREST = 0;
      singleData.NSD_SPECIALHD = this.overtimedetails[i].specialNightOt;
      singleData.NSDOT_SPECIALHD = 0;
      singleData.NSDOT_EXC_SPECIALHD =  this.overtimedetails[i].specialExccessNightOt;
      singleData.NSD_SPECIALHDONREST = 0;
      singleData.NSDOT_SPECIALHDONREST = 0;
      singleData.NSDOT_EXC_SPECIALHDONREST = 0;
      singleData.NSD_DOUBLEHDREST = 0;
      singleData.NSDOT_DOUBLEHDREST = 0;
      singleData.NSDOT_EXC_DOUBLEHDREST = 0;
      singleData.NSD_DOUBLEHDREGULAR = 0;
      singleData.NSDOT_DOUBLEHDREGULAR = 0;
      singleData.NSDOT_EXC_DOUBLEHDREGULAR = 0;
      ExportData.push(singleData);
      //debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Employee_Overtime_Report',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'Employee_Overtime_Report'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    //debugger
    csvExporter.generateCsv(ExportData);

  }

}
