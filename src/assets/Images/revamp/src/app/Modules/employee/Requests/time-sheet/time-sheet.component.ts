import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { TimesheetformComponent } from '../timesheetform/timesheetform.component';
@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})

export class TimeSheetComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private matDialog: MatDialog) { }
  viewMode = 'tab1';
  term: any;
  roleid: any;
  timesheets: any = [];
  timesheets1: any = [];
  timesheets2: any = [];
  timesheets3: any = [];
  currentUrl: any;
  date: any;
  startdate: any;
  enddate: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.GetTimeSheetDetailsforweb();
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roleid = localStorage.getItem('roledid');
    var date = new Date();
    var month = date.getMonth() + 1;
  }



  public GetTimeSheetDetailsforweb() {
    var date = new Date();
    var month = date.getMonth() + 1;
    this.DigiofficeService.GetTimeSheetDetailsforweb()
      .subscribe({
        next: data => {
          debugger
          this.timesheets = data.filter(x => x.userID == localStorage.getItem('staffid') && x.month1 == month);
          this.timesheets1 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.month1 == month && x.status == null);
          this.timesheets2 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.month1 == month && x.status == 'Approved By L1 Manager');
          this.timesheets3 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.month1 == month && x.status == 'Rejected Manager L1');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Time Sheet Details For Web');
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

  public newlevae() {
    /*  debugger  UICOMM
     this.router.navigate(['/Employee/Timesheetform']);
     this.loader = false; */

    this.matDialog.open(TimesheetformComponent, {

      height: 'auto',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }

  public getdate() {
    debugger
    this.showPopup = 0;
    var date = new Date();
    var month = date.getMonth() + 1;
    if (this.enddate == "") {
      this.ngOnInit();
    }
    else if (this.startdate == undefined || this.startdate == "") {
      /* Swal.fire('Please Select Start Date First'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 32;
    }
    else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets1 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.status == null && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.timesheets2 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.status == 'Approved By L1 Manager' && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.timesheets3 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.status == 'Rejected Manager L1' && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.timesheets = data.filter(x => x.userID == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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