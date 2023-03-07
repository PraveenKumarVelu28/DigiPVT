import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-retirement-configuration',
  templateUrl: './retirement-configuration.component.html',
  styleUrls: ['./retirement-configuration.component.css']
})

export class RetirementConfigurationComponent implements OnInit {
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
  selectedItems1: any = [];
  dropdownSettings1: any = {};
  result: any;
  AutoApproval: any;
  ManualApply: any;
  startdate: any;
  enddate: any;
  SigninDate: any;
  SignoutDate: any;
  UserID: any
  employeelist: any = [];
  public attachments21: any = [];
  public attachments: any = [];
  loader: any;
  starttime: any;
  endtime: any;
  holidaylist: any;
  RetirementAge: any;
  RetirementEffectiveDate: any;
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  LeaveTypeList: any;
  currentUrl: any;
  RoleID: any
  public LeaveType: any
  dropdownList2: any;
  uniquelist: any
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.RoleID = "";
    this.Department = "";




    this.GetLeaveType();




    this.GetRoleType();
    this.GetDepartment1();
    this.GetMyDetails();
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

  public GetRoleType() {
    this.DigipayrollServiceService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
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

  public GetDepartment1() {
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

  public GetMyDetails() {
    this.DigipayrollServiceService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.RoleTypeList = data.filter(x => x.department == this.Department);
          const key = 'role';
          this.uniquelist = [...new Map(this.RoleTypeList.map((item: { [x: string]: any; }) =>
            [(item[key]), item])).values()]
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

  public GetOtConfiguration() {
    this.DigipayrollServiceService.GetOtConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.result = data;
          this.AutoApproval = this.result[0].approvalStatus;
          this.ManualApply = this.result[0].manualApply;
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Hoilday');
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

  public GetDepartment() {
    debugger
  }

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.employeelist.push(item)
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
    /*   Swal.fire('Attachment Added Successfully'); */
    this.showPopup = 1;
    this.messageId = 63;
  }

  public Save() {
    debugger;
    this.showPopup = 0;
    if (this.RetirementAge == undefined) {
      /*  Swal.fire("Please fill the Mandatory Fields") */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      for (let i = 0; i <= this.employeelist.length; i++) {
        var entity = {
          'staffID': this.employeelist[i].id,
          'RetirementAge': this.RetirementAge,
        }
        this.DigipayrollServiceService.UpdateRetirementConfiguration(entity)
          .subscribe({
            next: data => {
              /* Swal.fire('Configuration Added Successfully'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 65;
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Updating Retirement Configuration');
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
          this.LeaveTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Leave Type');
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

  public GetRoleID(event: any) {
    debugger
  }

  public Getemployee(event: any) {
    debugger
    this.RoleID = event.target.value;
    this.DigipayrollServiceService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList2 = data.filter(x => x.roleType == this.RoleID && x.department == this.Department);
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Hoilday');
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