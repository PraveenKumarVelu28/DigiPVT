import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoanMasterComponent } from '../loan-master/loan-master.component';
@Component({
  selector: 'app-loan-master-dash',
  templateUrl: './loan-master-dash.component.html',
  styleUrls: ['./loan-master-dash.component.css']
})
export class LoanMasterDashComponent implements OnInit {
  currentUrl: any;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  constructor(public DigiofficeService: DigiofficecorehrService,private matDialog: MatDialog,) { }
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader = true;
    this.GetLoanMaster();
  }
  term: any;
  leavelist: any
  public GetLoanMaster() {
    debugger
    this.DigiofficeService.GetLoanMaster()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Loan Master');
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

  ID: any;
  GetId(id: any) {
    this.ID = id
  }

  update() {
    debugger;
    this.showPopup = 0;
    if (this.ID == null || this.ID == undefined) {
      /*  Swal.fire('Please Select the Record to Modify'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 75;
      // location.href = "/PayGroup"
    }

    else {
      location.href = "#/HR/LeaveTypeForn/" + this.ID;
      this.loader = false;
    }
  }

  // public delete(id: any) {
  //   debugger
  //   this.DigiofficeService.DeleteLeaveTypeMaster(id).subscribe(data => {
  //     debugger
  //     Swal.fire('Deleted Successfully');
  //     this.ngOnInit();
  //   })
  // }




  delete(id: any) {
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete the selected record?",
      // icon: 'success',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value == true) {
        debugger
        this.DigiofficeService.DeleteLoanMaster(id).
          subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully...!') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Loan Master');
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
    });
  }

  public Disable_Loans(id: any) {
    this.showPopup = 0;
    var eb = {
      'ID': id,
      'Enable_Disable': 1
    }
    this.DigiofficeService.Enable_Disable_Loans(eb)
      .subscribe({
        next: data => {
          debugger
          {
            debugger
            /*  Swal.fire('Disabled Successfully.'); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 76;
            this.DigiofficeService.GetLoanMaster().
              subscribe({
                next: data => {
                  debugger
                  this.leavelist = data;
                  this.loader = false;
                }, error: (err) => {
                  // Swal.fire('Issue in Getting Loan Master');
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
        }, error: (err) => {
          // Swal.fire('Issue in Disable Loans');
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


  public Enable_Loans(id: any) {
    this.showPopup = 0;
    var eb = {
      'ID': id,
      'Enable_Disable': 0
    }
    this.DigiofficeService.Enable_Disable_Loans(eb).subscribe(

      data => {
        debugger
        /*   Swal.fire('Enabled Successfully.'); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 77;;
        this.DigiofficeService.GetLoanMaster()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Hoilday');
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
      },
    )

  }

  showDialog(){
    let ID = undefined
    this.matDialog.open(LoanMasterComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }

}
