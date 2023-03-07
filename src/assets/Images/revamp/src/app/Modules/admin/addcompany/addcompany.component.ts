import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})

export class AddcompanyComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  currentUrl: any;
  CompanyName: any;
  ContactPerson: any;
  MobileNumber: any;
  EmailID: any;
  BuildingID: any;
  Address: any;
  No_Of_Employees: any;
  RegDate: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetCompanyDetails();
  }

  public GetCompanyDetails() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.loader = false;
      this.ID = params['id'];
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetCompanyDetails()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.CompanyName = this.leavelist[0].companyName;
              this.Address = this.leavelist[0].address;
              this.MobileNumber = this.leavelist[0].mobileNumber;
              this.EmailID = this.leavelist[0].emailID;
              this.ContactPerson = this.leavelist[0].contactPerson;
              this.RegDate = this.datepipe.transform(this.leavelist[0].regdate, 'yyyy-MM-dd');
              this.No_Of_Employees = this.leavelist[0].no_Of_Employees;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Company Details');
              // this.loader = false;
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

  public InsertCompanyDetails() {
    debugger;
    this.showPopup = 0;
    if (this.CompanyName == undefined || this.CompanyName == null || this.CompanyName == '' ||
      this.Address == undefined || this.Address == null || this.Address == '' || this.MobileNumber == undefined ||
      this.MobileNumber == null || this.MobileNumber == '' || this.EmailID == undefined || this.EmailID == null ||
      this.EmailID == '' || this.ContactPerson == undefined || this.ContactPerson == null || this.ContactPerson == '' ||
      this.RegDate == undefined || this.RegDate == null || this.RegDate == '' || this.No_Of_Employees == undefined
      || this.No_Of_Employees == null || this.No_Of_Employees == '') {
      /*  Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7
    } else {
      var entity = {
        CompanyName: this.CompanyName,
        ContactPerson: this.ContactPerson,
        MobileNumber: this.MobileNumber,
        EmailID: this.EmailID,
        BuildingID: 56,
        Address: this.Address,
        No_Of_Employees: this.No_Of_Employees,
        RegDate: this.RegDate
      }
      this.DigiofficeService.InsertCompanyDetails(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              Swal.fire("Saved Successfully");
              location.href = "#/Admin/Companydashboard";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Company Details');
            // this.loader = false;
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

  public UpdateCompanyDetails() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      ID: this.ID,
      CompanyName: this.CompanyName,
      ContactPerson: this.ContactPerson,
      MobileNumber: this.MobileNumber,
      EmailID: this.EmailID,
      BuildingID: '56',
      Address: this.Address,
      No_Of_Employees: this.No_Of_Employees,
      RegDate: this.RegDate
    }
    this.DigiofficeService.UpdateCompanyDetails(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /* Swal.fire("Updated Successfully"); */
            location.href = "#/Admin/Companydashboard";
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 10
          }
        }, error: (err) => {
          // Swal.fire('Issue in Updating Company Details');
          // this.loader = false;
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
    location.href = "#/Admin/Companydashboard";
    this.loader = false;
  }

}