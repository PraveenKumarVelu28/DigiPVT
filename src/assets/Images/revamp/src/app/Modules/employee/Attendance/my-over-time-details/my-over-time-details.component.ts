import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import { ApplyOtComponent } from '../apply-ot/apply-ot.component';
@Component({
  selector: 'app-my-over-time-details',
  templateUrl: './my-over-time-details.component.html',
  styleUrls: ['./my-over-time-details.component.css']
})

export class MyOverTimeDetailsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private matDialog: MatDialog, public router: Router) { }
  viewMode = 'tab1';
  viewMode1 = 'tab11';
  viewMode2 = 'tab111';
  roleid: any;
  locatorlist: any;
  term: any;
  staffid: any;
  attendancelist: any;
  attendancelist1: any;
  attendancelist2: any;
  attendancelist3: any;
  timedetails1: any;
  timedetails2: any;
  timedetails3: any;
  currentUrl: any;
  date: any;
  edate: any;
  timedetails: any;
  count: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  OTEligibility: any;
  login: any;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.staffid = localStorage.getItem('staffid');
    this.GetMyOverTimeDetails();
    this.login = sessionStorage.getItem('roledid');
    this.roleid = localStorage.getItem('roledid');

    this.OTEligibility = localStorage.getItem('OTEligibility');
    //this.GetAttendance();
  }




  sdate: any;
  public filterdate() {

    debugger
    if (this.edate == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetStaffOverTimeDetailsByDate(this.sdate, this.edate).subscribe(data => {
        debugger
        this.timedetails = data;
        this.loader = false;
        this.timedetails1 = data.filter(x => x.staffID == localStorage.getItem('staffid') && (x.status == 'Manager Pending'));
        this.timedetails2 = data.filter(x => x.staffID == localStorage.getItem('staffid') && (x.status == 'Manager Approved'));
        this.timedetails3 = data.filter(x => x.staffID == localStorage.getItem('staffid') && x.status == 'Manager Rejected');

      })
    }
  }


  public CancelLeave(list: any) {
    debugger
    this.showPopup = 0;
    this.loader = true;
    this.DigiofficeService.DeleteStaffOverTimeDetails(list.id)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire('Cancelled Successfully'); */
          this.ngOnInit();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 30;
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Staff Over Time Details');
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

  public GetMyOverTimeDetails() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetStaffOverTimeDetailsByEmployeID(this.staffid, '2022-01-01', '2025-12-01')
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;
          this.timedetails1 = data.filter(x => (x.status == 'Manager Pending' || x.status == 'Manager Pending HR Pending'));
          this.timedetails2 = data.filter(x => (x.status == 'Manager Approved' || x.status == 'Manager Approved HR Pending'))
          this.timedetails3 = data.filter(x => x.status == 'Manager Rejected');
          this.count = this.timedetails.length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Over Time Details');
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
  Otdetails: any;
  noofhours: any;
  nightOT: any;
  restNormalOT: any;
  specialNormalOT: any;
  ExccessNightOt: any;
  ExccessNormalOt: any;
  RestNightOt: any;
  RestNormalOT: any;
  ExccessRestNormalOt: any;
  RestExccessNightOt: any;
  LegalNightOt: any;
  LegalNormalOT: any;
  LegalExccessNormalOt: any;
  LegalExccessNightOt: any;
  SpecialNightOt: any;
  SpecialNormalOT: any;
  SpecialExccessNormalOt: any;
  SpecialExccessNightOt: any;
  SpecialRestNightOt: any;
  SpecialRestNormalOT: any;
  SpecialRestExccessNormalOt: any;
  SpecialRestExccessNightOt: any;
  LegalRestNightOt: any;
  LegalRestNormalOT: any;
  LegalExccessRestNormalOt: any;
  LegalExccessRestNightOt: any;
  nSD_REGULAR: any;
  public GetOTDetails(time: any) {
    this.loader = true;
    this.DigiofficeService.GetStaffOverTimeDetailsByID(time.id)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.noofhours = temp[0].noofhours;
          this.nightOT = temp[0].nightOT;
          this.restNormalOT = temp[0].restNormalOT;
          this.specialNormalOT = temp[0].specialNormalOT;
          this.ExccessNightOt = temp[0].exccessNightOt;
          this.ExccessNormalOt = temp[0].exccessNormalOt;
          this.RestNightOt = temp[0].restNightOt;
          this.RestNormalOT = temp[0].restNormalOT;
          this.ExccessRestNormalOt = temp[0].exccessRestNormalOt;
          this.RestExccessNightOt = temp[0].restExccessNightOt;
          this.LegalNightOt = temp[0].legalNightOt;
          this.LegalNormalOT = temp[0].legalNormalOT;
          this.LegalExccessNormalOt = temp[0].legalExccessNormalOt;
          this.LegalExccessNightOt = temp[0].legalExccessNightOt;
          this.SpecialNightOt = temp[0].specialNightOt;
          this.SpecialNormalOT = temp[0].specialNormalOT;
          this.SpecialExccessNormalOt = temp[0].specialExccessNormalOt;
          this.SpecialExccessNightOt = temp[0].specialExccessNightOt;
          this.SpecialRestNightOt = temp[0].specialRestNightOt;
          this.SpecialRestNormalOT = temp[0].specialRestNormalOT;
          this.SpecialRestExccessNormalOt = temp[0].specialRestExccessNormalOt;
          this.SpecialRestExccessNightOt = temp[0].specialRestExccessNightOt;
          this.LegalRestNightOt = temp[0].legalRestNightOt;
          this.LegalRestNormalOT = temp[0].legalRestNormalOT;
          this.LegalExccessRestNormalOt = temp[0].legalExccessRestNormalOt;
          this.LegalExccessRestNightOt = temp[0].legalExccessRestNightOt;
          this.nSD_REGULAR = temp[0].nSD_REGULAR;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Over Time Details');
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
  public DeleteOvertimedetails(ID: any) {
    debugger;
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteStaffOverTimeDetails(ID)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Cancelled Successfully') */
              location.reload();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30;
            }, error: (err) => {
              // Swal.fire('Issue in Cancelling Overtime Request');
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

  multipleattachmentlist: any;
  image(id: any) {
    debugger
    this.DigiofficeService.GetStaffOverTimeDetailsAttachment().subscribe(
      data => {
        debugger
        this.multipleattachmentlist = data.filter(x => x.overTimeID == id);
        this.loader = false;
      }
    )

  }

  openAttchments(photo: any) {
    window.open(photo, '_blank');
  }

  public applyOT() {
    /*     debugger NewLeaveRequestComponent
        this.router.navigate(['/Employee/NewLeaveRequest']);
        this.loader = false; */

    this.matDialog.open(ApplyOtComponent, {
      height: 'auto',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }


}