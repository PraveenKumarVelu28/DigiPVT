import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-staff-bulk-upload-exceptions-form',
  templateUrl: './staff-bulk-upload-exceptions-form.component.html',
  styleUrls: ['./staff-bulk-upload-exceptions-form.component.css']
})
export class StaffBulkUploadExceptionsFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  attachment: any;
  Citylist: any;
  CityID: any;
  attachment1: any;
  currentUrl: any;
  Type: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  HolidayCategory: any;
  Region: any;
  loader: any;
  PageName: any;
  ErrorMessage: any;
  Name: any;
  EmployeeID: any;
  EmployeeCount: any;
  UserID: any;
  LoginType: any;
  API: any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetStaffBulkUploadExceptions();
  }

  public GetStaffBulkUploadExceptions() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
        this.Holiday = '',
          this.HolidayDescription = ''
        this.loader = false;
      }
      else {
        this.DigiofficeService.GetStaffBulkUploadExceptions()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.PageName = this.leavelist[0].pageName
              this.ErrorMessage = this.leavelist[0].errorMessage
              this.Name = this.leavelist[0].name;
              this.EmployeeID = this.leavelist[0].employeeID;
              this.EmployeeCount = this.leavelist[0].employeeCount;
              this.UserID = this.leavelist[0].userID;
              this.LoginType = this.leavelist[0].loginType;
              this.API = this.leavelist[0].apI;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Holiday');
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
    )
  }

  public Save() {
    debugger;
    this.loader = true;
    var entity = {
      PageName: this.PageName,
      ErrorMessage: this.ErrorMessage,
      Name: this.Name,
      EmployeeID: this.EmployeeID,
      EmployeeCount: this.EmployeeCount,
      UserID: this.UserID,
      LoginType: this.LoginType,
      API: this.API
    }
    this.DigiofficeService.InsertStaffBulkUploadExceptions(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            Swal.fire("Saved Successfully");
            location.href = "#/HR/StaffBulkUploadExceptions";
            this.loader = false;
          }
        }, error: (err) => {
          Swal.fire('Issue in Inserting Exception');
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