import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { ThrowStmt } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { StaffShiftMasterByManagerIDComponent } from '../../TeamShift/staff-shift-master-by-manager-id/staff-shift-master-by-manager-id.component';
@Component({
  selector: 'app-my-team-weekly-shift',
  templateUrl: './my-team-weekly-shift.component.html',
  styleUrls: ['./my-team-weekly-shift.component.css']
})

export class MyTeamWeeklyShiftComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService,private matDialog: MatDialog) { }
  date: any;
  edate: any;
  roleid: any;
  todaydate: any;
  staffid: any;
  firstdayofcurrentweek: any;
  lastdayofcurrentweek: any;
  currentUrl: any
  term: any;
  workplaceList: any;
  p: any = 1;
  count1: any = 10;
  count: any;
  loader: any;
  StartTime: any;
  EndTime: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.loader = true;
    this.currentUrl = window.location.href;
    this.roleid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
    this.GetAnnouncements();
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

  public filterdate() {
    this.showPopup=0;
    debugger
    if (this.edate == "") {
      this.ngOnInit();
    }
    else if (this.date == undefined || this.date == "") {
      /* Swal.fire('Please Select Start Date First') */
      this.loader=false;
      this.showPopup=1;
      this.messageId=32;
    }
    else {
      this.DigiofficeService.GetStaffShiftDetails()
        .subscribe({
          next: data => {
            debugger
            if (this.roleid == 2) {
              this.workplaceList = data.filter(x => x.supervisor == this.staffid && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.loader = false;
            }
            else {
              this.workplaceList = data.filter(x => (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.loader = false;
            }
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

  public GetAnnouncements() {
    this.loader = true;
    this.DigiofficeService.GetStaffShiftDetails()
      .subscribe({
        next: data => {
          debugger

          if (this.roleid == 2) {
            this.workplaceList = data.filter(x => x.supervisor == this.staffid);
            this.loader = false;
          }
          else {
            this.workplaceList = data;
            this.loader = false;
          }


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

  id: any;
  public ApproveTimeSheet(item: any) {
    debugger;
    this.loader = false;
    this.Save(item);
  }

  public getid(id: any) {
    this.id = id;
    this.loader = false;
  }

  // public Save() {
  //   debugger
  //   debugger
  //   var entity = {
  //     'ID': item.id,
  //     'UserID': item.staffID,
  //     'SigninDate': this.formatDate(item.sDate) + "," + item.startTime,
  //     'SignoutDate': this.formatDate(item.attendanceDate) + "," + item.endTime,
  //     'punchinip': this.ipaddress,
  //     'punchoutip': this.ipaddress,
  //     'ApprovalStatus': 'Manager Approved'
  //   }
  //   this.DigiofficeService.UploadbulkAttendanceWeb(entity)
  //     .subscribe(data => {
  //       if (data == -1) {
  //         Swal.fire('Leave is applied on this date so can not complete Correction Request.');
  //         this.loader=false;
  //       }
  //       else {
  //         Swal.fire('Attendance Correction Updated Successfully');
  //         this.loader=false;
  //         this.ngOnInit();
  //       }
  //     })
  // }
  Shiftname: any;
  Notes: any;
  Employeeid: any;
  noofdaysarray: any = [];
  public Save(item: any) {
    debugger
    this.Employeeid = item.staffID;
   // this.noofdaysarray = this.getDaysBetweenDates(item.shiftDate, item.endDate, item.restdays.substring(0, item.restdays.indexOf(',')), item.restdays.substring(item.restdays.indexOf(',') + 1, item.restdays.length - 1));
    var entity = {
      'ID': item.id,
      'Comments': this.Notes
    }
    Swal.fire({
      title: 'Approve Record',
      text: "Are you sure? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.StaffShiftDetailsApproveByManager(entity)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Approved Successfully');
              //this.saveEmployeeAttendance_Restdays();
              this.loader = false;
              this.showPopup=1;
              this.messageId=73;
              this.ngOnInit()
            }, error: (err) => {
              // Swal.fire('Issue in StaffShiftDetailsApproveByManager');
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

  public saveEmployeeAttendance_Restdays() {
    debugger
    for (let i = 0; i < this.noofdaysarray.length; i++) {
      var obj = {
        'EmployeeID': this.Employeeid,
        'Date': this.noofdaysarray[i],
        'remarks': 'OFF',
      }
      this.DigiofficeService.InsertEmployeeAttendance_Restdays(obj).subscribe(
        data => {
          debugger
        },
      )
    }
  }
  public getDaysBetweenDates(start: any, end: any, dayName: any, dayName2: any) {
    debugger
    var result = [];
    var result1 = [];

    var days: any = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
    var day = days[dayName.toLowerCase().substr(0, 3)];
    var day1 = days[dayName2.toLowerCase().substr(0, 3)];
    // Copy start date
    var current = new Date(start);
    // Shift to next of required days
    current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
    // While less than end date, add dates to result array
    while (current < new Date(end)) {
      result.push(new Date(+current));
      current.setDate(current.getDate() + 7);
    }
    var current1 = new Date(start);
    // Shift to next of required days
    current1.setDate(current1.getDate() + (day1 - current1.getDay() + 7) % 7);
    // While less than end date, add dates to result array
    while (current1 < new Date(end)) {
      result.push(new Date(+current1));
      current1.setDate(current1.getDate() + 7);
    }
    console.log(result.length + result1.length)
    debugger
    return result;
  }



  public cancel() {
    location.reload();
    this.loader = false;
  }

  public RejectShiftCoorection() {
    this.showPopup=0;

    debugger;[]
    var entity = {
      ID: this.id,
      Comments: this.Notes
    }
    this.DigiofficeService.StaffShiftDetailsRejectByManager(entity)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("Rejected Successfully"); */
          location.reload();
          this.loader = false;
          this.showPopup=1;
          this.messageId=74;
        }, error: (err) => {
          // Swal.fire('Issue in Rejecting Shift Correction');
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
  showDialog(){
    let ID = undefined
    this.matDialog.open(StaffShiftMasterByManagerIDComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
}