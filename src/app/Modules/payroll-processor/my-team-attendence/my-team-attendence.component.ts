import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;
@Component({
  selector: 'app-my-team-attendence',
  templateUrl: './my-team-attendence.component.html',
  styleUrls: ['./my-team-attendence.component.css']
})
export class MyTeamAttendenceComponent implements OnInit {

  
  constructor(public DigiofficeService: DigiPVTService) { }
  roleid: any
  staffID: any;
  p: any = 1;
  count1: any = 10;
  count: any;
  attendancelistcopy: any;
  RoleType: any;
  Department: any;
  Departmentlist: any;
  RoleTypeList: any;
  loader: any;
  filtereddate: any;
  todaydate: any;
  firstDayofcurrentmonth: any;
  currentUrl: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  dropdownRoleList: any = [];
  roleselectedItems: any = [];
  roledropdownSettings: any = {};
  employeeid: any;
  attendancelistCopy: any;
  startdate: any;
  enddate: any;
  attendancelist: any;
  startingTime1: any;
  endTime1: any;
  selecallbtn: any;
  roleID: any;
  term: any;
  uniquelist: any;
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  
  stafflistcopy123:any;
  StaffID:any;
  stafflist:any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roleid = sessionStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.RoleType = "";
    this.Department = "";

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'firstAndLastName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.roledropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.uniquelist = [];

    this.GetDepartment();
    this.GetRoleType();
    this.GetAttendance();
    this.GetStaffByManagerIDForDropdown();

