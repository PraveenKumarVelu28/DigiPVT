import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})

export class ApplyloanComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public dialogRef: MatDialogRef<ApplyloanComponent>,public router: Router) { }
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  Departmentlist: any;
  Managerlist: any;
  Comments: any;
  LoanType: any;
  LoanAmount: any;
  roleid: any;
  loanslist: any;
  loanslist1: any;
  loader: any
  currentUrl: any;
  Notes: any;
  Trasnferdate: any;
  newsupervisor: any;
  ToDepartment: any;
  oldsupervisor: any;
  FromDepartment: any;
  Tenure: any;
  public attachmentsurl: any = [];
  public attachments21: any = [];
  public attachments: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.loader = true;
    this.UserName = localStorage.getItem('UserName');
    this.GetLoanConfiguration();
    this.GetMyDetailsByStaffID();
    this.LoanType = "Select";
    this.roleid = localStorage.getItem('roledid')
  }

  public GetLoanConfiguration() {
    this.DigiofficeService.GetLoanConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.loanslist = data.filter(x => x.enable_Disable == 0);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Loan Configuration');
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
    this.loader = true;
    if (this.LoanType == 'Ayala Coop Contribution') {
      if (this.LoanType == " " || this.LoanAmount == " " || this.LoanType == undefined || this.LoanAmount == undefined) {
        /*   Swal.fire('Please Fill All The Mandatory Fields') */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 7;
      }
      else {
        var eb = {
          'StaffID': localStorage.getItem('staffid'),
          'LoanType': this.LoanType,
          'LoanAmount': this.LoanAmount,
          'Comments': this.Comments,
          'Status': 'HR Pending',
          'period': this.Tenure,
          'Attachment': this.attachmentsurl[0],
        }
        this.DigiofficeService.InsertEmployeeLoans(eb)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Saved Successfully.'); */
              this.LoanID = data;
              this.uploadmultipleimages();
              this.sendemail();
              location.href = "#/Employee/Employeeloandash";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }, error: (err) => {
              this.loader = false;
              // Swal.fire('Issue in Inserting Employee Loans');
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
    else {
      if (this.LoanType == " " || this.LoanAmount == " " || this.LoanType == undefined || this.LoanAmount == undefined
        || this.Tenure == " " || this.Tenure == undefined) {
        /*  Swal.fire('Please Fill All The Mandatory Fields') */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 7;
      }
      else {
        var eb = {
          'StaffID': localStorage.getItem('staffid'),
          'LoanType': this.LoanType,
          'LoanAmount': this.LoanAmount,
          'Comments': this.Comments,
          'Status': 'HR Pending',
          'period': this.Tenure,
          'Attachment': this.attachmentsurl[0],
        }
        this.DigiofficeService.InsertEmployeeLoans(eb)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Saved Successfully.'); */
              this.LoanID = data;
              this.uploadmultipleimages();
              this.sendemail();
              location.href = "#/Employee/Employeeloandash";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }, error: (err) => {
              this.loader = false;
              // Swal.fire('Issue in Inserting Employee Loans');
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
  LoanID: any
  public uploadmultipleimages() {
    debugger
    for (let i = 0; i < this.attachmentsurl.length; i++) {
      var entity = {
        "Attachment": this.attachmentsurl[i],
        "LoanID": this.LoanID,
      }
      this.DigiofficeService.InsertEmployeeLoansAttachment(entity).subscribe(
        data => {

          this.loader = false;
        }
      )
    }
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    this.showPopup = 0;
    debugger
    console.log(event);
    this.loader = true;
    if (event.addedFiles[0].size / 1048576 > 2) {
      /*  Swal.fire('Please Upload File Less than 2 MB.'); */
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

  public loantype() {
    debugger;
    this.DigiofficeService.GetLoanConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.loanslist1 = data.filter((x: { type: String, enable_Disable: boolean }) => x.type == this.LoanType && x.enable_Disable == false)
          if (this.LoanType == "Ayala Coop" && this.roleid == 6) {
            this.LoanAmount = this.loanslist1[0].employeeApply;
            this.loader = false;
          }
          else if (this.LoanType == "Ayala Coop" && this.roleid == 2) {
            this.LoanAmount = this.loanslist1[0].managerApply;
            this.loader = false;
          }
          else if (this.LoanType == "Ayala Coop" && (this.roleid != 6 || this.roleid != 2)) {
            this.LoanAmount = this.loanslist1[0].otherRolesApply;
            this.loader = false;
          }
          else if (this.LoanType != "Ayala Coop") {
            this.LoanAmount = ""
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Loan Configuration');
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
  ManagerEmailList: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.ManagerEmailList = data;
          this.manageremailid = this.ManagerEmailList[0].manageremailid;
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


  manageremailid: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': 'dccasanova@asticom.com.ph',
      'emailsubject': 'Loan Request',
      'Message': 'Your Loan Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied loan in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
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
  public Cancel() {
    debugger
    this.ngOnInit();
    this.dialogRef.close(false);

  }

}