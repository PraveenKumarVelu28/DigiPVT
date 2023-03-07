import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-manager-locator-details',
  templateUrl: './manager-locator-details.component.html',
  styleUrls: ['./manager-locator-details.component.css']
})

export class ManagerLocatorDetailsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  IntID: boolean = false;
  public ID: any = [];
  viewMode = 'tab1';
  roleid: any;
  currentUrl: any;
  selecallbtn: any;
  edate: any
  date: any;
  term: any;
  locatorlist: any;
  locatorlist1: any;
  locatorlist2: any;
  locatorlist3: any;
  Notes: any;
  id: any;
  temp: any;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.login = sessionStorage.getItem('roledid');
    this.roleid = localStorage.getItem('roledid');
    this.getlocatorlist();
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

  public newlevae() {
    debugger
    this.router.navigate(['/NewLeaveRequest']);
    this.loader = false;
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
      for (var i = 0; i < this.locatorlist1.length; i++) {
        this.ID.push(this.locatorlist1[i].id);
      }
    }
  }

  public getlocatorlist() {
    debugger
    this.DigiofficeService.GetLocatorRequests(10331, 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.locatorlist = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
          this.EmployeeEmailID = this.locatorlist[0].empEmailID;
          console.log("this.locatorlist", this.locatorlist)
          if (this.roleid == 2) {
            this.loader = false;
            this.locatorlist1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == null);
            this.locatorlist2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == 'Approved');
            this.locatorlist3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == 'Rejected');
          }
          else {
            this.loader = false;
            this.locatorlist1 = data.filter(x => x.approveStatus == null);
            this.locatorlist2 = data.filter(x => x.approveStatus == 'Approved');
            this.locatorlist3 = data.filter(x => x.approveStatus == 'Rejected');
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Locator Requests');
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

  public Getedate() {
    this.showPopup = 0;
    debugger
    if (this.date == undefined) {
      /*  Swal.fire('Please Select Start Date'); */
      this.edate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 82;
    }

    else if (this.edate == "") {
      this.edate = "";
      this.date = "";
      this.ngOnInit();
    }

    else if (this.edate < this.date) {
      /*  Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.edate = ""
      this.date = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
    } else {
      this.DigiofficeService.GetLocatorRequests(10331, 1, this.date, this.edate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.filterdate >= this.date && x.filterdate <= this.edate));
            if (this.roleid == 2) {
              this.loader = false;
              this.locatorlist1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == null && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.locatorlist2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == 'Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.locatorlist3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.approveStatus == 'Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            }
            else {
              this.loader = false;
              this.locatorlist1 = data.filter(x => x.approveStatus == null && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.locatorlist2 = data.filter(x => x.approveStatus == 'Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.locatorlist3 = data.filter(x => x.approveStatus == 'Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            }
          }, error: (err) => {
            // Swal.fire('Issue in Getting Locator Requests');
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

  public getid(id: any) {
    this.id = id
  }

  public AcceptLocatorRequest(locator: any) {
    this.showPopup = 0;
    debugger
    Swal.fire({
      title: 'Approve Record',
      text: "Are you sure? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!'
    }).then((result) => {
      if (result.value == true) {
        var obj = {
          'ID': locator.id,
          'Notes': this.Notes,
          'Status': 'Approved'
        }

        this.DigiofficeService.UpdateLocatorStatus(obj)
          .subscribe({
            next: data => {
              debugger

              /*               Swal.fire('Approved Successfully'); */

              location.reload();

              this.loader = false;
              this.showPopup = 1;
              this.messageId = 73;
            }, error: (err) => {
              // Swal.fire('Issue in Updating Locator Status');
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
        this.sendemail();
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
      'emailsubject': 'Locator Approval Mail',
      'Message': 'Your Locator Request Approve Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Approved Your Locator in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
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

  public RejectLocatorRequest() {
    debugger
    var obj = {
      'ID': this.id,
      'Notes': 'Rejected L1 Manager',
      'Status': 'Rejected'
    }
    this.DigiofficeService.UpdateLocatorStatus(obj)
      .subscribe({
        next: data => {
          debugger
          this.sendemail1();
          /*         Swal.fire('Rejected Successfully'); */
          this.ngOnInit();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 74;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Locator Requests');
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
      'emailsubject': 'Locator Rejection Mail',
      'Message': 'Your Locator Request Reject Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Rejected your Locator in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
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

  public Approveall() {
    debugger
    this.showPopup = 0;
    this.selecallbtn = false;
    for (var i = 0; i < this.ID.length; i++) {
      var obj = {
        'ID': this.ID[i],
        'Notes': this.Notes,
        'Status': 'Approved'
      }
      this.DigiofficeService.UpdateLocatorStatus(obj)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Approved Successfully'); */
            this.ngOnInit();
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 73;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Locator Status');
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
    this.ngOnInit();
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
      this.selecallbtn = true;
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      this.ID.push(evn.id);
    }
  }

  multipleattachmentlist: any;
  image(id: any) {
    debugger
    this.DigiofficeService.GetLocatorTableAttachment().subscribe(
      data => {
        debugger
        this.multipleattachmentlist = data.filter(x => x.locatorID == id);
        this.loader = false;
      }
    )

  }

  openAttchments(photo: any) {
    window.open(photo, '_blank');
  }
}