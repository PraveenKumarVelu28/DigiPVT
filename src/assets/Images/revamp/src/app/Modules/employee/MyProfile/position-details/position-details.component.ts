import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {
  currentUrl: any;
  staffID: any;
  companyid: any;
  loader: any;
  roledid: any;
  EmployeeCode: any;
  OfficialEmail: any;
  JobRole: any;
  EmployeeStatus: any;
  NoticePeriod: any;
  ProbationPeriod: any;
  ProbationStartDate: any;
  ProbationEndDate: any;
  myDate: any;
  ConfirmationDueDate: any;
  ExtensionEndDate: any;
  StartDate: any;
  EndDate: any;
  ResignationDate: any;
  BillingAddress: any;
  EmailAddress: any;
  CostCenter: any;

  GLCode: any;


  constructor(public DigiofficeService: DigiofficecorehrService, private ngWizardService: NgWizardService, public router: Router, private activatedroute: ActivatedRoute, public datepipe: DatePipe) { }

  showPopup: number = 0;
  messageId: number = 0;
  Manager: any;
  Band: any;
  EmployeeType: any;
  ConfirmationStatus: any;
  EmployeeName: any;
  StaffID: any;
  leavelist: any;
  ID: any;
  Grade: any;
  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.ActivatedRouteCallPrefil();
  }

  public ActivatedRouteCallPrefil() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.StaffID = params['id'];
      if (this.ID == undefined) {
        this.Manager = " ",
          this.EmployeeType = " ",
          this.ConfirmationDueDate = " ",
          this.ConfirmationStatus = " ",
          this.EmployeeName = " ",
          this.StartDate = " ",
          this.EndDate = " "
      }
      else {

        this.DigiofficeService.GetPositionDetails()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.staffId == this.ID);
              this.EmployeeCode = this.leavelist[0].employeeCode,
                this.OfficialEmail = this.leavelist[0].officialEmail,
                this.Band = this.leavelist[0].band,
                this.Grade = this.leavelist[0].grade,
                this.JobRole = this.leavelist[0].jobRole,
                this.Manager = this.leavelist[0].manager,
                this.EmployeeType = this.leavelist[0].employeeType,
                this.EmployeeStatus = this.leavelist[0].employeeStatus,
                this.NoticePeriod = this.leavelist[0].noticePeriod,
                this.ProbationPeriod = this.leavelist[0].probationPeriod,
                this.ConfirmationDueDate = this.datepipe.transform(this.leavelist[0].confirmationDueDate, 'yyyy-MM-dd'),
                this.ConfirmationStatus = this.leavelist[0].confirmationStatus,
                this.EmployeeName = this.leavelist[0].employeeName,
                this.ProbationEndDate = this.datepipe.transform(this.leavelist[0].probationEndDate, 'yyyy-MM-dd'),
                this.ProbationStartDate = this.datepipe.transform(this.leavelist[0].probationStartDate, 'yyyy-MM-dd'),
                this.ExtensionEndDate = this.datepipe.transform(this.leavelist[0].extensionEndDate, 'yyyy-MM-dd')
              this.StartDate = this.datepipe.transform(this.leavelist[0].startDate, 'yyyy-MM-dd'),
                this.EndDate = this.datepipe.transform(this.leavelist[0].endDate, 'yyyy-MM-dd'),
                this.ResignationDate = this.datepipe.transform(this.leavelist[0].resignationDate, 'yyyy-MM-dd'),
                this.EmailAddress = this.leavelist[0].emailAddress,
                this.GLCode = this.leavelist[0].glCode,
                this.BillingAddress = this.leavelist[0].billingAddress,
                this.CostCenter = this.leavelist[0].costCenter,
                this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Position Details');
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



  public SavePositionDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true
    if (this.EmployeeCode == 0 || this.OfficialEmail == undefined || this.Band == " " || this.JobRole == undefined || this.EmployeeStatus == " " || this.NoticePeriod == " " || this.ProbationPeriod == " " || this.ConfirmationDueDate == " "
      || this.CostCenter == undefined || this.CostCenter == null) {
      /* Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'EmployeeCode': this.EmployeeCode,
        'OfficialEmail': this.OfficialEmail,
        'Band': 1,
        'Grade': 1,
        'JobRole': this.JobRole,
        'Manager': this.Manager,
        'EmployeeType': this.EmployeeType == undefined ? null : this.EmployeeType,
        'EmployeeStatus': this.EmployeeStatus,
        'NoticePeriod': this.NoticePeriod,
        'ProbationPeriod': this.ProbationPeriod,
        'ConfirmationDueDate': this.ConfirmationDueDate == undefined ? " " : this.ConfirmationDueDate,
        'ConfirmationStatus': this.ConfirmationStatus,
        'EmployeeName': this.EmployeeName,
        'StaffID': this.StaffID,
        'ExtensionEndDate': this.ExtensionEndDate,
        'ProbationEndDate': this.ProbationEndDate,
        'ProbationStartDate': this.ProbationStartDate,
        'StartDate': this.StartDate,
        'EndDate': this.EndDate,
        'ResignationDate': this.ResignationDate,
        'EmailAddress': this.EmailAddress,
        'GLCode': this.GLCode,
        'BillingAddress': this.BillingAddress,
        'CostCenter': this.CostCenter
      }
      this.loader = false
      this.DigiofficeService.InsertPositionDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Saved Successfully') */
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Position Details');
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


  public UpdatePositionDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true
    if (this.EmployeeCode == 0 || this.OfficialEmail == undefined || this.Band == " " || this.Band == undefined || this.JobRole == undefined || this.EmployeeStatus == " " || this.EmployeeStatus == undefined || this.NoticePeriod == " " || this.NoticePeriod == undefined || this.ProbationPeriod == 0 || this.ProbationPeriod == undefined || this.ConfirmationDueDate == " " || this.ConfirmationDueDate == undefined
      || this.CostCenter == undefined || this.CostCenter == null) {
      /* Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'ID': this.StaffID,
        'EmployeeCode': this.EmployeeCode,
        'OfficialEmail': this.OfficialEmail,
        'Band': 1,
        'Grade': 1,
        'JobRole': this.JobRole,
        'Manager': this.Manager,
        'EmployeeType': this.EmployeeType,
        'EmployeeStatus': this.EmployeeStatus,
        'NoticePeriod': this.NoticePeriod,
        'ProbationPeriod': this.ProbationPeriod,
        'ConfirmationDueDate': this.ConfirmationDueDate,
        'ConfirmationStatus': this.ConfirmationStatus,
        'EmployeeName': this.EmployeeName,
        'ExtensionEndDate': this.ExtensionEndDate,
        'ProbationEndDate': this.ProbationEndDate,
        'ProbationStartDate': this.ProbationStartDate,
        'StartDate': this.StartDate,
        'EndDate': this.EndDate,
        'EmailAddress': this.EmailAddress,
        'BillingAddress': this.BillingAddress,
        'CostCenter': this.CostCenter,
        'GLCode': this.GLCode,
        'ResignationDate': this.ResignationDate,
      }


      this.DigiofficeService.UpdatePositionDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*   Swal.fire('Updated Successfully') */
            // this.router.navigate(['/EmployeeForm']);
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Position Details');
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