    this.DigiofficeService.GetAllStaffNew().
    subscribe({
      next: data => {
        debugger
        this.stafflist = data;
       
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting All Staff');
        this.loader=false;
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

  public GetDepartment() {
    this.DigiofficeService.GetDepartment()
      .subscribe({
        next: data => {
          debugger
          this.Departmentlist = data;
          this.loader = false;
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

  incomingfile(event: any) {
    debugger;
    this.file = event.target.files[0];
    let a = this.file.name;
    var characters = a.substr(a.length - 5);
    debugger;
    if (characters == ".xlsx" || characters == ".XLSX") {
      let fileReader = new FileReader();
      fileReader.onload = e => {
        debugger
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
        this.exceldata = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      };
      fileReader.readAsArrayBuffer(this.file);
    } else {
      Swal.fire("Imported file format not supported.");
    }
  }


//     public Upload_file() {
//     debugger
//     if (this.exceldata == undefined) {
//       Swal.fire('Choose a File');
//     } else {
//       let apiarray = [];
    
//     for (let i = 0; i < this.exceldata.length; i++) {

//       this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeID
//       )
//       if(this.stafflistcopy123.length!=0){
//        this.StaffID = this.stafflistcopy123[0].id
//       }
//       else{
//        this.StaffID = 0
//       }
//       var data = {

//       'ID': this.StaffID,
//       'BaseSal': this.exceldata[i].BasicMonthlySalary,
//       'deniminimis': 'test',
//       'deniminimis_amount': 0,
//       'effectivedate' : this.exceldata[i].Effectivedate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].Effectivedate.slice(1, -1),
//       'AyalaCoopContribution' : this.exceldata[i].AyalaCoopContribution,
//       'AyalaCoopContributionStartDate' :  this.exceldata[i].AyalaCoopContribution_StartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].AyalaCoopContribution_StartDate.slice(1, -1),
//       'AyalaCoopContributionEndDate' :  this.exceldata[i].AyalaCoopContribution_EndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].AyalaCoopContribution_EndDate.slice(1, -1),
//       'AliGymMembership' :  this.exceldata[i].AliGymMembership,
//       'ALIGYMmembershipStartDate' :  this.exceldata[i].AliGymMembershipStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].AliGymMembershipStartDate.slice(1, -1),
//       'ALIGYMmembershipEndDate' :  this.exceldata[i].AliGymMembershipEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].AliGymMembershipEndDate.slice(1, -1),
//       'A4Vaccine' : this.exceldata[i].A4Vaccine,
//       'ALAR4VACCINEStartDate' : this.exceldata[i].A4VaccineStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].A4VaccineStartDate.slice(1, -1),
//       'ALAR4VACCINEEndDate' : this.exceldata[i].A4VaccineEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].A4VaccineEndDate.slice(1, -1),
//       'ARHotel' : this.exceldata[i].ARHotel,
//       'ARHotelStartDate' : this.exceldata[i].ARHotelStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].ARHotelStartDate.slice(1, -1),
//       'ARHotelEndDate' : this.exceldata[i].ARHotelEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].ARHotelEndDate.slice(1, -1),
//       'GoldGymDeduction' : this.exceldata[i].GoldGymDeduction,
//       'GOLDSGYMDEDUCTIONStartDate' : this.exceldata[i].GoldGymDeductionStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].GoldGymDeductionStartDate.slice(1, -1),
//       'GOLDSGYMDEDUCTIONEndDate' : this.exceldata[i].GoldGymDeductionEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].GoldGymDeductionEndDate.slice(1, -1),
//       'parkingrental' : this.exceldata[i].Parkingrental,
//       'PARKINGRENTALStartDate' :  this.exceldata[i].ParkingrentalStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].ParkingrentalStartDate.slice(1, -1),
//       'PARKINGRENTALEndDate' :  this.exceldata[i].ParkingrentalEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].ParkingrentalEndDate.slice(1, -1),
//       'uinonagencyfee' : this.exceldata[i].Uinonagencyfee,
//       'uinonagencyfeeStartDate' : this.exceldata[i].UinonagencyfeeStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].UinonagencyfeeStartDate.slice(1, -1),
//       'uinonagencyfeeEndDate' : this.exceldata[i].UinonagencyfeeEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].UinonagencyfeeEndDate.slice(1, -1),
//       'NHDMFC' : this.exceldata[i].NHDMFC,
//       'NHDMFCStartDate' : this.exceldata[i].NHDMFCStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].NHDMFCStartDate.slice(1, -1),
//       'NHDMFCEndDate' : this.exceldata[i].NHDMFCEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].NHDMFCEndDate.slice(1, -1),
//       'UnionDue' : this.exceldata[i].UnionDue,
//       'UnionDueStartDate' : this.exceldata[i].UnionDueStartDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].UnionDueStartDate.slice(1, -1),
//       'UnionDueEndDate' : this.exceldata[i].UnionDueEndDate.slice(1, -1) == " " ? "2022-10-06 00:00:00.000" : this.exceldata[i].UnionDueEndDate.slice(1, -1),
      
//       'NewSalary' :this.exceldata[i].NewSalary == " " ? 0 : this.exceldata[i].NewSalary


      

      

     
     






   
     
      

      
      


     
//       }
//     this.DigiofficeService.UpdateDe_minimis_Detailsforstaff(data).subscribe(

//       data => {
//         debugger

//         Swal.fire('Saved Succesfully')

//       },
//     )
//     }
//   }

// }

  public GetRoleType() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.dropdownRoleList = data;
          this.loader = false;
        }, error: (err) => {
          Swal.fire('Issue in Getting Role Type');
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

  roleonItemSelect(item: any) {
    debugger
    console.log(item);
    this.roleID = item.id;
    this.FilterRoleType();
  }

  // public GetStaffByManagerID() {
  //   this.DigiofficeService.GetStaffByManagerID(this.staffID)
  //     .subscribe({
  //       next: data => {
  //         debugger
  //         if (this.roleid == 2) {
  //           this.dropdownList = data;
  //         }
  //         else {
  //           this.dropdownList = data;
  //         }
  //       }, error: (err) => {
  //         Swal.fire('Issue in Getting Staff By Manager ID');
  //         // Insert error in Db Here//
  //         var obj = {
  //           'PageName': this.currentUrl,
  //           'ErrorMessage': err.error.message
  //         }
  //         this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
  //           data => {
  //             debugger
  //           },
  //         )
  //       }
  //     })
  // }
 
  public GetStaffByManagerIDForDropdown() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data.filter(x=>x.name!=null);
          this.loader=false;
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff By Manager ID');
          //  Insert error in Db Here
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

  public Filterjobs() {
    debugger
    let searchCopy = this.selectedItems.toLowerCase();
    this.loader=false;
    this.attendancelist = this.attendancelistCopy.filter((x: { userID: string }) => x.userID.toString().includes(searchCopy));
  }

  public getenddate(event: any) {
    this.enddate=event.target.value
    debugger
    if (this.enddate == "") {
      this.ngOnInit();
      this.loader=false;
    }
    else if (this.startdate == undefined || this.startdate == "") {
      Swal.fire('Please Select Start Date First');
      this.enddate ="";
      this.loader=false;
    }
    else if (this.enddate < this.startdate) {
      Swal.fire('End Date should be greater than Start Date');
      this.startdate ="";
      this.enddate ="";
      this.loader=false;
    }
        else {
          this.DigiofficeService.GetAttendance()
            .subscribe({
              next: data => {
                debugger
                this.attendancelist = data.filter(x=>x.filterdate>=this.startdate && x.filterdate<=this.enddate)
                this.count = this.attendancelist.length;
                this.attendancelistcopy = this.attendancelist;
                this.loader = false;
              }, error: (err) => {
                Swal.fire('Issue in Getting Attendance');
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

  Date:any;
    public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];
    
    for (let i = 0; i < this.exceldata.length; i++) {

      this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID

      )
      if(this.stafflistcopy123.length!=0){
       this.StaffID = this.stafflistcopy123[0].id
      }
      else{
       this.StaffID = 0
      }

  
      // this.starttime= moment(hours + ':' + minutes * 60 + '0',"LT"); 
     
   
      // this.Date=   new Date(Date.UTC(0, 0, this.exceldata[i].Date, 0, 0, 0, 0)-1).toISOString()
      this.Date = new Date(Date.UTC(0, 0, this.exceldata[i].Date-1));
    var eb = {

      'UserID': this.StaffID,
      'SigninDate': this.formatDate(this.Date) + "," +this.exceldata[i].Punchintime,
      'SignoutDate': this.formatDate(this.Date) + "," + this.exceldata[i].PunchOuttime,
      'punchinip': '255:255:255:255',
      'punchoutip': '255:255:255:255',
      'ApprovalStatus': 'Manager Approved HR Approved'



    }
    this.DigiofficeService.UploadbulkAttendanceWeb(eb).subscribe({
      next : data=>{
        Swal.fire('Saved Successfully')
      }, error :(err)=>{
        Swal.fire('Issue in Uploadbulk Attendance Web ')
      }
    })

   

      // data => {
      //   debugger

      //   Swal.fire('Saved Succesfully')

      // },
   
    }
  }

}


public formatDate(date: any) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
}

  // onItemSelect(item: any) {
  //   debugger
  //   console.log(item);
  //   this.employeeid = item.id;
  //   this.DigiofficeService.GetAttendanceByEmployeeID(this.employeeid, this.startdate, this.enddate)
  //     .subscribe({
  //       next: data => {
  //         debugger
  //         this.attendancelist = data;
  //         this.count = this.attendancelist.length;
  //         console.log(" this.attendancelist", this.attendancelist)
  //       }, error: (err) => {
  //         Swal.fire('Please Select Start Date and End Date');
  //         // Insert error in Db Here//
  //         var obj = {
  //           'PageName': this.currentUrl,
  //           'ErrorMessage': err.error.message
  //         }
  //         this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
  //           data => {
  //             debugger
  //           },
  //         )
  //       }
  //     })
  // }


  fileName = 'Attendance Report.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.employeeid = item.id;
  this.FilterStaff();
  }

  public FilterStaff(){
    if (this.startdate == undefined || this.enddate == undefined || this.startdate == "" || this.enddate == "") {
      this.loader = false;
      Swal.fire('Please Select Start Date and End Date');
    }
    else{
    this.DigiofficeService.GetAttendanceByEmployeeID(this.employeeid, this.startdate, this.enddate)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data;
          this.count = this.attendancelist.length;
          this.loader=false;
          // const key = 'id';
          // const key1 = 'month'
          // this.uniquelist = [...new Map(this.attendancelist.map((item: { [x: string]: any; }) =>
          //   [(item[key]), item])).values()]
        }, error: (err) => {
          Swal.fire('Issue in Getting Attendance By Employee ID');
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


  
  public FilterSearchstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.attendancelist = this.attendancelist.filter((x: { firstAndLastName: string }) =>
      x.firstAndLastName.toLowerCase().includes(searchCopy));
    this.count = this.stafflist.length;
    this.loader=false;
  }

  public FilterRoleType() {
    debugger
    if (this.roleID == "") {
      if (this.roleid == '2') {
        this.DigiofficeService.GetAttendanceByManagerID(this.staffID, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data.filter(x=>x.roleType==this.roleID);
              this.count = this.attendancelist.length;
              this.loader = false;
            }, error: (err) => {
              Swal.fire('Issue in Getting Attendance By Manager ID');
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
      else {
        this.DigiofficeService.GetAttendance()
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data
              this.count = this.attendancelist.length;
              this.attendancelistcopy = this.attendancelist;
              this.loader = false;
            }, error: (err) => {
              Swal.fire('Issue in Getting Attendance');
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
    } else {
      if (this.roleid == '2') {
        this.DigiofficeService.GetAttendanceByManagerID(this.staffID, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data.filter(x => x.roleType == this.roleID);
              this.count = this.attendancelist.length;
              this.loader = false;
            }, error: (err) => {
              Swal.fire('Issue in Getting Attendance By Manager ID');
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
      else {
        this.DigiofficeService.GetAttendance()
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data.filter(x => x.roleType == this.roleID);
              this.count = this.attendancelist.length;
              this.attendancelistcopy = this.attendancelist;
              this.loader = false;
            }, error: (err) => {
              Swal.fire('Issue in Getting Attendance');
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

  public GetAttendance() {
    debugger
    this.loader = true;
    if (this.roleid == '2') {
      this.DigiofficeService.GetAttendanceByManagerID(this.staffID, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
            console.log("this.attendancelist",this.attendancelist)
            this.count = this.attendancelist.length;
            this.loader = false;
          }, error: (err) => {
            Swal.fire('Issue in Getting Attendance By Manager ID');
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
    else {
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data
            this.count = this.attendancelist.length;
            this.attendancelistcopy = this.attendancelist;
            this.loader = false;
          }, error: (err) => {
            Swal.fire('Issue in Getting Attendance');
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

  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }

  public Approveall() {
    debugger
    this.selecallbtn = false;
    Swal.fire('Approved Successfully');
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = false;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }
}
