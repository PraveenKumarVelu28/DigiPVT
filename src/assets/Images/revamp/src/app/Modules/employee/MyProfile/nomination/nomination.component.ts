import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.css']
})
export class NominationComponent implements OnInit {

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
  Dependent:any;
  Percentage:any;
  NomineeType:any;
  GuardianName:any;
  GuardianRelationship:any;
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
     
      }
      else {

        this.DigiofficeService.GetNomination()
        .subscribe({
          next: data => {
            debugger
            this.leavelist = data.filter(x => x.staffId == this.ID);
            this.Dependent = this.leavelist[0].dependent,
              this.Percentage = this.leavelist[0].percentage,
              this.NomineeType = this.leavelist[0].nomineeType,
              this.GuardianName = this.leavelist[0].guardianName,
              this.GuardianRelationship = this.leavelist[0].guardianRelationship
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Nomination');
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
  
  public SaveNomination() {
    debugger
    this.showPopup = 0;
    if (this.Dependent == undefined || this.Dependent == null || this.Dependent == '' ||
      this.Percentage == undefined || this.Percentage == null || this.Percentage == '' || this.NomineeType == undefined ||
      this.NomineeType == null || this.NomineeType == '') {
      /*     Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var eb = {
        'Dependent': this.Dependent,
        'Percentage': this.Percentage,
        'NomineeType': this.NomineeType,
        'GuardianName': this.GuardianName,
        'GuardianRelationship': this.GuardianRelationship,
        'StaffID': this.StaffID
      }
      this.DigiofficeService.InsertNomination(eb)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire('Saved Successfully') */
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Nomination');
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

  public UpdateNomination() {
    debugger
    this.showPopup = 0;
    if (this.Dependent == undefined || this.Percentage == undefined || this.NomineeType == undefined) {
      /*  Swal.fire('Please Fill All Mandatory Fields') */
    }
    else {
      var eb = {
        ID: this.StaffID,
        Dependent: this.Dependent,
        Percentage: this.Percentage,
        NomineeType: this.NomineeType,
        GuardianName: this.GuardianName,
        GuardianRelationship: this.GuardianRelationship,
      }
      this.DigiofficeService.UpdateNomination(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire("Updated Successfully!!!") */
            // location.reload();
            // this.loader = false
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Nomination');
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
    // this.loader = true

  }
}
