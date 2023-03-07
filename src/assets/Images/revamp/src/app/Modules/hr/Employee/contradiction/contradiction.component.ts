import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-contradiction',
  templateUrl: './contradiction.component.html',
  styleUrls: ['./contradiction.component.css']
})

export class ContradictionComponent implements OnInit {

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
  loader: any;
  ManualApply: any;
  currentUrl: any;
  Deduction: any;
  startdate: any;
  enddate: any;
  SigninDate: any;
  SignoutDate: any;
  UserID: any
  employeelist: any = [];
  public attachments21: any = [];
  public attachments: any = [];
  starttime: any;
  endtime: any;
  Tenure: any;
  holidaylist: any;
  RetirementAge: any;
  RetirementEffectiveDate: any;
  Type: any;
  Amount: any;
  Comments: any;
  RoleID: any
  uniquelist: any
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  LeaveTypeList: any;
  dropdownList2: any;
  public LeaveType: any;
  showPopup: number = 0;
  messageId: number = 0;
  dropdownRoleList: any = [];
  roleselectedItems: any = [];
  roledropdownSettings: any = {};

  dropdownDeptList: any = [];
  deptselectedItems: any = [];
  deptdropdownSettings: any = {};

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.RoleID = "";
    this.Department = "";
    this.Deduction = "";
    this.GetLeaveType();
    this.GetDepartment();

    this.ActivatedRouterCall();
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

    this.roledropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'role',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.deptdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'department_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
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
          // Swal.fire('Issue in Getting OT Configuration');
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

  public GetDepartment() {
    this.DigipayrollServiceService.GetDepartment()
      .subscribe({
        next: data => {
          this.dropdownDeptList = data;
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
    debugger;
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    /*  Swal.fire('Attachment Added Successfully'); */
    this.loader = false;
    this.showPopup = 1;
    this.messageId = 64;
  }

  public Save() {
    this.loader = true
    debugger
    this.showPopup = 0;
    if (this.Amount == undefined || this.Amount == "" || this.Comments == undefined || this.Comments == "" ||
      this.Deduction == undefined || this.Deduction == "" || this.employeelist == undefined || this.employeelist == null
      || this.employeelist == "" || this.employeelist == 0 || this.deptselectedItems == undefined || this.deptselectedItems ==
      "" || this.roleselectedItems == undefined || this.roleselectedItems == "" || this.selectedItems == undefined ||
      this.selectedItems == "") {
      /* Swal.fire("Please fill the Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      for (let i = 0; i <= this.employeelist.length; i++) {
        var entity = {
          'StaffID': this.employeelist[i].id,
          'Amount': this.Amount,
          'Comments': this.Comments,
          'DeductionType': this.Deduction,
          'Tenure1': this.Tenure
        }
        this.DigipayrollServiceService.InsertContradictionforstaff(entity)
          .subscribe({
            next: data => {
              debugger
              if (data == -1 || data == 0) {
                /*  Swal.fire('Contra Deduction Already Exist') */
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 208;
              }
              else {
                /* Swal.fire('Saved Successfully'); */
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 8;
              }

              this.loader = false
              location.href = '#/HR/Contradictiondash'
            }, error: (err) => {
              // Swal.fire('Issue in Inserting Contradiction for staff');
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
    this.loader = true
    this.DigipayrollServiceService.GetLeaveType()
      .subscribe({
        next: data => {
          debugger
          this.LeaveTypeList = data;
          this.loader = false
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
    this.loader = true
    this.Department = event.target.value;

    this.DigipayrollServiceService.GetAllStaffNew().subscribe(data => {
      debugger
      this.RoleTypeList = data.filter(x => x.department == this.Department);
      const key = 'role';
      this.dropdownRoleList = [...new Map(this.RoleTypeList.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
      this.loader = false
    })
    this.loader = false
  }

  roleonItemSelect(item: any) {
    debugger
    console.log(item);
    this.RoleID = item.id;

    this.DigipayrollServiceService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          let temp: any = data.filter(x => x.type == this.RoleID);
          this.EmployeeName = temp[0].name;
          this.DigipayrollServiceService.GetDeMinimisMapping()
            .subscribe({
              next: data => {
                debugger
                let dropdownList2: any = data.filter(x => x.roleID == this.RoleID);
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


  deptonItemSelect(item: any) {
    debugger
    console.log(item);
    this.Department = item.id;
    this.loader = true;
    this.DigipayrollServiceService.GetAllStaffNew().subscribe(data => {
      debugger
      this.RoleTypeList = data.filter(x => x.department == this.Department);
      this.dropdownList2 = data.filter(x => x.department == this.Department);

      const key = 'role';
      this.dropdownRoleList = [...new Map(this.RoleTypeList.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
      this.loader = false
    })

  }

  // public Getemployee(event: any) {
  //   debugger
  //    this.loader = true
  //   this.RoleID = event.target.value;
  //   this.DigipayrollServiceService.GetMyDetails()
  //     .subscribe({
  //       next: data => {
  //         debugger
  //         this.dropdownList2 = data.filter(x => x.roleType == this.RoleID && x.department == this.Department);
  //          this.loader = false
  //       }, error: (err) => {
  //         Swal.fire('Issue in Getting My Details');
  //         // Insert error in Db Here//
  //         var obj = {
  //           'PageName': this.currentUrl,
  //           'ErrorMessage': err.error.message
  //         }
  //         this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
  //           data => {
  //             debugger
  //           },
  //         )}
  //     })
  // }

  public cancel() {
    location.href = '#/HR/Contradictiondash'
  }

}