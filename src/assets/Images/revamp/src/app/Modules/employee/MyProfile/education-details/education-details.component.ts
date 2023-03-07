import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

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
  EducationType:any;
  Qualification:any;
  NameOfQualification:any;
  Branch:any;
  InstitutionName:any;
  Country:any;
  Countrylist:any;
  CountryID:any;
  Provincelist:any;
  ScoreType:any;
  EducationGrade:any;
  StartDateMonth:any;
  EndDateMonth:any;
  DOB:any;
  StartDateYear:any;
  EndDateYear:any;
  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.ActivatedRouteCallPrefil();
    this.GetCountryType();
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

        this.DigiofficeService.GetEducationDetails()
        .subscribe({
          next: data => {
            debugger
            this.leavelist = data.filter(x => String(x.staffId) == this.ID);
            this.EducationType = this.leavelist[0].educationType,
              this.Qualification = this.leavelist[0].qualification,
              this.NameOfQualification = this.leavelist[0].nameOfQualification,
              this.Branch = this.leavelist[0].branch,
              this.InstitutionName = this.leavelist[0].institutionName,
              this.Country = this.leavelist[0].country,
              this.ScoreType = this.leavelist[0].scoreType,
              this.EducationGrade = this.leavelist[0].grade,
              this.StartDateMonth = this.datepipe.transform(this.leavelist[0].startDateMonth, 'yyyy-MM-dd'),
              this.StartDateYear = this.datepipe.transform(this.leavelist[0].startDateYear, 'yyyy-MM-dd'),
              this.EndDateMonth = this.datepipe.transform(this.leavelist[0].endDateMonth, 'yyyy-MM-dd'),
              this.EndDateYear = this.datepipe.transform(this.leavelist[0].endDateYear, 'yyyy-MM-dd')
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Education Details');
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
  public GetCountryType() {
    this.DigiofficeService.GetCountryType()
      .subscribe({
        next: data => {
          debugger
          this.Countrylist = data
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting CountryType ');
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

  

  public GetCountryID(event: any) {
    this.CountryID = event.target.value;
    this.DigiofficeService.GetStateType()
      .subscribe({
        next: data => {
          debugger
          this.Provincelist = data.filter(x => x.countryID == this.CountryID)
        }, error: (err) => {
          // Swal.fire('Issue in Getting State Type');
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

  
  public SaveEducation() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.StartDateMonth == undefined || this.StartDateMonth == 0 || this.EndDateMonth == undefined || this.EndDateMonth == "") {
      /*   Swal.fire('Please Fill All Fields'); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var eb = {

        'EducationType': this.EducationType == undefined ? null : this.EducationType,
        'Qualification': this.Qualification == undefined ? null : this.Qualification,
        'NameOfQualification': this.NameOfQualification == undefined ? null : this.NameOfQualification,
        'Branch': this.Branch == undefined ? null : this.Branch,
        'InstitutionName': this.InstitutionName == undefined ? null : this.InstitutionName,
        'Country': this.Country == undefined ? null : this.Country,
        'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
        'grade': this.EducationGrade == undefined ? null : this.EducationGrade,
        'StartDateMonth': this.StartDateMonth == " " ? this.DOB : this.StartDateMonth,
        'StartDateYear': this.StartDateMonth == " " ? this.DOB : this.StartDateMonth,
        'EndDateMonth': this.EndDateMonth == " " ? this.DOB : this.EndDateMonth,
        'EndDateYear': this.EndDateMonth == " " ? this.DOB : this.EndDateMonth,
        'StaffID': this.StaffID

      }
      this.DigiofficeService.InsertEducationDetails(eb)
        .subscribe({
          next: data => {
            debugger
            this.loader = false
            /* Swal.fire('Saved Successfully') */
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Education Details');
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

  public UpdateEducationDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.StartDateMonth == undefined || this.StartDateMonth == 0 || this.EndDateMonth == undefined || this.EndDateMonth == "") {
      /*  Swal.fire('Please Fill All Fields'); */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var eb = {
        'ID': this.StaffID,
        'EducationType': this.EducationType == undefined ? null : this.EducationType,
        'Qualification': this.Qualification == undefined ? null : this.Qualification,
        'NameOfQualification': this.NameOfQualification == undefined ? null : this.NameOfQualification,
        'Branch': this.Branch == undefined ? null : this.Branch,
        'InstitutionName': this.InstitutionName == undefined ? null : this.InstitutionName,
        'Country': this.Country == undefined ? null : this.Country,
        'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
        'Grade': this.EducationGrade == undefined ? null : this.EducationGrade,
        'StartDateMonth': this.StartDateMonth == " " ? this.DOB : this.StartDateMonth,
        'StartDateYear': this.StartDateMonth == " " ? this.DOB : this.StartDateMonth,
        'EndDateMonth': this.EndDateMonth == " " ? this.DOB : this.EndDateMonth,
        'EndDateYear': this.EndDateMonth == " " ? this.DOB : this.EndDateMonth,

      }
      this.DigiofficeService.UpdateEducationDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire("Updated Successfully!!!") */
            // location.reload();
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Education Details');
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
