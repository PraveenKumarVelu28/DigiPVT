import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private ngWizardService: NgWizardService, public router: Router, private activatedroute: ActivatedRoute, public datepipe: DatePipe) { }

  showPopup: number = 0;
  messageId: number = 0;
  loader: any;
  companyid: any;
  roledid: any;
  staffID: any;
  currentUrl: any;
  myDate: any;
  leavelist: any;
  ID: any;
  StaffID: any;
  NameOfBank:any;
  Bankslist:any;
  AccountHolderName:any;
  BankAccountNumber:any;
  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.ActivatedRouteCallPrefil();
    this.GetBanks();
  }

  public ActivatedRouteCallPrefil() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.StaffID = params['id'];
      if (this.ID == undefined) {
       
      }
      else {

        this.DigiofficeService.GetBankDetails()
        .subscribe({
          next: data => {
            debugger
            this.leavelist = data.filter(x => x.staffId == this.ID);
            this.NameOfBank = this.leavelist[0].nameOfBank,
              this.AccountHolderName = this.leavelist[0].accountHolderName,
              this.BankAccountNumber = this.leavelist[0].bankAccountNumber
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Bank Details');
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
  public GetBanks() {
    this.DigiofficeService.GetBanks()
      .subscribe({
        next: data => {
          debugger
          this.Bankslist = data
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Banks');
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

  
  public SaveBankDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true
    if (this.NameOfBank == undefined || this.AccountHolderName == undefined || this.BankAccountNumber == undefined) {
      /*   Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {

        'NameOfBank': this.NameOfBank,
        'AccountHolderName': this.AccountHolderName,
        'BankAccountNumber': this.BankAccountNumber,
        'StaffID': this.StaffID

      }
      this.DigiofficeService.InsertBankDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Saved Successfully') */
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
            this.loader = false
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Bank Details');
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

  public UpdateBankDetails() {
    debugger
    this.loader = true;
    this.showPopup = 0;
    if (this.NameOfBank == undefined || this.AccountHolderName == undefined || this.BankAccountNumber == undefined ||
      this.NameOfBank == "" || this.AccountHolderName == "" || this.BankAccountNumber == "" ||
      this.NameOfBank == null || this.AccountHolderName == null || this.BankAccountNumber == null ||
      this.NameOfBank == "Select One") {
      /*  Swal.fire('Please Fill All The Mandatory Fields'); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'ID': this.StaffID,
        'NameOfBank': this.NameOfBank,
        'AccountHolderName': this.AccountHolderName,
        'BankAccountNumber': this.BankAccountNumber
      }
      this.DigiofficeService.UpdateBankDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire("Updated Successfully!!!") */
            // location.reload();
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Bank Details');
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
