import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payperiod-settings-form',
  templateUrl: './payperiod-settings-form.component.html',
  styleUrls: ['./payperiod-settings-form.component.css']
})
export class PayperiodSettingsFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiPVTService, private ActivatedRoute: ActivatedRoute) { }

  currentUrl: any;
  loader: any;
  submit: any;
  id: any;
  DeductionType: any;
  attachmentsurl: any;
  loandeduction: any;
  RoleTypeList: any[] | undefined;
  leveltypeList: any
  level: any
  Department: any;
  EmployeementType: any;
  public restdaysarray1: any = [];
  PayPeriodSettingList: any[] | undefined;
  staffdropdownSettings: any = {};
  dropdownstaffList: any = [];
  staffselectedItems: any = [];
  staffdropdownSettings1: any = {};
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  Departmentlist: any;
  Managerlist: any;
  Comments: any;
  LoanType: any;
  StartDate: any;
  EndDate: any;
  Amount: any;
  roledid: any;
  employeelist: any;
  myDate: any;
  month: any;
  Netsalary: any;
  staffID: any;
  loanslist: any;
  stafflist: any;
  LoanType1: any;
  noofyears: any;
  gradecat: any;
  CompanyID: any;
  noofyearsofexperience: any;
  loanslist2: any;
  Category123: any;
  supervisor: any;
  stafflist123: any;
  staff: any;
  RoleType: any;
  payperiodcode: any;
  payperiod: any;
  attendanceCoverageStartDate:any;
  attendanceCoverageEndDate:any;
  payrollStartDate:any;
  payrollEndDate:any;
  payrollRunType:any;
  ngOnInit(): void {
    this.Department = 0;
    this.level = 0;
    this.RoleType = 0;
    this.EmployeementType = 0;
    this.payperiod=0;
    this.payrollRunType='0'

    this.staffdropdownSettings1 = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.LoanType = "Select";

    debugger;
    this.roledid = localStorage.getItem('roledid');
    this.myDate = new Date();


    this.DigiofficeService.GetAllStaffNew().subscribe((data: any) => {
      debugger
      this.stafflist = data
    })

    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger

          this.dropdownstaffList = data;

        }, error: (err) => {
          Swal.fire('Issue in Getting Staff');
          // Insert error in Db Here//
          var obj = {
            'PageName': 'this.currentUrl',
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })


    this.staffdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.ActivatedRoute.params.subscribe((params: any) => {
      this.id = params['id']
      debugger
      if (this.id != undefined) {
        this.submit = 'Update';
        this.GetPayPeriodSetting();
      }
      else {
        this.submit = 'Submit';
      }
    })

    this.GetDepartment();
    this.GetLevelType();

  }

  public GetPayPeriodSetting() {
    debugger
    this.DigiofficeService.GetPayPeriodSetting().subscribe(data => {
      debugger
      this.PayPeriodSettingList = data.filter(x => x.id == this.id);
      this.payperiodcode = this.PayPeriodSettingList[0].payCode,
        this.payperiod = this.PayPeriodSettingList[0].payPeriod,
        this.staffID = this.PayPeriodSettingList[0].staffIDList,
        this.Comments = this.PayPeriodSettingList[0].comments,
        this.attendanceCoverageStartDate = this.PayPeriodSettingList[0].attendanceCoverageStartdate,
        this.attendanceCoverageEndDate = this.PayPeriodSettingList[0].attendanceCoverageEndDate,
        this.payrollStartDate = this.PayPeriodSettingList[0].payrollStartDate,
        this.payrollEndDate = this.PayPeriodSettingList[0].payrollEndDate,
        this.payrollRunType = this.PayPeriodSettingList[0].payrollRunType,
       this.PayDate = this.PayPeriodSettingList[0].payDate,

      console.log("componentmaster", this.PayPeriodSettingList);

    });

  }


  GetDepartment() {
    this.DigiofficeService.GetDepartment().
      subscribe({
        next: data => {
          debugger
          this.Departmentlist = data;
        }, error: (err) => {
          Swal.fire('Issue in Getting Department');
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


    this.DigiofficeService.GetRoleType().
      subscribe({
        next: data => {
          debugger
          this.RoleTypeList = data;
        }, error: (err) => {
          Swal.fire('Issue in Getting Department');
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


  public GetLevelType() {
    debugger
    this.DigiofficeService.GetLevelType()
      .subscribe({
        next: data => {
          debugger
          this.leveltypeList = data
        }, error: (err) => {
          Swal.fire('Issue in Getting Level Type');
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

  public getDepartment() {

    if (this.Department == 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data;

          }, error: (err) => {
            Swal.fire('Issue in Getting Data');
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
    } else if (this.RoleType != 0 && this.Department != 0 && this.level == 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.department == this.Department && x.type == this.RoleType);

          }, error: (err) => {
            Swal.fire('Issue in Getting Data');
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
    else if (this.RoleType == 0 && this.Department != 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.department == this.Department && x.level == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Getting Data');
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
    else if (this.RoleType != 0 && this.Department != 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType && x.department == this.Department && x.levelid == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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
    else{
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x =>x.department == this.Department);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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

  geLevel() {

    if (this.level == 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data;

          }, error: (err) => {
            Swal.fire('Issue in Filtering Hoilday');
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
    else if (this.RoleType != 0 && this.Department == 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.levelid == this.level && x.type == this.RoleType);

          }, error: (err) => {
            Swal.fire('Issue in Getting Hoilday');
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
    else if (this.RoleType == 0 && this.Department != 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.levelid == this.level && x.department == this.Department);

          }, error: (err) => {
            Swal.fire('Issue in Getting Hoilday');
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
    else if (this.RoleType != 0 && this.Department != 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType && x.department == this.Department && x.levelid == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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
    else{
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x =>x.levelid == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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


  getRoleType() {
    if (this.RoleType == 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            debugger
            this.stafflist = data;
          }, error: (err) => {
            Swal.fire('Issue in Filtering Hoilday');
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

    else if (this.RoleType != 0 && this.Department == 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType && x.levelid == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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
    else if (this.RoleType != 0 && this.Department != 0 && this.level == 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType && x.department == this.Department);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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
    else if (this.RoleType != 0 && this.Department != 0 && this.level != 0) {
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType && x.department == this.Department && x.levelid == this.level);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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
    else{
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.type == this.RoleType);

          }, error: (err) => {
            Swal.fire('Issue in Filtering Data');
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




  getEmployeementType() {

    if (this.EmployeementType == 0) {
      this.DigiofficeService.GetAllStaffNew()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data;

          }, error: (err) => {
            Swal.fire('Issue in GetAllStaffNew');
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

    } else if (this.RoleType != 0 || this.Department != 0 || this.level != 0 || this.EmployeementType != 0) {
      this.DigiofficeService.GetAllStaffNew()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter((x: {
              department: any;
              type: any; employeeType: any;
            }) => x.employeeType == this.EmployeementType || x.type == this.RoleType || x.department == this.Department);

          }, error: (err) => {
            Swal.fire('Issue in GetAllStaffNew');
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

  L1Manager(item: any) {
    debugger
    console.log(item);
    this.restdaysarray1.push(item)
    // this.L1Manager = item.id;
    // this.staffID = item.id;
  }

  post() {
    debugger
    if (this.id != undefined) {
      this.Update();
    }
    else {
      this.insert();
    }
  }
  PayDate:any;
  public insert() {
    debugger;
    this.loader = true;
    if (
      this.payperiodcode == undefined || this.payperiodcode == "" || this.payperiodcode == null
      || this.payperiod == undefined || this.payperiod == "" || this.payperiod == null
      || this.Comments == undefined || this.Comments == "" || this.Comments == null
    ) {
      Swal.fire('Please Fill All Fields');
      this.loader = false;
    }
    else {
      this.staffID = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.staffID = this.staffID + this.restdaysarray1[i].id + ','
      }
      var entity = {

        'StaffIDList': this.staffID,
        'PayCode': this.payperiodcode,
        'PayPeriod': this.payperiod,
        'AttendanceCoverageStartdate' : this.attendanceCoverageStartDate,
        'AttendanceCoverageEndDate' : this.attendanceCoverageEndDate,
        'PayrollStartDate' : this.payrollStartDate,
        'PayrollEndDate' : this.payrollEndDate,
        'PayrollRunType' : this.payrollRunType,
        'Comments': this.Comments,
        'PayDate' : this.PayDate
      }
      debugger
      this.DigiofficeService.InsertPayPeriodSetting(entity)
        .subscribe({
          next: data => {
            debugger
            if (data == 0) {

            }
            else {
              Swal.fire("Saved Successfully");
              location.href = "#/PayrollProcessor/PayperiodSettingsDash";
              this.loader = false;
            }
          }, error: (err) => {
            Swal.fire('Issue in InsertPayPeriodSetting');
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



  public Update() {
    debugger;
    this.loader = true;
    if (
     this.payperiodcode == undefined || this.payperiodcode == "" || this.payperiodcode == null
      || this.payperiod == undefined || this.payperiod == "" || this.payperiod == null
      || this.Comments == undefined || this.Comments == "" || this.Comments == null
    ) {
      Swal.fire('Please Fill All Fields');
      this.loader = false;
    }
    else {
      var entity = {
        'ID': this.id,
        'StaffIDList': this.staffID,
        'PayCode': this.payperiodcode,
        'PayPeriod': this.payperiod,
        'AttendanceCoverageStartdate' : this.attendanceCoverageStartDate,
        'AttendanceCoverageEndDate' : this.attendanceCoverageEndDate,
        'PayrollStartDate' : this.payrollStartDate,
        'PayrollEndDate' : this.payrollEndDate,
        'PayrollRunType' : this.payrollRunType,
        'Comments': this.Comments,
         'PayDate' : this.PayDate
      }
      debugger
      this.DigiofficeService.UpdatePayPeriodSetting(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              Swal.fire("Update Successfully");
              location.href = "#/PayrollProcessor/PayperiodSettingsDash";
              this.loader = false;
            }
            Swal.fire("Update Successfully");
            location.href = "#/PayrollProcessor/PayperiodSettingsDash";
          }, error: (err) => {
            Swal.fire('Issue in UpdatePayPeriodSetting');
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



  public cancel() {
    debugger
    location.href = "#/PayrollProcessor/PayperiodSettingsDash"
  }
}
