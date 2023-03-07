import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppMetadataCache } from '@azure/msal-common';
import { type } from 'os';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-my-team-attendence-regularisation',
  templateUrl: './my-team-attendence-regularisation.component.html',
  styleUrls: ['./my-team-attendence-regularisation.component.css']
})

export class MyTeamAttendenceRegularisationComponent implements OnInit {
  loader: any;

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  viewMode = 'tab1';
  roleid: any;
  staffID: any;
  firstdayofcurrentweek: any
  lastdayofcurrentweek: any
  firstDayofcurrentmonth: any
  todaydate: any
  attendancelist: any;
  currentUrl: any;
  date: any;
  term: any
  attendancelist2: any;
  attendancelist3: any
  startdate: any;
  attendancelist1: any;
  enddate: any
  selecallbtn: any
  ID: any;
  Approve: any;
  temp: any;
  IntID: boolean = false;
  p: any = 1;
  count1: any = 10;
  count: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.IntID = false;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetAttendance();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    curr.setDate(curr.getDate() + 1)
    this.todaydate = formatDate(myDate, format, locale);
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    this.firstdayofcurrentweek = new Date(curr.setDate(first)).toUTCString();
    this.lastdayofcurrentweek = new Date(curr.setDate(last)).toUTCString();
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.firstdayofcurrentweek = formatDate(this.firstdayofcurrentweek, format, locale);
    this.lastdayofcurrentweek = formatDate(this.lastdayofcurrentweek, format, locale);
  }

  public GetAttendance() {
    debugger
    this.DigiofficeService.GetAttendance()
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data.filter(x => x.supervisor == this.staffID)
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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
    debugger
    this.DigiofficeService.GetAttendance()
      .subscribe({
        next: data => {
          debugger
          if (this.roleid == 2) {
            this.attendancelist1 = data.filter(x => x.supervisor == this.staffID && x.latepunchin == 'Yes' && x.approve == null)
          }
          else {
            this.attendancelist1 = data.filter(x => x.latepunchin == 'Yes' && x.approve == null);
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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
    this.DigiofficeService.GetAttendance()
      .subscribe({
        next: data => {
          debugger
          if (this.roleid == 2) {
            this.attendancelist2 = data.filter(x => x.supervisor == this.staffID && x.latepunchin == 'Yes' && x.approve == 1)
          }
          else {
            this.attendancelist2 = data.filter(x => x.latepunchin == 'Yes' && x.approve == 1);
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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
    this.DigiofficeService.GetAttendance()
      .subscribe({
        next: data => {
          debugger
          if (this.roleid == 2) {
            this.attendancelist3 = data.filter(x => x.supervisor == this.staffID && x.latepunchin == 'Yes' && x.approve == 0)
          }
          else {
            this.attendancelist3 = data.filter(x => x.latepunchin == 'Yes' && x.approve == 0);
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

  public getenddate(event: any) {
    debugger
    if (this.enddate == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            if (this.roleid == 2) {
              this.attendancelist1 = data.filter(x => x.supervisor == this.staffID && (x.filterdate >= this.startdate && x.filterdate <= this.enddate))
            }
            else {
              {
                this.attendancelist1 = data.filter(x => x.filterdate >= this.startdate && x.filterdate <= this.enddate)
              }
            }
          }, error: (err) => {
            // Swal.fire('Issue in Getting Attendance');
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

  public currentweek() {
    debugger
    this.DigiofficeService.GetAttendance()
      .subscribe({
        next: data => {
          debugger
          if (this.roleid == 2) {
            this.attendancelist1 = data.filter(x => x.supervisor == this.staffID && (x.filterdate >= this.firstdayofcurrentweek && x.filterdate <= this.todaydate));
            this.attendancelist2 = data.filter(x => x.supervisor == this.staffID && (x.filterdate >= this.firstdayofcurrentweek && x.filterdate <= this.todaydate));
          }
          else {
            this.attendancelist1 = data.filter(x => x.filterdate >= this.firstdayofcurrentweek && x.filterdate <= this.todaydate && x.latepunchin == 'Yes' && x.approve == null);
            this.attendancelist2 = data.filter(x => (x.filterdate >= this.firstdayofcurrentweek && x.filterdate <= this.todaydate) && x.latepunchin == 'Yes' && x.approve == 1)
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

  public currentmonth() {
    this.DigiofficeService.GetAttendance().subscribe(data => {
      debugger
      if (this.roleid == 2) {
        this.attendancelist1 = data.filter(x => x.supervisor == this.staffID && (x.filterdate >= this.firstDayofcurrentmonth && x.filterdate <= this.todaydate))
        this.attendancelist2 = data.filter(x => x.supervisor == this.staffID && (x.filterdate >= this.firstDayofcurrentmonth && x.filterdate <= this.todaydate) && x.approve == 1 && x.latepunchin == 'Yes')
      }
      else {
        this.attendancelist1 = data.filter(x => x.filterdate >= this.firstDayofcurrentmonth && x.filterdate <= this.todaydate && x.latepunchin == 'Yes' && x.approve == null);
        this.attendancelist2 = data.filter(x => (x.filterdate >= this.firstDayofcurrentmonth && x.filterdate <= this.todaydate) && x.approve == 1 && x.latepunchin == 'Yes')
      }
    })
  }

  // selectALL(checked: boolean) { 
  //   if (this.selecallbtn == true) {
  //     this.selecallbtn = false;
  //     var inputs = document.getElementsByTagName("input");
  //     for (var i = 0; i < inputs.length; i++) {
  //       if (inputs[i].type == "checkbox") {
  //         inputs[i].checked = false;

  //       }
  //     }
  //   }
  //   else {
  //     this.selecallbtn = true;
  //     var inputs = document.getElementsByTagName("input");
  //     for (var i = 0; i < inputs.length; i++) {
  //       if (inputs[i].type == "checkbox") {
  //         inputs[i].checked = checked;

  //       }
  //     }
  //     for (var i = 0; i < this.attendancelist1.length; i++) {
  //       this.ID.push(this.attendancelist1[i].id);
  //     }
  //   }
  // }

  public selectALL(event: any) {

    if (event.target.checked == true) {

      this.selecallbtn = true;

      var inputs = document.getElementsByTagName("input");

      for (var i = 0; i < inputs.length; i++) {

        if (inputs[i].type == "checkbox") {

          inputs[i].checked = event.currentTarget.checked;

          // This way it won't flip flop them and will set them all to the same value which is passed into the function

        }

      }

    }

    else {

      this.selecallbtn = false;

      var inputs = document.getElementsByTagName("input");

      for (var i = 0; i < inputs.length; i++) {

        if (inputs[i].type == "checkbox") {

          inputs[i].checked = false;

          // This way it won't flip flop them and will set them all to the same value which is passed into the function

        }

      }

    }

  }

  // public getCheckbocdetails(evn: any) {
  //   let temp: any = evn;
  //   this.temp = Object.entries(temp);
  //   debugger
  //   if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
  //     this.IntID = false;
  //     this.ID = [];
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
  //     this.IntID = false;
  //   }
  //   else {
  //     debugger;
  //     this.selecallbtn = true;
  //     debugger
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
  //     this.IntID = true;
  //     this.ID.push(evn.id);
  //   }
  // }

  public getCheckbocdetails(evn: any, event: any) {
    debugger
    if (event.target.checked == true) {
      this.selecallbtn = true;
      let temp: any = evn;
      this.temp = Object.entries(temp);
      debugger
      if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
        this.IntID = false;
        this.ID = [];
        this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
        this.IntID = false;
      }
      else {
        debugger;
        this.ID = [];
        debugger
        this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
        this.IntID = true;
        this.ID.push(evn.id);
        this.selecallbtn = false;
      }
    }

    // else {
    //   this.seleconebtn = false;
    // }
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        if (inputs[i].checked == true) {
          this.selecallbtn = true;
        }
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
      else {
        this.selecallbtn = false;
      }
    }
  }

  public Approveall() {
    debugger
    this.showPopup = 0;
    for (var i = 0; i < this.attendancelist1.length; i++) {
      var entity = {
        ID: this.attendancelist1[i].id,
        'Status': 'Approved By  Manager',
        Approve: 1
      }
      this.DigiofficeService.ApproveAttendanceRegularisation(entity)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire("Approved Successfully"); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 73
          }, error: (err) => {
            // Swal.fire('Issue in Approving Attendance Regularisation');
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
    this.ngOnInit();
  }

  public ApproveAttendanceRegularisation(id: any) {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: id,
      Approve: 1
    }
    this.DigiofficeService.ApproveAttendanceRegularisation(entity)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("Approved Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 73;
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Approving Attendance Regularisation');
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

  public RejctAttendanceRegularisation(id: any) {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: id,
      Approve: 0
    }
    this.DigiofficeService.ApproveAttendanceRegularisation(entity)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("Rejected Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 74
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Approving Attendance Regularisation');
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