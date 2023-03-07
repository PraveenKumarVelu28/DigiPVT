import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-loan-configuration-master',
  templateUrl: './loan-configuration-master.component.html',
  styleUrls: ['./loan-configuration-master.component.css']
})

export class LoanConfigurationMasterComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigiofficecorehrService,public dialogRef: MatDialogRef<LoanConfigurationMasterComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: any) { }
  OtherRolesApply: any;
  roleid: any
  staffID: any;
  // ID: any;
  ManualApply: any;
  result: any;
  Manager: any;
  HR: any;
  Payroll: any;
  Finance: any;
  ManagerApply: any;
  EmployeeApply: any;
  currentUrl: any;
  LoanCategory: any;
  term: any;
  leavelist: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roleid = sessionStorage.getItem('roledid');
    this.staffID = sessionStorage.getItem('staffid');
    this.GetLoanMaster();
    this.ActivatedRouterCall()
  }

  public ActivatedRouterCall() {
    this.ActivatedRoute.params.subscribe(params => {
      debugger;
      //this.ID = params['id'];
      if (this.ID == undefined) {
        this.LoanCategory = '',
          this.OtherRolesApply = '',
          this.EmployeeApply = '',
          this.ManagerApply = ''
      }
      else {
        this.DigipayrollServiceService.GetLoanConfiguration()
          .subscribe({
            next: data => {
              debugger
              this.result = data.filter(x => x.id == this.ID);
              this.LoanCategory = this.result[0].loanCategory;
              this.OtherRolesApply = this.result[0].otherRolesApply;
              this.EmployeeApply = this.result[0].employeeApply;
              this.ManagerApply = this.result[0].managerApply;
            }, error: (err) => {
              // Swal.fire('Issue in  Getting LoanConfiguration');
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
    }
    )
  }

  public GetLoanMaster() {
    debugger
    this.DigipayrollServiceService.GetLoanMaster()
      .subscribe({
        next: data => {
          this.leavelist = data
        }, error: (err) => {
          // Swal.fire('Issue in Getting Loan Master');
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

  public UpdateLoanConfiguration() {
    debugger;
    this.showPopup = 0;
    if (this.OtherRolesApply == undefined) {
      /*   Swal.fire('Please fill all the fields') */

      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        ID: this.ID,
        LoanCategory: this.LoanCategory,
        OtherRolesApply: this.OtherRolesApply,
        EmployeeApply: this.EmployeeApply,
        ManagerApply: this.ManagerApply
      }
      this.DigipayrollServiceService.UpdateLoanConfiguration(entity)
        .subscribe({
          next: data => {
            /*   Swal.fire("Updated Successfully"); */
            this.showPopup = 1;
            this.messageId = 10;
            location.href = "#/HR/LoanConfigurationDash"
            location.reload();
          }, error: (err) => {
            // Swal.fire('Issue in Updating Loan Configuration');
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
  }

  public InsertLoanConfiguration() {
    debugger;
    this.showPopup = 0;
    if (this.OtherRolesApply == undefined) {
      /*   Swal.fire('Please fill all the fields') */
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        LoanCategory: this.LoanCategory,
        OtherRolesApply: this.OtherRolesApply,
        EmployeeApply: this.EmployeeApply,
        ManagerApply: this.ManagerApply
      }
      this.DigipayrollServiceService.InsertLoanConfiguration(entity)
        .subscribe({
          next: data => {
            /*    Swal.fire("Saved Successfully"); */
            location.href = "#/HR/LoanConfigurationDash"
            location.reload();
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Loan Configuration');
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
  }

  cancel(){
    location.href = "#/HR/LoanConfigurationDash";
    // this.loader = false;
    this.dialogRef.close(false);
  }

}