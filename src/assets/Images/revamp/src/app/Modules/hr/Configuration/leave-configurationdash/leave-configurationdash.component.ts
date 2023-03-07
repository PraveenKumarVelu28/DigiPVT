import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { LeaveConfigurationComponent } from '../leave-configuration/leave-configuration.component';
@Component({
  selector: 'app-leave-configurationdash',
  templateUrl: './leave-configurationdash.component.html',
  styleUrls: ['./leave-configurationdash.component.css']
})

export class LeaveConfigurationdashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService,private matDialog: MatDialog) { }
  currentUrl: any;
  term: any;
  holidaylist: any;
  file: any;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.loader = true;
    this.login = sessionStorage.getItem('roledid');
    this.GetHolidays();
  }

  public GetHolidays() {
    debugger
    this.DigiofficeService.GetLeaveConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.holidaylist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Leave Configuration');
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

  public DeleteHolidays(ID: any) {
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
        this.DigiofficeService.DeleteLeaveConfiguration(ID)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit()
            }, error: (err) => {
              // Swal.fire('Issue in Deleting LeaveConfiguration');
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
    })
  }

  public getmedicalUrl(file: any) {
    debugger
    this.file = file;
  }

  showDialog() {
    debugger
    let ID = undefined
    this.matDialog.open(LeaveConfigurationComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
  
  edit(ID : any){
    this.matDialog.open(LeaveConfigurationComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
}