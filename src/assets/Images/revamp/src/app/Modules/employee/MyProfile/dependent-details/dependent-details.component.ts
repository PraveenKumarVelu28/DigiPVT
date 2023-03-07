import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dependent-details',
  templateUrl: './dependent-details.component.html',
  styleUrls: ['./dependent-details.component.css']
})
export class DependentDetailsComponent implements OnInit {


  constructor(public DigiofficeService: DigiofficecorehrService, private ngWizardService: NgWizardService, public router: Router, private activatedroute: ActivatedRoute, public datepipe: DatePipe) { }
  loader: any;
  companyid: any;
  roledid: any;
  staffID: any;
  currentUrl: any;
  myDate: any;
  DependentName:any;
  Relationship1:any;
  Gender1:any;
  DateOfBirth:any;
  Address:any;
  Mobile:any;
  Id_Number:any;
  Race:any;
  CitizenShip:any;
  cb:any;
  Countrylist:any;
  Religion1:any;
  Working_Status:any;
  StaffID:any
  showPopup: number = 0;
  messageId: number = 0;
  DOB:any;
  Is_Dependent:any;
  Is_Child_Adopted:any;
  Religion:any;
  Request_Type:any;
  Relationship:any;
  leavelist:any;
  ID:any;
  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.GetCountryType();
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
        this.DigiofficeService.GetDependentDetails()
        .subscribe({
          next: data => {
            debugger
            this.leavelist = data.filter(x => x.staffId == this.ID);
            this.cb = this.leavelist[0].cb,
              this.Religion = this.leavelist[0].religion,
              this.DependentName = this.leavelist[0].dependentName,
              this.Relationship1 = this.leavelist[0].relationship,
              this.Gender1 = this.leavelist[0].gender,
              this.DateOfBirth = this.datepipe.transform(this.leavelist[0].dateOfBirth, 'yyyy-MM-dd'),
              this.Address = this.leavelist[0].address,
              this.Mobile = this.leavelist[0].mobile,
              this.Is_Dependent = this.leavelist[0].is_Dependent,
              this.Id_Number = this.leavelist[0].id_Number,
              this.Is_Child_Adopted = this.leavelist[0].is_Child_Adopted,
              this.Race = this.leavelist[0].race,
              this.CitizenShip = this.leavelist[0].citizenShip,
              this.Working_Status = this.leavelist[0].working_Status,
              this.Request_Type = this.leavelist[0].request_Type
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Dependent Details');
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
              )}
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



  public SaveDependantDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true
    var eb = {

      'DependentName': this.DependentName == undefined ? null : this.DependentName,
      'Relationship': this.Relationship == undefined ? null : this.Relationship,
      'Gender': this.Gender1 == undefined ? null : this.Gender1,
      'DateOfBirth': this.DateOfBirth == " " ? this.DOB : this.DateOfBirth,
      'Address': this.Address == undefined ? null : this.Address,
      'Mobile': this.Mobile == undefined ? null : this.Mobile,
      'Is_Dependent': this.Is_Dependent == undefined ? 0 : 1,
      'Id_Number': this.Id_Number == undefined ? null : this.Id_Number,
      'Is_Child_Adopted': this.Is_Child_Adopted == undefined ? 0 : this.Is_Child_Adopted,
      'Race': this.Race == undefined ? null : this.Race,
      'CitizenShip': this.CitizenShip == undefined ? null : this.CitizenShip,
      'Country_Of_Birth': this.cb == undefined ? null : this.cb,
      'Religion': this.Religion == undefined ? null : this.Religion,
      'Working_Status': this.Working_Status == undefined ? null : this.Working_Status,
      'Request_Type': this.Request_Type == undefined ? null : this.Request_Type,
      'StaffID': this.StaffID



    }
    this.DigiofficeService.InsertDependentDetails(eb)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire('Saved Successfully') */
          this.loader = false
          this.showPopup = 1;
          this.messageId = 8;
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Dependent Details');
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
  
  public UpdateDependentDetails() {
    debugger
    this.loader = true;
    this.showPopup = 0;
    var eb = {
      'ID': this.StaffID,
      'DependentName': this.DependentName == undefined ? null : this.DependentName,
      'Relationship': this.Relationship1 == undefined ? null : this.Relationship1,
      'Gender': this.Gender1 == undefined ? null : this.Gender1,
      'DateOfBirth': this.DateOfBirth == " " ? this.DOB : this.DateOfBirth,
      'Address': this.Address == undefined ? null : this.Address,
      'Mobile': this.Mobile == undefined ? null : this.Mobile,
      'Is_Dependent': this.Is_Dependent == undefined ? 0 : 1,
      'Id_Number': this.Id_Number == undefined ? null : this.Id_Number,
      'Is_Child_Adopted': this.Is_Child_Adopted == undefined ? 0 : 1,
      'Race': this.Race == undefined ? null : this.Race,
      'CitizenShip': this.CitizenShip == undefined ? null : this.CitizenShip,
      'Country_Of_Birth': this.cb == undefined ? null : this.cb,
      'Religion': this.Religion == undefined ? null : this.Religion,
      'Working_Status': this.Working_Status == undefined ? null : this.Working_Status,
      'Request_Type': this.Request_Type == undefined ? null : this.Request_Type,

    }
    this.DigiofficeService.UpdateDependentDetails(eb)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("Updated Successfully!!!") */
          // location.reload();
          this.loader = false
          this.showPopup = 1;
          this.messageId = 10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Dependent Details');
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
