import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
import { AnnouncementFormComponent } from '../announcement-form/announcement-form.component';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-announcement-dashboard',
  templateUrl: './announcement-dashboard.component.html',
  styleUrls: ['./announcement-dashboard.component.css']
})

export class AnnouncementDashboardComponent implements OnInit {


  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router,private matDialog: MatDialog) { }
  viewMode: any;
  currentUrl: any;
  isConfirmed: any;
  term: any;
  date: any;
  annnounecemnetlist: any;
  annnounecemnetlist1: any
  todaydate: any;
  loader: any;
  roleid: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roleid = localStorage.getItem('roledid');
    this.loader = true;
    this.viewMode = 'tab1'
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.GetAnnouncements();
  }

  public GetAnnouncements() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetAnnouncementsByBuildingID(56)
      .subscribe({
        next: data => {
          debugger
          this.annnounecemnetlist = data.filter(x => x.filterdate >= this.todaydate);
          this.annnounecemnetlist1 = data.filter(x => x.filterdate < this.todaydate);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Announcements For Building ID');
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

  redirect(list: any) {
    window.location.href = list.reason;

  }

  delete(id: any) {
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete the selected record?",
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteAnnouncement(id)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully...!') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Announcement');
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
    });
  }
  bsRangeValue: any;
  selectDate(bsRangeValue: any) {

  }
  /* DATE SELECTOR 
    public getdate(event:any) {
      debugger
      this.startdate = this.datePipe.transform(event[0], 'yyyy-MM-dd');;    
      this.enddate = this.datePipe.transform(event[1], 'yyyy-MM-dd');;
      if (this.startdate == undefined) {
        Swal.fire('Please Select Start Date');
        this.enddate = ""
        this.loader=false;
      }
      else if (this.enddate == "") {
        this.ngOnInit();
      } 
      else if (this.enddate<this.startdate){
        Swal.fire('Enddate Must Be Greater Than Startdate')
        this.enddate = ""
        this.startdate=""
      }
      else {
        this.AliprojectService.GetApprovedAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist2 = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
              this.loader = false;
             
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.AliprojectService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
        this.AliprojectService.GetPendingAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist1 = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Pending Attendance Correction By StaffID');
              this.loader = false;
             
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.AliprojectService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
        this.AliprojectService.GetRejectedAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist3 = data
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Rejected Attendance Correction By StaffID');
              this.loader = false;
             
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.AliprojectService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
      }
    }
   */

    showDialog(){
      let ID = undefined
      this.matDialog.open(AnnouncementFormComponent, {
        data: ID,
        height:'auto',
        width:'75%'
      }).afterClosed()
        .subscribe(result => {
          console.log('Result' + result);
          
        });
    }
}