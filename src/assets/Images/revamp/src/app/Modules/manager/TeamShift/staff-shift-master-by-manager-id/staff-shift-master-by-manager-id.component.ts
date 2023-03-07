import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { timeStamp } from 'console';

@Component({
  selector: 'app-staff-shift-master-by-manager-id',
  templateUrl: './staff-shift-master-by-manager-id.component.html',
  styleUrls: ['./staff-shift-master-by-manager-id.component.css']
})
export class StaffShiftMasterByManagerIDComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ExpenseId: any;
  staffID: any;
  dropdownList: any = [];
  selectedItems: any = [];
  loader: any;
  dropdownSettings: any = {};
  StaffID: any;
  ShiftName: any;
  Staffid1: any;
  startdate: any;
  enddate: any;
  currentUrl: any;
  public selectedstaff: any = [];
  ShiftDate: any;
  StartTime: any;
  Staffid: any;
  Stafflist: any;
  EndTime: any;
  leavelist: any
  alldates: any
  leavelist12: any;
  ShiftID: any;
  public restdaysarray1: any = [];
  dropdownSettingsresdays: any = {};
  restdaylist: any;
  Restdays: any;
  public restdaysarray: any = [];
  ID: any;
  roledid: any;
  employeeName: any;
  leavelistshift: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.loader = true;
    this.currentUrl = window.location.href;
    this.StaffID = localStorage.getItem('staffid');
    this.roledid = localStorage.getItem('roledid');
    this.UserName = localStorage.getItem('UserName');
    this.GetShiftMaster();
    this.GetStaff();
    this.GetMyDetailsByStaffID();
    this.ShiftName = "";
    this.Staffid1 = "";
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.dropdownSettingsresdays = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.restdaylist = [
      {
        'id': 1,
        'name': 'Monday'
      },
      {
        'id': 2,
        'name': 'Tuesday'
      },
      {
        'id': 3,
        'name': 'Wednesday'
      },
      {
        'id': 4,
        'name': 'Thursday'
      },
      {
        'id': 5,
        'name': 'Friday'
      },
      {
        'id': 6,
        'name': 'Saturday'
      },
      {
        'id': 7,
        'name': 'Sunday'
      }
    ]
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.loader = false;
      }
      else {
        this.DigiofficeService.GetStaffShiftDetails()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.leavelistshift = data.filter(x => x.id == this.ID);
              this.startdate = this.leavelistshift[0].filterdate;
              this.enddate = this.leavelistshift[0].filterenddate;
              this.ShiftName = this.leavelistshift[0].shiftName;
              this.StartTime = this.leavelistshift[0].startTime;
              this.EndTime = this.leavelistshift[0].endTime;
              this.Restdays = this.leavelistshift[0].restdays;
              this.employeeName = this.leavelistshift[0].name;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Staff Shift Details');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.selectedstaff.push(item.id);
    this.loader = false;
  }

  onItemDeSelect(item: any): void {
    debugger
    var index = this.selectedstaff.findIndex(function (o: any) {
      return o === item.id;
    })
    if (index !== -1) this.selectedstaff.splice(index, 1);

  }

  public GetStaff() {
    debugger
    if (this.roledid == 9) {
      this.DigiofficeService.GetAllStaffNew()
        .subscribe({
          next: data => {
            debugger
            this.Stafflist = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting My Details');
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
    } else {
      this.DigiofficeService.GetAllStaffNew()
        .subscribe({
          next: data => {
            debugger
            this.Stafflist = data.filter(x => x.supervisor == this.StaffID);
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting My Details');
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

  public GetShiftMaster() {
    debugger
    this.DigiofficeService.GetShiftMaster()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Shift Master');
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

  public getDatesBetweenDates = (startDate: string | number | Date, endDate: string | number | Date) => {
    let dates: any = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < new Date(endDate)) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    dates = [...dates, new Date(endDate)]
    this.alldates = dates;
    return dates
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

  public ChangeShiftMaster() {
    debugger
    this.DigiofficeService.GetShiftMaster()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.leavelist12 = data.filter(x => x.description == this.ShiftName)
          this.StartTime = this.leavelist12[0].starttime,
            this.EndTime = this.leavelist12[0].endtime,
            this.ShiftID = this.leavelist12[0].id
        }, error: (err) => {
          // Swal.fire('Issue in Getting Shift Master');
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

  public save() {
    this.showPopup = 0;
    debugger
    // this.getDaysBetweenDates(this.startdate, this.enddate, this.restdaysarray1[0].name, this.restdaysarray1[1].name);
    if (this.startdate == undefined || this.ShiftName == undefined || this.ShiftName == "" || this.enddate ==
      undefined || this.restdaysarray == undefined || this.selectedItems == undefined ||
      this.restdaysarray == "" || this.StartTime == undefined || this.EndTime == undefined) {
      /*     Swal.fire('Please Fill Mandatory Fields') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ',';

      }
      var eb = {
        'ShiftDate': this.startdate,
        'ShiftName': this.ShiftName,
        'StartTime': '2022-04-30 10:00:00.000',
        'EndTime': '2022-04-30 10:00:00.000',
        'StaffID1': this.selectedstaff[0],
        'EndDate': this.enddate,
        'Restdays': this.Restdays
      }
      this.DigiofficeService.InsertStaffShiftDetails(eb)
        .subscribe({
          next: data => {
            debugger
            if (data == 0) {
              /*   Swal.fire('Staff Shift already Exists. So Details Updated.'); */
              this.UpdateStaffShift();
              this.sendemail();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 104;
            }
            else {
              this.StaffID = data;
              this.UpdateStaffShift();
              Swal.fire('Saved Successfully');
              this.sendemail();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }

          }, error: (err) => {
            // Swal.fire('Issue in Inserting Staff Shift Details');
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
      // for (let i = 0; i < this.selectedstaff.length; i++) {

      // }
    }

  }
  public getDaysBetweenDates(start: any, end: any, dayName: any, dayName2: any) {
    debugger
    var result = [];
    var result1 = [];

    var days: any = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
    var day = days[dayName.toLowerCase().substr(0, 3)];
    var day1 = days[dayName2.toLowerCase().substr(0, 3)];
    // Copy start date
    var current = new Date(start);
    // Shift to next of required days
    current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
    // While less than end date, add dates to result array
    while (current < new Date(end)) {
      result.push(new Date(+current));
      current.setDate(current.getDate() + 7);
    }
    var current1 = new Date(start);
    // Shift to next of required days
    current1.setDate(current1.getDate() + (day1 - current1.getDay() + 7) % 7);
    // While less than end date, add dates to result array
    while (current1 < new Date(end)) {
      result1.push(new Date(+current1));
      current1.setDate(current1.getDate() + 7);
    }
    console.log(result.length + result1.length)
    debugger
    return result.length + result1.length;
  }

  public UpdateStaffShiftMaster() {
    this.showPopup = 0;
    debugger
    var entity = {
      'ID': this.ID,
      'ShiftDate': this.startdate,
      'ShiftName': this.ShiftName,
      'StartTime': this.StartTime,
      'EndTime': this.EndTime,
      'EndDate': this.enddate,

    }
    this.DigiofficeService.UpdateStaffShiftDetails(entity)
      .subscribe({
        next: data => {
          debugger
          /*    Swal.fire("Updated Successfully"); */
          location.href = "#/Manager/MyTeamWeeklyShift";
          this.loader = false; this.showPopup = 1;
          this.messageId = 10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Staff Shift Details');
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

  onItemSelect2(item: any) {
    debugger
    console.log(item);
    this.restdaysarray1.push(item)
  }

  restdaysonItemDeSelect(item: any): void {
    debugger
    var index = this.restdaysarray1.filter((x: { name: any; }) => x.name == item.name);
    let index1 = index[0].id
    var inde = this.restdaysarray1.map((x: { id: any; }) => {
      return x.id;
    }).indexOf(index1);

    this.restdaysarray1.splice(inde, 1);


  }



  public UpdateStaffShift() {
    debugger;
    for (let i = 0; i <= this.selectedstaff.length; i++) {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ','
      }
      var entity = {
        ID: this.selectedstaff[i],
        ShiftID: this.ShiftID,

      }
      this.DigiofficeService.UpdateStaffShift(entity)
        .subscribe({
          next: data => {
            debugger
            location.href = "#/Manager/MyTeamWeeklyShift"
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Staff Shift');
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

  public Cancel() {
    debugger

    location.href = "#/Manager/MyTeamWeeklyShift";
    this.loader = false;
  }

  ManagerEmailList: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.ManagerEmailList = data;
          this.manageremailid = this.ManagerEmailList[0].manageremailid;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Details');
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


  manageremailid: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.manageremailid,
      'emailsubject': 'Shift Request',
      'Message': 'Your Shift Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied Shift Request in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.manageremailid,
      'bcclist': this.manageremailid,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Attachments For Email');

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