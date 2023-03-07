import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-raisegrievanc',
  templateUrl: './raisegrievanc.component.html',
  styleUrls: ['./raisegrievanc.component.css']
})

export class RaisegrievancComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  maxdate: any
  date: any
  Notes: any;
  severity: any;
  currentUrl: any;
  type: any;
  Date: any;
  Anonymous: any;
  loader: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  todaydate: any;
  Grievancetype: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.UserName = localStorage.getItem('UserName');
    this.type = 0;
    this.severity = 0;
    this.maxdate = new Date().toISOString().split("T")[0];
    this.GetGrivenceMaster();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
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

  public GetGrivenceMaster() {
    debugger
    this.DigiofficeService.GetGrivenceMaster().
      subscribe({
        next: data => {
          debugger
          this.Grievancetype = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Grivence Master');
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

  public Save() {
    debugger;
    this.showPopup = 0;
    if (this.Date == undefined || this.type == undefined || this.Notes.length == 0) {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var object = {
        'StaffID': localStorage.getItem('staffid'),
        'Date': this.Date,
        'type1': this.type,
        'Notes': this.Notes,
        'Anonymity': this.Anonymous,
        'Attachment': this.attachmentsurl[0]
      }
      this.DigiofficeService.InsertGrivenceRequests(object)
        .subscribe({
          next: data => {
            debugger
            if (data == 0) {
              /*   Swal.fire("Select different date since you have applied leave on this date"); */
              this.loader = false; this.showPopup = 1;
              this.messageId = 53;
            }
            else {
              /*  Swal.fire("Saved Successfully"); */
              this.sendemail();
              this.GrivenceID = data;
              this.uploadmultipleimages();
              location.href = "#/Employee/Grievancedash";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Grivence Requests');
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
      this.loader = false;
    }
  }

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': 'dccasanova@asticom.com.ph',
      'emailsubject': 'Grievance Request',
      'Message': 'Your Grievance Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied Grievance in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': 'dccasanova@asticom.com.ph',
      'bcclist': 'dccasanova@asticom.com.ph',
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

  GrivenceID: any
  public uploadmultipleimages() {
    debugger
    for (let i = 0; i < this.attachmentsurl.length; i++) {
      var entity = {
        "Attachment": this.attachmentsurl[i],
        "GrivenceID": this.GrivenceID,
      }
      this.DigiofficeService.InsertGrivenceRequestsAttachment(entity).subscribe(
        data => {

          this.loader = false;
        }
      )
    }
  }

  public endingdatealert(even: any) {
    debugger
    this.showPopup = 0;
    this.Date = even.target.value;
    if (this.Date > this.todaydate) {
      /*      Swal.fire("Future Dates are not allowed") */
      location.reload();
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 54;
    }

  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.showPopup = 0;
    console.log(event);
    if (event.addedFiles[0].size / 1048576 > 2) {
      /* Swal.fire('Please Upload File Less than 2 MB.') */
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
  }

  public Cancel() {
    debugger
    location.href = "#/Employee/Grievancedash";
    this.loader = false;
  }

}