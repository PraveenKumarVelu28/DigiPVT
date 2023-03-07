import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { StaffShiftMasterComponent } from 'src/app/Modules/manager/TeamAttendance/staff-shift-master/staff-shift-master.component';
@Component({
  selector: 'app-weekly-shift',
  templateUrl: './weekly-shift.component.html',
  styleUrls: ['./weekly-shift.component.css']
})

export class WeeklyShiftComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService,private matDialog: MatDialog) { }
  roleid: any;
  firstdayofcurrentweek: any;
  lastdayofcurrentweek: any;
  todaydate: any;
  currentUrl: any;
  term: any;
  workplaceList: any;
  sdate: any;
  edate: any
  mindate: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  staffid: any;
  date: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.mindate = new Date().toISOString().split("T")[0];
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetStaffShiftDetails();
    this.login = sessionStorage.getItem('roledid');
    this.roleid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    this.todaydate = formatDate(myDate, format, locale);
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    this.firstdayofcurrentweek = new Date(curr.setDate(first)).toUTCString();
    this.lastdayofcurrentweek = new Date(curr.setDate(last)).toUTCString();
    this.firstdayofcurrentweek = formatDate(this.firstdayofcurrentweek, format, locale);
    this.lastdayofcurrentweek = formatDate(this.lastdayofcurrentweek, format, locale);
  }

  public GetStaffShiftDetails() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetStaffShiftDetails()
      .subscribe({
        next: data => {
          debugger
          this.workplaceList = data.filter(x => x.staffID == this.staffid);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Shift Details');
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


  public filterdate() {
    debugger
    this.showPopup = 0;
    if (this.edate == "") {
      this.sdate = "";
      this.edate = "";
      this.ngOnInit();
    }
    else if (this.edate < this.sdate) {
      /*    Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
      this.sdate = "";
      this.edate = "";
    }
    else if (this.sdate == undefined || this.sdate == "") {
     /*  Swal.fire('Please Select Start Date First') */
      this.sdate = "";
      this.edate = "";
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 32;
    }
    else {
      this.DigiofficeService.GetStaffShiftDetails()
        .subscribe({
          next: data => {
            debugger
            this.workplaceList = data.filter(x => x.staffID == this.staffid && (x.filterdate >= this.sdate && x.filterenddate <= this.edate));
          }, error: (err) => {
            // Swal.fire('Issue in Getting Staff Shift Details');
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

  public DeleteStaffShiftDetails(ID: any) {
    this.showPopup=0;
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      
    }).then((result:any) => {
      debugger
      if (result.value == true) {
        this.DigiofficeService.DeleteStaffShiftDetails(ID)
          .subscribe({
            next: data => {
              debugger
      /*         Swal.fire('Cancelled Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Staff Shift Master');
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

  showDialog(){
    let ID = undefined
    this.matDialog.open(StaffShiftMasterComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
}