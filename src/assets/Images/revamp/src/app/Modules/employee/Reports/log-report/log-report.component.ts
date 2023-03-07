import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.css']
})
export class LogReportComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  staffID: any;
  todaydate: any;
  filtereddate: any;
  firstDayofcurrentmonth: any;
  staffid: any;
  logactivitylist: any;
  startdate: any;
  enddate: any
  currentUrl: any;
  loader:any;
  StaffID:any;
  fileName = 'Log Report.xlsx';

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.roleid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
    this.staffID = localStorage.getItem('staffid');
    this.StaffID = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.GetLogActivityByDate();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }

  public GetLogActivityByDate() {
    debugger
    this.DigiofficeService.GetLogActivityByDate(this.StaffID, this.firstDayofcurrentmonth, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          this.logactivitylist = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Log Activity By Date');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.staffid = item.id;
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

  public getenddate(event: any) {
    debugger
    if (this.enddate == "") {
      this.ngOnInit();
    } else {
    this.DigiofficeService.GetLogActivityByDate(this.StaffID, this.startdate, this.enddate)
      .subscribe({
        next: data => {
          debugger
          this.logactivitylist = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Log Activity By Date');
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
  }

}