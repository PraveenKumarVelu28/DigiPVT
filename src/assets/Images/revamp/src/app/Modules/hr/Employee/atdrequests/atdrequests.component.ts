import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-atdrequests',
  templateUrl: './atdrequests.component.html',
  styleUrls: ['./atdrequests.component.css']
})

export class ATDRequestsComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigiofficecorehrService, private ActivatedRoute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  RoleTypeList: any;
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  Department: any;
  Departmentlist: any;
  dropdownList1: any = [];
  RoleID: any
  uniquelist: any
  selectedItems1: any = [];
  dropdownSettings1: any = {};
  result: any;
  AutoApproval: any;
  ManualApply: any;
  Deduction: any;
  startdate: any;
  enddate: any;
  SigninDate: any;
  SignoutDate: any;
  UserID: any
  employeelist: any = [];
  currentUrl: any;
  public attachments21: any = [];
  public attachments: any = [];
  loader: any;
  starttime: any;
  endtime: any;
  Tenure: any;
  holidaylist: any;
  RetirementAge: any;
  RetirementEffectiveDate: any;
  Type: any;
  Amount: any;
  Comments: any;
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  LeaveTypeList: any;
  dropdownList2: any;
  public LeaveType: any;
  RoleType: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.RoleID = "";
    this.Department = "";
    this.Deduction = "0";
    this.GetLeaveType();
    this.Type = "";
    this.GetDepartment();
    this.ActivatedRouterCall();
    this.GetRoleType();
    this.GetOtConfiguration();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.dropdownList1 = [
      { id: 1, name: 'Monday' },
      { id: 2, name: 'Tuesday' },
      { id: 3, name: 'Wednesday' },
      { id: 4, name: 'Thursday' },
      { id: 5, name: 'Friday' },
      { id: 6, name: 'Saturday' },
      { id: 7, name: 'Sunday' }
    ];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }

  public GetDepartment() {
    this.DigipayrollServiceService.GetDepartment()
      .subscribe({
        next: data => {
          debugger
          this.Departmentlist = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public ActivatedRouterCall() {
    this.ActivatedRoute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Holiday = '',
          this.HolidayDescription = ''
      }
      else {
        this.DigipayrollServiceService.GetHolidays()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Holiday = this.leavelist[0].holiday
              this.HolidayDescription = this.leavelist[0].holidayDescription
              this.HolidayDate = this.datepipe.transform(this.leavelist[0].holidayDate, 'yyyy-MM-dd');
            }, error: (err) => {
              // Swal.fire('Issue in Getting Hoilday');
              // Insert error in Db Here//
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
      }
    })
  }

  public GetRoleID(event: any) {
    this.RoleType = event.target.value;
  }

  public GetRoleType() {
    this.DigipayrollServiceService.GetRoleType()
      .subscribe({
        next: data => {
          this.RoleTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public GetOtConfiguration() {
    this.DigipayrollServiceService.GetOtConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.result = data;
          this.AutoApproval = this.result[0].approvalStatus;
          this.ManualApply = this.result[0].manualApply;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Ot Configuration');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.employeelist.push(item);
    Array.prototype.push.apply(this.employeelist, item);
  }

  onItemSelectAll(item: any) {
    debugger
    console.log(item);
    Array.prototype.push.apply(this.employeelist, item);
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    /*  Swal.fire('Attachment Added Successfully'); */
    this.loader = false;
    this.showPopup = 1
    this.messageId = 64;
  }

  public Save() {
    debugger
    this.loader = true
    this.showPopup = 0;
    if (this.Type == undefined) {
      /*    Swal.fire("Please fill the Mandatory Fields") */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      for (let i = 0; i <= this.employeelist.length; i++) {
        var entity = {
          'StaffID': this.employeelist[i].id,
          'ATDType': this.Type,
          'Amount': this.Amount,
          'Comments': this.Comments,
          'DeductionType': this.Deduction,
          'Tenure1': this.Tenure
        }
        this.DigipayrollServiceService.InsertATDRequests(entity)
          .subscribe({
            next: data => {
              /*   Swal.fire('Saved Successfully'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
              location.href = '#/Employee/ATDRequestsDash'
            }, error: (err) => {
              // Swal.fire('Issue in Inserting ATDRequests');
              // Insert error in Db Here//
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
      }
      this.employeelist = [];
      this.ngOnInit();
      this.loader = false;
    }
  }

  public GetLeaveType() {
    debugger
    this.DigipayrollServiceService.GetLeaveType()
      .subscribe({
        next: data => {
          debugger
          this.LeaveTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting LeaveType');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public Getemployee(event: any) {
    debugger
    this.RoleID = event.target.value;
    this.DigipayrollServiceService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList2 = data.filter(x => x.roleType == this.RoleID && x.department == this.Department);
          // this.selectedItems = this.dropdownList2;
          console.log("this.dropdownList2", this.dropdownList2)
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public cancel() {
    location.reload();
  }

}