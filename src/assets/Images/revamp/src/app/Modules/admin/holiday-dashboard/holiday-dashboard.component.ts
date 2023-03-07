import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { HolidayFormComponent } from '../holiday-form/holiday-form.component';
@Component({
  selector: 'app-holiday-dashboard',
  templateUrl: './holiday-dashboard.component.html',
  styleUrls: ['./holiday-dashboard.component.css']
})

export class HolidayDashboardComponent implements OnInit {
  constructor(public DigiofficeService: DigiofficecorehrService, private matDialog: MatDialog) { }
  roleid: any;
  province: any;
  currentUrl: any;
  term: any;
  holidaylist: any;
  file: any;
  loader: any;
  p: any = 1;
  count1: any = 10;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.province = localStorage.getItem('Province')
    this.roleid = localStorage.getItem('roledid');
    this.GetHolidays();
  }

  public GetHolidays() {
    debugger
    this.loader = true;
    if (this.roleid == 1 || this.roleid == 9) {
      this.DigiofficeService.GetHolidays()
        .subscribe({
          next: data => {
            debugger
            this.holidaylist = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Hoilday');
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
    else {
      this.DigiofficeService.GetHolidays()
        .subscribe({
          next: data => {
            debugger
            this.holidaylist = data
            // Commented as of now  filter(x => x.region == this.province || x.region == null);
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Hoilday');
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

  public DeleteHolidays(ID: any) {
    this.showPopup = 0;
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      debugger
      if (result.value == true) {
        this.DigiofficeService
          .DeleteHolidays(ID)
          .subscribe({
            next: data => {
              debugger
              /*     Swal.fire('Deleted Successfully') */
              this.ngOnInit();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Hoilday');
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
    })
  }

  public getmedicalUrl(file: any) {
    debugger
    this.file = file;
  }
  public addholiday() {
    /*     debugger NewLeaveRequestComponent
        this.router.navigate(['/Employee/NewLeaveRequest']);
        this.loader = false; */

    this.matDialog.open(HolidayFormComponent, {

      height: '80%',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }

  Edit(ID : any){
    this.matDialog.open(HolidayFormComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
}