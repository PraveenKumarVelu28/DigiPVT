import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-my-team-timesheet',
  templateUrl: './my-team-timesheet.component.html',
  styleUrls: ['./my-team-timesheet.component.css']
})

export class MyTeamTimesheetComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  viewMode = 'tab1';
  roleid: any;
  timesheets: any = [];
  staffID: any;
  IntID: boolean = false;
  public ID: any = [];
  BuildingList: any;
  ClassList: any;
  date: any;
  Notes: any;
  term: any;
  edate: any;
  GenderList: any;
  ScheduleDate: any;
  ScheduleTime: any;
  NoImagesAvail: any;
  timesheets1: any;
  temp: any
  timesheets2: any;
  timesheets3: any;
  currentUrl: any;
  selecallbtn: any;
  expencesName: any;
  Decription: any;
  id: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.loader = true;
    this.IntID = false;
    this.login = sessionStorage.getItem('roledid');
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid')
    this.GetTimeSheetDetailsforweb();
    this.GetTimeSheetDetailsforweb1();
    this.GetMyDetailsByStaffID();
  }

  EmployeeEmailID: any;
  manageremailid: any
  Staffleaveenitilment: any;
  ManagerName: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.Staffleaveenitilment = data;
          console.log(" this.Staffleaveenitilment ", this.Staffleaveenitilment)
          this.ManagerName = this.Staffleaveenitilment[0].name;
          this.manageremailid = this.Staffleaveenitilment[0].manageremailid;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Details');
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

  public GetTimeSheetDetailsforweb() {
    this.DigiofficeService.GetTimeSheetDetailsforweb()
      .subscribe({
        next: data => {
          debugger
          this.timesheets = data.filter(x => x.supervisor == this.staffID);
          this.EmployeeEmailID = this.timesheets[0].empEmailID;
          console.log("this.timesheets", this.timesheets)
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

  public GetTimeSheetDetailsforweb1() {
    debugger
    this.DigiofficeService.GetTimeSheetDetailsforweb()

      .subscribe({
        next: data => {
          debugger
          if (this.roleid == 2) {
            this.loader = false;
            this.timesheets1 = data.filter(x => x.supervisor == this.staffID && x.status == null && x.status != 'Approved By L1 Manager');
            this.timesheets2 = data.filter(x => x.supervisor == this.staffID && x.status == 'Rejected Manager L1');
            this.timesheets3 = data.filter(x => x.supervisor == this.staffID && x.status == 'Approved By L1 Manager');
          }
          else {
            this.loader = false;
            this.timesheets1 = data.filter(x => x.status == null && x.status != 'Approved By L1 Manager');
            this.timesheets2 = data.filter(x => x.status == 'Rejected Manager L1');
            this.timesheets3 = data.filter(x => x.status == 'Approved By L1 Manager');
          }
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

  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    if (this.selecallbtn == true) {
      this.selecallbtn = false;
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
          inputs[i].checked = false;
          // This way it won't flip flop them and will set them all to the same value which is passed into the function
        }
      }
    }
    else {
      this.selecallbtn = true;
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
          inputs[i].checked = checked;
          // This way it won't flip flop them and will set them all to the same value which is passed into the function
        }
      }
      for (var i = 0; i < this.timesheets1.length; i++) {
        this.ID.push(this.timesheets1[i].id);
      }
    }
  }

  public Approveall() {
    this.showPopup = 0;
    debugger
    this.selecallbtn = false;
    for (var i = 0; i < this.ID.length; i++) {
      var entity = {
        ID: this.ID[i],
        'Status': 'Approved By L1 Manager',
        ApproveBit: 1
      }
      this.DigiofficeService.ApproveTimeSheet(entity)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire("Approved Successfully"); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 73;
          }, error: (err) => {
            // Swal.fire('Issue in Approving TimeSheet ');
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
    location.reload();
  }

  public ApproveTimeSheet(id: any) {
    this.showPopup = 0;
    debugger;
    Swal.fire({
      title: 'Approve Record',
      text: "Are you sure? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!'
    }).then((result) => {
      if (result.value == true) {
        var entity = {
          ID: id,
          'Status': 'Approved By L1 Manager',
          ApproveBit: 1
        }
        this.DigiofficeService.ApproveTimeSheet(entity)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire("Approved Successfully"); */

              location.reload();
              this.sendemail();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 73;
            }, error: (err) => {
              // Swal.fire('Issue in Approving TimeSheet');
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

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.EmployeeEmailID,
      'emailsubject': 'Approved Mail',
      'Message': 'Your Timesheet Request Approve Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Approved Timesheet in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.EmployeeEmailID,
      'bcclist': this.EmployeeEmailID,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Attachments For Email');

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

  public getid(id: any) {
    this.id = id
  }

  public getdate() {
    debugger
    this.showPopup = 0;
    if (this.edate == "") {
      this.ngOnInit();
    }
    else if (this.date == "" || this.date == undefined) {
      /*  Swal.fire('Please Select Start Date First'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 32;
    }
    else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            if (this.roleid == 2) {
              this.loader = false;
              this.timesheets1 = data.filter(x => x.supervisor == this.staffID && x.status == null && x.status != 'Approved By L1 Manager' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.timesheets2 = data.filter(x => x.supervisor == this.staffID && x.status == 'Rejected Manager L1' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.timesheets3 = data.filter(x => x.supervisor == this.staffID && x.status == 'Approved By L1 Manager' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            }
            else {
              this.loader = false;
              this.timesheets1 = data.filter(x => x.status == null && x.status != 'Approved By L1 Manager' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.timesheets2 = data.filter(x => x.status == 'Rejected Manager L1' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.timesheets3 = data.filter(x => x.status == 'Approved By L1 Manager' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            }
            this.timesheets = data.filter(x => x.supervisor == this.staffID);
          }, error: (err) => {
            // Swal.fire('Issue in Getting TimeSheet Details For Web');
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

  public ApproveTimeSheet1() {
    debugger;
    this.showPopup = 0
    var entity = {
      ID: this.id,
      Status: 'Rejected Manager L1',
      Notes: this.Notes
    }
    this.DigiofficeService.ApproveTimeSheet(entity)
      .subscribe({
        next: data => {
          debugger
          this.sendemail1();
          /*     Swal.fire("Rejected Successfully"); */

          location.reload();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 74;
        }, error: (err) => {
          // Swal.fire('Issue in Rejecting TimeSheet');
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

  public sendemail1() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.EmployeeEmailID,
      'emailsubject': 'Rejected Mail',
      'Message': 'Your Timesheet Request Reject Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Rejected Timesheet in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.EmployeeEmailID,
      'bcclist': this.EmployeeEmailID,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Attachments For Email');

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


  public getCheckbocdetails(evn: any) {
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

      this.IntID = true;
      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.ID.push(evn.id);
    }

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

}