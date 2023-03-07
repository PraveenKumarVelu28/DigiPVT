import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-iddetails',
  templateUrl: './iddetails.component.html',
  styleUrls: ['./iddetails.component.css']
})
export class IDDetailsComponent implements OnInit {


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
  IDType:any;
  Number:any;
  NameOnDocument:any;
  IssueDate:any;
  ExpiryDate:any;
  IssuingAuthority:any;
  PlaceOfIssue:any;
  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.IDType="Select"

    this.ActivatedRouteCallPrefil();
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

        this.DigiofficeService.GetID_Details()
        .subscribe({
          next: data => {
            debugger
            let temp: any = data.filter(x => x.staffId == this.ID);
            this.IDType = temp[0].idType,
              this.Number = temp[0].number,
              this.NameOnDocument = temp[0].nameOnDocument,
              this.IssueDate = this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd'),
              this.ExpiryDate = this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd'),
              this.IssuingAuthority = temp[0].issuingAuthority,
              this.PlaceOfIssue = temp[0].placeOfIssue
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting ID Details');
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
  public SaveIdDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.IssueDate == undefined || this.IssueDate == 0 || this.ExpiryDate == undefined || this.ExpiryDate == "") {
      /*   Swal.fire('Please Fill All Fields'); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
      this.loader = false;
     
    } else {
      var eb = {
        'IDType': this.IDType,
        'Number': this.Number,
        'NameOnDocument': this.NameOnDocument,
        'IssueDate': this.IssueDate,
        'ExpiryDate': this.ExpiryDate,
        'IssuingAuthority': this.IssuingAuthority,
        'PlaceOfIssue': this.PlaceOfIssue,
        'StaffID': this.StaffID

      }
      this.DigiofficeService.InsertID_Details(eb)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire('Saved Successfully') */
            this.loader = false;
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting ID Details');
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

  
  public UpdateID_Details() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.IssueDate == undefined || this.IssueDate == 0 || this.ExpiryDate == undefined || this.ExpiryDate == "") {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
      this.loader = false;
    } else {
      var eb = {
        'ID': this.StaffID,

        'IDType': this.IDType,
        'Number': this.Number,
        'NameOnDocument': this.NameOnDocument,
        'IssueDate': this.IssueDate,
        'ExpiryDate': this.ExpiryDate,
        'IssuingAuthority': this.IssuingAuthority,
        'PlaceOfIssue': this.PlaceOfIssue,

      }
      this.DigiofficeService.UpdateID_Details(eb)
        .subscribe({
          next: data => {
            debugger
            /*     Swal.fire("Updated Successfully!!!"); */
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
            // location.reload();
          }, error: (err) => {
            // Swal.fire('Issue in Updating ID Details');
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
      this.loader = false;
    }
  }
}
