import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee-resignform',
  templateUrl: './employee-resignform.component.html',
  styleUrls: ['./employee-resignform.component.css']
})

export class EmployeeResignformComponent implements OnInit {

  constructor(private DigiofficeService: DigiofficecorehrService,public dialogRef: MatDialogRef<EmployeeResignformComponent>) { }
  employeeid: any;
  employeelist: any;
  date: any;
  comments: any;
  reason: any;
  public attachments21: any = [];
  public attachments: any = [];
  currentUrl: any;
  loader: any;
  public attachmentsurl: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.employeeid = localStorage.getItem('staffid');
    this.UserName = localStorage.getItem('UserName');
    this.GetMyDetails();
    this.GetMyDetailsByStaffID();
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

  public GetMyDetails() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.employeelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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
  onSelect21(event: any) {
    this.showPopup = 0;
    debugger
    console.log(event);
    if (event.addedFiles[0].size / 1048576 > 2) {
      /* Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 14;
    } else {
      // this.attachments21 = [];
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
  }

  save() {
    this.showPopup = 0;
    debugger
    if (this.reason == "" || this.date == "" || this.reason == undefined || this.date == undefined || this.comments == "" || this.comments == undefined) {
      /*  Swal.fire('Please Fill All The Mandatory Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      var entity = {
        "StaffID": this.employeeid,
        "Notes": this.reason,
        "lastworkingdate": this.date,
        "type": 1,
        "Attachment": this.attachmentsurl[0]
      }
      this.DigiofficeService.InsertStaffExitFormality(entity)
        .subscribe({
          next: data => {
            debugger
            this.StaffExitFormalityID = data;
            if (data == 0) {
              /*  Swal.fire("Already Request is Pending For You."); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 45;
            } else {
              /*  Swal.fire("Saved Successfully"); */
              this.sendemail();
              this.ResignID = data;
              this.uploadmultipleimages();
              location.href = "#/Employee/EmployeeResignation";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Staff Exit Formality');
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

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.manageremailid,
      'emailsubject': 'Resignation Request',
      'Message': 'Your Resignation Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied Resignation in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
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

  ResignID: any
  StaffExitFormalityID: any
  public uploadmultipleimages() {
    debugger
    for (let i = 0; i < this.attachmentsurl.length; i++) {
      var entity = {
        "StaffExitFormalityID": this.StaffExitFormalityID,
        "Attchament": this.attachmentsurl[i],

      }
      this.DigiofficeService.InsertStaffExitFormalityAttachment(entity).subscribe(
        data => {

          this.loader = false;
        }, (error => {
          console.log(error)
          alert("erre")
        })
      )
    }
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }


  // cancel() {
  //   location.href = "#/Employee/EmployeeResignation";
  //   this.loader = false;
  // }
  public cancel() {
    debugger
    this.ngOnInit();
    this.dialogRef.close(false);

  }

}