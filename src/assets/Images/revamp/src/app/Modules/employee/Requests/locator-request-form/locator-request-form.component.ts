import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import * as e from 'cors';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-locator-request-form',
  templateUrl: './locator-request-form.component.html',
  styleUrls: ['./locator-request-form.component.css']
})

export class LocatorRequestFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public dialogRef: MatDialogRef<LocatorRequestFormComponent>, public router: Router) { }
  TransportationType: any;
  Date: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  returnDate: any;
  mindate: any;
  mintime: any;
  currentUrl: any;
  Supervisor: any;
  Name: any;
  Project: any;
  Destination: any;
  Purpose: any;
  ContactPerson: any;
  ContactPhNo: any;
  TimeOfDeparture: any;
  TimeOfReturn: any;
  loader: any;
  travellist: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.UserName = localStorage.getItem('UserName');
    this.mindate = new Date().toISOString().split("T")[0];
    this.mintime = new Date().toISOString().split("T")[0];
    this.TransportationType = "";
    this.GetProjectMasterList();
    this.GetTransportRequestType();
    this.GetMyDetailsByStaffID();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'projectName',
      textField: 'projectName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  manageremailid: any
  Staffleaveenitilment: any;
  Touser: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.Staffleaveenitilment = data;
          this.Touser = this.Staffleaveenitilment[0].supervisor;
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

  public GetTransportRequestType() {
    debugger
    this.DigiofficeService.GetTransportRequestType()
      .subscribe({
        next: data => {
          debugger
          this.travellist = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Transport Request Type');
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

  public GetProjectMasterList() {
    this.DigiofficeService.GetProjectMasterList()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Project Master List');
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
    this.Project = item.projectName
  }

  onSelectAll(items: any) {
    console.log(items);
    this.Project = ''
  }

  public InsertLocatorRequest() {
    this.showPopup = 0;
    debugger
    if (this.Date == this.returnDate && this.TimeOfReturn < this.TimeOfDeparture) {
      /*      Swal.fire('End Time should be greater than Start Time'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 46;
      this.TimeOfDeparture = '';
      this.TimeOfReturn = '';
    }
    else {
      if (this.TransportationType == "" || this.TimeOfDeparture == "" || this.TimeOfReturn == "" || this.returnDate == "" || this.Destination == "" || this.Purpose == "" || this.TransportationType == undefined || this.TimeOfDeparture == undefined || this.TimeOfReturn == undefined || this.returnDate == "" || this.Destination == undefined || this.Purpose == undefined) {
        /*   Swal.fire('Please Fill All The Mandatory Fields'); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 7;
      }
      else {
        var eb = {
          'UserID': localStorage.getItem('staffid'),
          'Name': 'User',
          'Date': this.Date,
          'returndate': this.returnDate,
          'Project': this.Project,
          'Destination': this.Destination,
          'Purpose': this.Purpose,
          'ContactPerson': "Prashant",
          'ContactPhNo': "9975766322",
          'TimeOfDeparture': this.TimeOfDeparture,
          'TimeOfReturn': this.TimeOfReturn,
          'Supervisor': 1,
          'TransportationType': this.TransportationType,
          'Latitude': 0,
          'Longitude': 0,
          'Address': this.Destination,
          'Attachment': this.attachmentsurl[0]
        }
        this.DigiofficeService.InsertLocatorTable(eb)
          .subscribe({
            next: data => {
              debugger
              if (data == 0) {
                /*       Swal.fire('Request is alreday raised for this Time.'); */
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 47;
              } else {
                debugger
                this.sendemail();
                this.InsertNotification();
                /*  Swal.fire('Successfully Saved'); */
                this.LocatorID = data;
                this.uploadmultipleimages();
                this.router.navigate(['/Employee/LocatorDashboard']);
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 8;
              }
            }, error: (err) => {
              // Swal.fire('Issue in Inserting Locator Table');
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

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.manageremailid,
      'emailsubject': 'Locator Request',
      'Message': 'Your Locator Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied Locator in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.manageremailid,
      'bcclist': this.manageremailid,
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

  LocatorID: any
  public uploadmultipleimages() {
    debugger
    for (let i = 0; i < this.attachmentsurl.length; i++) {
      var entity = {
        "Attachment": this.attachmentsurl[i],
        "LocatorID": this.LocatorID,
      }
      this.DigiofficeService.InsertLocatorTableAttachment(entity).subscribe(
        data => {

          this.loader = false;
        }
      )
    }
  }

  public InsertNotification() {
    debugger
    var entity = {
      'Date': new Date(),
      'Event': 'Locator Request',
      'FromUser': 'Admin',
      'ToUser': 'Admin',
      'Message': 'Your Locator request has been submitted to Manager',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': localStorage.getItem('staffid'),
      'NotificationTypeID': 5,
      'VendorID': 0
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Notification');
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

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
    this.attachmentsurl = [];
  }

  onSelect21(event: any) {
    this.showPopup = 0;
    debugger
    console.log(event);
    if (event.addedFiles[0].size / 1048576 > 2) {
      /*  Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 14;
    } else {
      this.attachments21 = [];
      this.attachments21.push(...event.addedFiles);
      for (let i = 0; i < this.attachments21.length; i++) {
        this.DigiofficeService.UploadmultipleProjectAttachments(this.attachments21[i])
          .subscribe({
            next: data => {
              debugger
              if (data != undefined) {
                this.attachmentsurl.push(data);
                this.loader = false;
              }
            }, error: (err) => {
              // Swal.fire('Issue in Inserting Project Attachments');
              this.loader = false;
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
    // this.DigiofficeService.ProjectAttachments(this.attachments21)
    //   .subscribe({
    //     next: data => {
    //       debugger
    //       if (data != undefined) {
    //         this.attachmentsurl.push(data);
    //         Swal.fire('Attachment Added Successfully!!')
    //         this.loader = false;
    //       }
    //     }, error: (err) => {
    //       Swal.fire('Issue in Inserting Project Attachments');
    //       // Insert error in Db Here//
    //       var obj = {
    //         'PageName': this.currentUrl,
    //         'ErrorMessage': err.error.message
    //       }
    //       this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
    //         data => {
    //           debugger
    //         },
    //       )
    //     }
    //   })
  }

  // public Cancel() {
  //   debugger
  //   this.router.navigate(['/Employee/LocatorDashboard']);
  //   this.loader = false;
  // }
  public Cancel() {
    debugger
    this.ngOnInit();
    this.dialogRef.close(false);

  }

  checktime() {
    // if (this.TimeOfDeparture > this.TimeOfReturn) {
    //   Swal.fire('Time of Return Should be greater than Time of Departure')
    //   this.TimeOfReturn = ""
    // }
  }

  public getendate() {
    this.showPopup = 0;
    if (this.Date > this.returnDate) {
      /*  Swal.fire('End date should be greater than start date'); */
      this.returnDate = '';
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29
    }
  }

}