import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-grievancedash',
  templateUrl: './grievancedash.component.html',
  styleUrls: ['./grievancedash.component.css']
})

export class GrievancedashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any;
  enddate: any;
  currentUrl: any;
  term: any;
  leavelist: any
  date: any;
  search: any;
  id: any;
  Notes1: any
  p: any = 1;
  count1: any = 10;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roledid = localStorage.getItem('roledid');
    this.GetCountryType();
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

  public GetCountryType() {
    debugger
    this.DigiofficeService.GetGrivenceRequests()
      .subscribe({
        next: data => {
          debugger
          if (this.roledid == 9) {
            this.leavelist = data;
            this.EmployeeEmailID = this.leavelist[0].empEmailID;
            console.log("this.leavelist", this.leavelist)
            this.loader = false;
          }
          else {
            this.leavelist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Grivence Requests');
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

  public getenddate() {
    debugger;
    this.showPopup = 0;
    if (this.date == undefined) {
      /* Swal.fire('Please Select Start Date'); */
      this.enddate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28
    }

    else if (this.enddate == "") {
      this.enddate = "";
      this.date = "";
      this.ngOnInit();
    }

    else if (this.enddate < this.date) {
      /* Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.enddate = ""
      this.date = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29
    }
    else {
      this.DigiofficeService.GetGrivenceRequests()
        .subscribe({
          next: data => {
            debugger
            this.leavelist = data.filter(x => (x.filterdate >= this.date && x.filterdate <= this.enddate));
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Grivence Requests');
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

  public DeleteGrivenceRequests(ID: any) {
    debugger
    this.showPopup = 0;
    Swal.fire({
      title: 'Cancel Record',
      text: 'Are you sure you want to cancel it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteGrivenceRequests(ID)
          .subscribe({
            next: data => {
              debugger
              /*    Swal.fire('Cancelled Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Grivence Requests');
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

  public GetReply(id: any) {
    debugger
    this.id = id;
  }

  public UpdateReply() {
    debugger
    this.showPopup = 0;
    var entity = {
      'ID': this.id,
      'Notes': this.Notes1
    }
    this.DigiofficeService.GrievanceReply(entity)
      .subscribe({
        next: data => {
          debugger
          this.sendemail();
          /*    Swal.fire('Replied Successfully') */
          location.reload();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 207
        }, error: (err) => {
          // Swal.fire('Issue in Updating Grievance reply');
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

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.EmployeeEmailID,
      'emailsubject': 'Grievance Replied Mail',
      'Message': 'Your Grievance Request Approve Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Replied Grievance in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
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

  multipleattachmentlist: any;
  image(id: any) {
    debugger
    this.DigiofficeService.GetGrivenceRequestsAttachment().subscribe(
      data => {
        debugger
        this.multipleattachmentlist = data.filter(x => x.grivenceID == id);
        this.loader = false;
      }
    )

  }

  openAttchments(photo: any) {
    window.open(photo, '_blank');
  }

}