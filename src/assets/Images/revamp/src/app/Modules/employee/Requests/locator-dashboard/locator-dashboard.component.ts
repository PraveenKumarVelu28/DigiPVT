import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LocatorRequestFormComponent } from '../locator-request-form/locator-request-form.component';
@Component({
  selector: 'app-locator-dashboard',
  templateUrl: './locator-dashboard.component.html',
  styleUrls: ['./locator-dashboard.component.css']
})

export class LocatorDashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private matDialog: MatDialog) { }
  viewMode = 'tab1';
  roleid: any;
  search: any;
  edate: any;
  staffID: any;
  filtereddate: any;
  todaydate: any;
  firstDayofcurrentmonth: any;
  currentUrl: any;
  locatorlist: any
  locatorlist1: any
  locatorlist2: any
  locatorlist3: any
  date: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  lastdayofcurrentmonth: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    this.lastdayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 30);
    this.lastdayofcurrentmonth = formatDate(this.lastdayofcurrentmonth, format, locale);
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.getlocatorlist();
  }

  public getlocatorlist() {
    debugger
    this.DigiofficeService.GetLocatorRequests(this.staffID, 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.locatorlist = data;
          this.locatorlist1 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == null)
          this.locatorlist2 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == 'Approved');
          this.locatorlist3 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == 'Rejected');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Locator List');
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

  public CancelLeave(list: any) {
    debugger
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.CancelLocatorRequest(list.id)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Cancelled Successfully'); */
              this.ngOnInit();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30;
            }, error: (err) => {
              // Swal.fire('Issue in Cancelling Locator Requests');
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

  public getdate() {
    debugger
    this.showPopup = 0;
    if (this.date == undefined) {
      /*  Swal.fire('Please Select Start Date'); */
      this.edate = ""
      this.loader = false;
      this.showPopup = 1;
      this, this.messageId = 28;
    }

    else if (this.edate == "") {
      this.edate = "";
      this.date = "";
      this.ngOnInit();
    }

    else if (this.edate < this.date) {
      /* Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.edate = ""
      this.date = ""
      this.loader = false;
      this.showPopup = 1;
      this, this.messageId = 29;
    }
    else {
      this.DigiofficeService.GetLocatorRequests(this.staffID, 1, this.date, this.edate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data;
            this.locatorlist1 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == null && (x.filterdate >= this.date && x.filterdate <= this.edate));
            this.locatorlist2 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == 'Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            this.locatorlist3 = data.filter(x => x.userID == localStorage.getItem('staffid') && x.approveStatus == 'Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate));
            this.loader = false;
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
  showDialog() {

    this.matDialog.open(LocatorRequestFormComponent, {

      height: 'auto',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }

}