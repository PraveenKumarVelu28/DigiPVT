import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { timeStamp } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { LoanConfigurationMasterComponent } from '../loan-configuration-master/loan-configuration-master.component';
@Component({
  selector: 'app-loan-configuration-dash',
  templateUrl: './loan-configuration-dash.component.html',
  styleUrls: ['./loan-configuration-dash.component.css']
})

export class LoanConfigurationDashComponent implements OnInit {

  constructor(public DigipayrollServiceService: DigiofficecorehrService,private matDialog: MatDialog) { }
  file: any;
  term: any;
  holidaylist: any
  currentUrl: any;
  loader: any;
  login: any;

  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader = true;
    this.GetHolidays();
  }

  public GetHolidays() {
    debugger
    this.DigipayrollServiceService.GetLoanConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.holidaylist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Loan Configuration');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public DeleteHolidays(ID: any) {
    debugger;
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigipayrollServiceService.DeleteLoanConfiguration(ID)
          .subscribe({
            next: data => {
              /*  Swal.fire('Deleted Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Leave Configuration');
              this.loader = false;
              // Insert error in Db Here//
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
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
    let ID= undefined
    this.matDialog.open(LoanConfigurationMasterComponent, {
      data:ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }

  edit(ID : any){
    this.matDialog.open(LoanConfigurationMasterComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }

}