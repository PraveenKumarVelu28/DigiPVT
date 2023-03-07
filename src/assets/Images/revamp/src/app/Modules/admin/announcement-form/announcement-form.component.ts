import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})

export class AnnouncementFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, public activatedroute: ActivatedRoute, public datepipe: DatePipe,public dialogRef: MatDialogRef<AnnouncementFormComponent>, @Inject(MAT_DIALOG_DATA) public ID: any) { }

  leavelist: any;
  Citylist: any;
  CityID: any;
  maxdate: any;
  currentUrl: any;
  public attachmentsurl: any = [];
  Name: any;
  Description: any;
  DateTime: any;
  Time: any;
  Venue: any;
  public attachments21: any = [];
  public attachments: any = [];
  loader: any;
  Attachment: any;
  Link: any;
  empid: any;
  companyID: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.companyID = sessionStorage.getItem('companyid');
    this.empid = localStorage.getItem('staffid');
    this.maxdate = new Date().toISOString().split("T")[0];
    this.CityID = "";
    this.GetCityType();
    this.GetAnnouncementsByBuildingID();
  }

  public GetCityType() {
    this.loader = true;
    this.DigiofficeService.GetCityType()
      .subscribe({
        next: data => {
          debugger
          this.Citylist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting City Type');
          // this.loader = false;
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
  attachmentpath: any;
  public GetAnnouncementsByBuildingID() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      // this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetAnnouncementsByBuildingID(56)
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.Name = this.leavelist[0].name;
              this.Description = this.leavelist[0].description;
              this.EndDate = this.leavelist[0].time;
              this.Venue = this.leavelist[0].venue;
              this.CityID = this.leavelist[0].cityID;
              this.DateTime = this.leavelist[0].dateTime
              this.Attachment = this.leavelist[0].attachment;
              this.attachmentpath = this.leavelist[0].attachmentpath;
              this.Link = this.leavelist[0].reason;
              // this.DateTime = this.datepipe.transform(this.leavelist[0].dateTime, 'yyyy-MM-dd');
            }, error: (err) => {
              // Swal.fire('Issue in Getting Announcement For Building ID');
              // this.loader = false;
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
    )
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.showPopup = 1;
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    /*  Swal.fire('Attachment Added Successfully'); */
    this.loader = false;
    this.messageId = 12
  }

  public save() {
    this.showPopup = 0;
    debugger
    this.loader = true;
    if (this.attachments21.length == 0) {
      /* Swal.fire('Please Fill All fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      this.DigiofficeService.ProjectAttachments(this.attachments21)
        .subscribe({
          next: data => {
            debugger
            this.attachmentsurl.push(data);
            this.attachments.length = 0;
            this.InsertAnnouncement();
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Project Attachments');
            // this.loader = false;
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
  EndDate: any;
  public InsertAnnouncement() {
    this.loader = true;
    this.showPopup = 0;
    debugger
    if (this.Name == undefined || this.Name == "" || this.Description == undefined || this.Description == "" || this.DateTime == undefined || this.DateTime == "" || this.EndDate == undefined || this.EndDate == "" || this.Venue == undefined || this.Venue == "") {
      /*  Swal.fire('Please Fill All fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'Name': this.Name,
        'FloorID': 1071322,
        'Description': this.Description,
        'Reason': this.Link,
        'DateTime': this.DateTime,
        // 'EndDate': this.EndDate,
        'Time': this.EndDate,
        'Venue': this.Venue,
        'ModifiedBy': 'Admin',
        'BuildingID': 56,
        'Attachment': this.attachmentsurl[0],
        'CityID': this.CityID,

      }
      this.DigiofficeService.InsertAnnouncements(eb)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire('Saved Successfully.'); */
            this.router.navigate(['/Admin/AnnouncementDashboard']);
            this.InsertNotification();
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Announcements');
            // this.loader = false;
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

  public InsertNotification() {
    this.showPopup = 0
    debugger
    var entity = {
      'Date': new Date(),
      'Event': 'Announcement',
      'FromUser': 'Admin',
      'ToUser': this.companyID,
      'Message': 'There is an Announcement From HR',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': localStorage.getItem('staffid'),
      'NotificationTypeID': 15,
      'VendorID': 0
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
          }
          /*  Swal.fire("Saved Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
          location.reload();
          // location.href = "#/Employee/TimeSheet";
          this.loader = false;
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

  public Update() {
    this.loader = true;
    debugger
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: data => {
          debugger
          this.attachmentsurl.push(data);
          this.attachments.length = 0;
          this.UpdateAnnouncement();
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Project Attachments');
          // this.loader = false;
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


  public UpdateAnnouncement() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    var eb = {
      'ID': this.ID,
      'Name': this.Name,
      'Description': this.Description,
      'Reason': this.Link,

      'DateTime': this.DateTime,
      // 'EndDate': this.EndDate,
      'Venue': this.Venue,
      'Time': this.EndDate,
      'BuildingID': 56,
      'FloorID': 1071322,
      'CityID': this.CityID,
      'Attachment': this.attachmentsurl[0] == "" ? this.attachmentpath : this.attachmentsurl[0],
    }
    this.DigiofficeService.UpdateAnnouncements(eb)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire('Updated Successfully.'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          this.attachments.length = 0;
          this.router.navigate(['/Admin/AnnouncementDashboard']);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Announcements');
          // this.loader = false;
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

  public Cancel() {
    debugger
    this.router.navigate(['/Admin/AnnouncementDashboard']);
    this.loader = false;
    this.dialogRef.close(false);

  }

}