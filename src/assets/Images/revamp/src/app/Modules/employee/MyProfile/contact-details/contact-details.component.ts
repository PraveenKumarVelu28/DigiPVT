import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

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
  AddressType: any;
  Relationship: any;
  FindPlace: any;
  AddressLine1: any;
  AddressLine2: any;
  AddressLine3: any;
  AddressLine4: any;
  SubDistrictPostcode: any;
  Mobile: any;
  LandLineFax: any;
  IsCorrespondance: any;
  RequestType: any;
  EmergencyContactName: any;
  EmergencyContactRelationship: any;
  EmergencyContactMobileNumber: any;
  EmergencyContactOfficeNumber: any;
  EmergencyContactLandLineNumber: any;
  EmergencyContact_EmailID: any;
  EmergencyContact_Address: any;
  CountryID: any;
  StateID: any;
  CityID: any;
  Barangay: any;
  BillingAddress: any;
  EmailAddress: any;
  GLCode: any;
  Region: any;
  CostCenter: any;
  Provincelist:any;
  Citylist:any;
  barangaylist:any;
  Countrylist:any;
  Barangaylist:any;
  provincedropdownSettings: any = {};
  citydropdownSettings: any = {};
  barangaydropdownSettings: any = {};
  Mobile1:any;

  ngOnInit(): void {
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.roledid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.provincedropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.citydropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };


    this.barangaydropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

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

        this.DigiofficeService.GetMyAddressDetails()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.leavelist = data.filter(x => x.staffId == this.ID);
              this.AddressType = this.leavelist[0].addressType,
                this.Relationship = this.leavelist[0].relationship,
                this.FindPlace = this.leavelist[0].findPlace,
                this.AddressLine1 = this.leavelist[0].addressLine1,
                this.AddressLine2 = this.leavelist[0].addressLine2,
                this.AddressLine3 = this.leavelist[0].addressLine3,
                this.AddressLine4 = this.leavelist[0].addressLine4,
                this.SubDistrictPostcode = this.leavelist[0].subDistrictPostcode,
                this.Mobile = this.leavelist[0].mobile,
                this.LandLineFax = this.leavelist[0].landLineFax,
                this.IsCorrespondance = this.leavelist[0].isCorrespondance,
                this.RequestType = this.leavelist[0].requestType,
                this.EmergencyContactName = this.leavelist[0].emergencyContactName,
                this.EmergencyContactRelationship = this.leavelist[0].emergencyContactRelationship,
                this.EmergencyContactMobileNumber = this.leavelist[0].emergencyContactMobileNumber,
                this.EmergencyContactOfficeNumber = this.leavelist[0].emergencyContactOfficeNumber,
                this.EmergencyContactLandLineNumber = this.leavelist[0].emergencyContactLandLineNumber,
                this.EmergencyContact_EmailID = this.leavelist[0].emergencyContact_EmailID,
                this.EmergencyContact_Address = this.leavelist[0].emergencyContact_Address,
                this.CountryID = this.leavelist[0].country,
                this.StateID = this.leavelist[0].province,
                this.CityID = this.leavelist[0].district,
                this.Barangay = this.leavelist[0].barangay,
                this.BillingAddress = this.leavelist[0].billingAddress,
                this.EmailAddress = this.leavelist[0].emailAddress,
                this.GLCode = this.leavelist[0].glCode,
                this.Region = this.leavelist[0].region,
                this.CostCenter = this.leavelist[0].costCenter,
                this.getstate();
              this.getcity();
            }, error: (err) => {
              // Swal.fire('Issue in Getting My Address Details');
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
  
  
    public GetProvinceID(event: any) {
      debugger
      this.loader = true;
      this.StateID = event.id;
      this.DigiofficeService.GetCityType()
        .subscribe({
          next: data => {
            debugger
            this.Citylist = data.filter(x => x.stateID == this.StateID);
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting City Type');
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

    public GetBarangay(event: any) {
      this.StateID = event.target.value;
      this.DigiofficeService.GetBarangayMaster()
        .subscribe({
          next: data => {
            debugger
            this.Barangaylist = data.filter(x => x.cityID == this.CityID)
          }, error: (err) => {
            // Swal.fire('Issue in Getting Barangay Master');
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
  

  getstate() {
    this.DigiofficeService.GetStateType()
      .subscribe({
        next: data => {
          debugger
          this.Provincelist = data.filter(x => x.countryID == this.CountryID);
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

  public getcity() {
    this.loader = true;
    this.DigiofficeService.GetCityType()
      .subscribe({
        next: data => {
          debugger
          this.Citylist = data.filter(x => x.stateID == this.StateID);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting City Type');
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


  public getbarangay(event: any) {
    debugger;
    this.loader = true;
    this.CityID = event.id
    this.DigiofficeService.GetBarangayMaster()
      .subscribe({
        next: data => {
          debugger
          this.barangaylist = data.filter(x => x.cityID == this.CityID);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Barangay Master');
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

  public onSelectBarangay(event: any) {
    debugger
    this.Barangay = event.id;
  }



  public SaveAddressDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true
    if (this.AddressType == " " || this.AddressType == undefined || this.AddressLine1 == " " || this.AddressLine1 == undefined ||
      this.CityID == " " || this.CityID == undefined || this.StateID == " " || this.StateID == undefined || this.CountryID == " " || this.CountryID == undefined ||
      this.Barangay == " " || this.Barangay == undefined || this.SubDistrictPostcode == " " || this.SubDistrictPostcode == undefined ||
      this.EmergencyContactName == "" || this.EmergencyContactName == undefined || this.EmergencyContactRelationship == "" || this.EmergencyContactRelationship == undefined
      || this.EmergencyContactMobileNumber == 0 || this.EmergencyContactMobileNumber == undefined) {
      /*    Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'AddressType': this.AddressType,

        'FindPlace': this.FindPlace == undefined ? null : this.FindPlace,
        'AddressLine1': this.AddressLine1,
        'AddressLine2': this.AddressLine2,
        'AddressLine3': this.AddressLine3,
        'AddressLine4': this.AddressLine4,
        'District': this.CityID,
        'Province': this.StateID,
        'Country': this.CountryID,
        'barangay': this.Barangay,
        'subDistrictPostcode': this.SubDistrictPostcode,
        'Mobile': this.Mobile1,
        'LandLineFax': this.LandLineFax,
        'IsCorrespondance': 0,
        'RequestType': this.RequestType,
        'EmergencyContactName': this.EmergencyContactName,
        'EmergencyContactRelationship': this.EmergencyContactRelationship,
        'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
        'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
        'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
        'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
        'EmergencyContact_Address': this.EmergencyContact_Address,
        'StaffID': this.StaffID,
        'BillingAddress': this.BillingAddress,
        'EmailAddress': this.EmailAddress,
        'GLCode': this.GLCode,
        'Region': this.Region,
        'CostCenter': this.CostCenter
      }
      this.DigiofficeService.InsertMyAddressDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Saved successfully.'); */
            // this.router.navigate(['/EmployeeDashboard']);
            this.loader = false
            this.showPopup = 1;
            this.messageId = 8;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting My Address Details');
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


  
  public UpdateMyAddressDetails() {
    debugger
    this.loader = true;
    this.showPopup = 0;
    if (this.AddressType == " " || this.AddressType == undefined || this.AddressLine1 == " " || this.AddressLine1 == undefined ||
      this.CityID == " " || this.CityID == undefined || this.StateID == " " || this.StateID == undefined || this.CountryID == " " || this.CountryID == undefined ||
      this.Barangay == " " || this.Barangay == undefined || this.SubDistrictPostcode == " " || this.SubDistrictPostcode == undefined ||
      this.EmergencyContactName == "" || this.EmergencyContactName == undefined || this.EmergencyContactRelationship == "" || this.EmergencyContactRelationship == undefined
      || this.EmergencyContactMobileNumber == 0 || this.EmergencyContactMobileNumber == undefined) {
      /*   Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var eb = {
        'ID': this.StaffID,
        'AddressType': this.AddressType,

        'FindPlace': this.FindPlace,
        'AddressLine1': this.AddressLine1,
        'AddressLine2': this.AddressLine2,
        'AddressLine3': this.AddressLine3,
        'AddressLine4': this.AddressLine4,
        // 'District': this.District,
        // 'Province': this.Province,
        // 'Country': this.Country1,
        'District': this.CityID,
        'Province': this.StateID,
        'Country': this.CountryID,
        'barangay': this.Barangay,
        'SubDistrictPostcode': this.SubDistrictPostcode,
        'Mobile': '9975766322',
        'LandLineFax': this.LandLineFax,
        'IsCorrespondance': this.IsCorrespondance,
        'RequestType': this.RequestType,
        'EmergencyContactName': this.EmergencyContactName,
        'EmergencyContactRelationship': this.EmergencyContactRelationship,
        'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
        'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
        'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
        'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
        'EmergencyContact_Address': this.EmergencyContact_Address,
        'BillingAddress': this.BillingAddress,
        'EmailAddress': this.EmailAddress,
        'GLCode': this.GLCode,
        'Region': this.Region,
        'CostCenter': this.CostCenter
      }
      this.DigiofficeService.UpdateMyAddressDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire("Updated Successfully!!!") */
            // location.reload();
            this.loader = false
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating My Address Details');
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
  


