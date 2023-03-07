import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExportToCsv } from 'export-to-csv';
import * as XLSX from 'xlsx';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-employee-attendance-report',
  templateUrl: './employee-attendance-report.component.html',
  styleUrls: ['./employee-attendance-report.component.css']
})
export class EmployeeAttendanceReportComponent implements OnInit {
  currentUrl: any;
  companycode: any
  loader: boolean = false;


  constructor(public router: Router, private datePipe: DatePipe, public DigiofficeService: DigiofficecorehrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.companycode = sessionStorage.getItem('companycode');
    this.GetAttendance();

  }
  attendancedetails: any = [];

  public GetAttendance() {
    this.loader = true;
    this.DigiofficeService.GetEmployeeAttedanceReport('2022-10-15', '2022-10-16')
      .subscribe({
        next: data => {
          debugger
          this.attendancedetails = data;
          console.log('Attedance', this.attendancedetails)
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



  // fileName = 'OnBoarding Report.xlsx';

  // public exportexcel1(): void {
  //   /* table id is passed over here */
  //   let element = document.getElementById('lvs');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);

  // }
  startdate: any;
  enddate: any;
  public getedate() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetEmployeeAttedanceReport(this.startdate, this.enddate)
      .subscribe({
        next: data => {
          debugger
          this.attendancedetails = data;
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



  undefined: any;
  sequenceNumber1: any
  attendancelist: any
  public exportexcel1() {
    debugger
    var ExportData = [];
    this.sequenceNumber1 = 0;
    this.undefined = 'NA'
    for (let i = 0; i < this.attendancedetails.length; i++) {
      debugger;
      this.sequenceNumber1 = i + 1;
      let singleData = {
        Date: String,
        EmployeeName: String,
        EmployeeNo: String,
        Position: String,
        CompanyName: String,
        ShiftCode: String,
        ShiftIn: String,
        ShiftOut: String,
        PunchIN: String,
        Minuteslate: String,
        PunchOut: String,
        MinutesUndertime: String,
        DayType: String,
        Status: String,
        Remarks: String,

      }
      //singleData.SequenceNumber = this.sequenceNumber1;
      singleData.Date = this.attendancedetails[i].dateforreport;
      singleData.EmployeeName = this.attendancedetails[i].name1;
      singleData.EmployeeNo = this.attendancedetails[i].employeeID;
      singleData.Position = this.attendancedetails[i].role;
      singleData.CompanyName = this.companycode;
      singleData.ShiftCode = this.attendancedetails[i].shiftcode;
      singleData.ShiftIn = this.attendancedetails[i].expectedIn;

      singleData.ShiftOut = this.attendancedetails[i].expectedOut;

      singleData.PunchIN = this.attendancedetails[i].startTime;
      singleData.Minuteslate = this.attendancedetails[i].mlate < 0 ? 0 : this.attendancedetails[i].mlate;
      singleData.PunchOut = this.attendancedetails[i].endTime;
      singleData.MinutesUndertime = this.attendancedetails[i].ulate < 0 ? 0 : this.attendancedetails[i].ulate;
      singleData.DayType = this.attendancedetails[i].daytype;
      singleData.Status = this.attendancedetails[i].reportstatus;
      singleData.Remarks = this.attendancedetails[i].remarks;
      ExportData.push(singleData);
      debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'EMPLOYEE ATTEDANCE REPORT',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'EMPLOYEE ATTEDANCE REPORT'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    debugger
    csvExporter.generateCsv(ExportData);

  }

}
