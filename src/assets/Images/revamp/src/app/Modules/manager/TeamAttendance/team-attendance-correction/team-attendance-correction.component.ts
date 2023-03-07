import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { DatePipe } from '@angular/common';

import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-team-attendance-correction',
  templateUrl: './team-attendance-correction.component.html',
  styleUrls: ['./team-attendance-correction.component.css']
})
export class TeamAttendanceCorrectionComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public datepipe: DatePipe) { }
  viewMode = 'tab1';
  roleid: any;
  timesheets: any = [];
  staffID: any;
  IntID: boolean = false;
  public ID: any = [];
  ClassList: any;
  date: any;
  Notes: any;
  term: any;
  edate: any;
  GenderList: any;
  ScheduleDate: any;
  ScheduleTime: any;
  NoImagesAvail: any;
  correctionlist1: any;
  temp: any
  correctionlist3: any;
  correctionlist2: any;
  currentUrl: any;
  selecallbtn: any;
  expencesName: any;
  Decription: any;
  id: any;
  p: any = 1;
  count1: any = 10;
  StartDate: any;
  EndDate: any;
  StartTime: any;
  EndTime: any;
  alldates: any;
  ipaddress: any;
  UserID: any;
  correctionlist: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.loader = true;
    this.currentUrl = window.location.href;
    this.IntID = false;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetTeamAttendanceCorrection();
  }

  public cancel() {
    location.reload();
    this.loader = false;
  }


  public GetTeamAttendanceCorrection() {
    debugger
    if (this.roleid == 11 || this.roleid == 10) {
      this.DigiofficeService.GetAttendanceCorrection1()
        .subscribe({
          next: data => {
            debugger
            this.correctionlist1 = data.filter(x => x.status == 'Manager Pending');
            this.correctionlist2 = data.filter(x => x.status == 'Manager Approved');
            this.correctionlist3 = data.filter(x => x.status == 'Manager Rejected');
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
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
      this.DigiofficeService.GetPendingAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.correctionlist1 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Pending Attendance Correction By Supervisor');
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
      this.DigiofficeService.GetApprovedAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.correctionlist2 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Approved Attendance Correction By Supervisor');
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
      this.DigiofficeService.GetRejectedAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.correctionlist3 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Rejected Attendance Correction By Supervisor');
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


  id1: any;
  public ApproveTimeSheet(item: any) {
    debugger;
    this.loader = false;
    this.Save(item);






  }

  public getid(id: any) {
    debugger;
    this.id = id;
    this.loader = false;
  }


  public getdate() {
    debugger
    if (this.edate == "") {
      this.ngOnInit();
    } else {
      if (this.roleid == 10 || this.roleid == 11) {
        this.DigiofficeService.GetAttendanceCorrection1()
          .subscribe({
            next: data => {
              debugger
              this.correctionlist1 = data.filter(x => x.status == 'Manager Pending' && x.filterdate >= this.date && x.filterdate <= this.edate);
              this.correctionlist2 = data.filter(x => x.status == 'Manager Approved' && x.filterdate >= this.date && x.filterdate <= this.edate);
              this.correctionlist3 = data.filter(x => x.status == 'Manager Rejected' && x.filterdate >= this.date && x.filterdate <= this.edate);
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
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
        this.DigiofficeService.GetApprovedAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist2 = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
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
        this.DigiofficeService.GetPendingAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist1 = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Pending Attendance Correction By StaffID');
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
        this.DigiofficeService.GetRejectedAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
          .subscribe({
            next: data => {
              debugger
              this.correctionlist3 = data;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Rejected Attendance Correction By StaffID');
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

  public RejectAttedanceCoorection() {
    this.showPopup = 0;
    debugger;
    this.loader = true;
    var entity = {
      ID: this.id,
      Comments: this.Notes
    }
    this.DigiofficeService.RejectAttedanceCoorection(entity)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire("Rejected Successfully"); */
          location.reload();
          this.loader = false;
          this.showPopup = 1;
          this, this.messageId = 74;
        }, error: (err) => {
          this.loader = false;
          // Swal.fire('Issue in Rejecting Attedance Correction');
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


  // public Save(item: any) {
  //   debugger
  //   this.ipaddress = '255.255.255.255';
  //   var sdateobj = new Date(item.sDate);
  //   sdateobj.setHours(parseInt(item.startTime.substr(0, item.startTime.indexOf(':'))), parseInt(item.startTime.substr(3, item.startTime.indexOf(':'))), 0);
  //   var edateobj = new Date(item.sDate);
  //   edateobj.setHours(parseInt(item.endTime.substr(0, item.endTime.indexOf(':'))), parseInt(item.endTime.substr(3, item.endTime.indexOf(':'))), 0);
  //   var entity = {
  //     'ID': item.id,
  //     'UserID': item.staffID,
  //     'SigninDate': sdateobj,
  //     'SignoutDate': edateobj,
  //     'punchinip': this.ipaddress,
  //     'punchoutip': this.ipaddress,
  //     'ApprovalStatus': 'Manager Approved'
  //   }
  //   Swal.fire({
  //     title: 'Approve Record',
  //     text: "Are you sure? You won't be able to revert this!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Approve it!'
  //   }).then((result) => {
  //     if (result.value == true) {
  //       this.DigiofficeService.UploadbulkAttendanceWeb(entity)
  //         .subscribe({
  //           next: data => {
  //             debugger
  //             if (data == -1) {
  //               Swal.fire('Leave is applied on this date so can not complete Correction Request.');
  //               this.loader = false;
  //             }
  //             else {
  //               Swal.fire('Attendance Correction Updated Successfully');
  //               this.loader = false;
  //               this.ngOnInit();
  //             }
  //           }, error: (err) => {
  //             Swal.fire('Issue in UploadbulkAttendanceWeb');
  //             // Insert error in Db Here//
  //             var obj = {
  //               'PageName': this.currentUrl,
  //               'ErrorMessage': err.error.message
  //             }
  //             this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
  //               data => {
  //                 debugger
  //               },
  //             )
  //           }
  //         })
  //     }
  //   })
  // }

  public Save(item: any) {
    debugger
    this.showPopup = 0;
    // this.ipaddress = '255.255.255.255';
    // var sdateobj = new Date(item.sDate);
    // sdateobj.setHours(parseInt(item.startTime.substr(0, item.startTime.indexOf(':'))), parseInt(item.startTime.substr(3, item.startTime.indexOf(':'))), 0);
    // var edateobj = new Date(item.sDate);
    // edateobj.setHours(parseInt(item.endTime.substr(0, item.endTime.indexOf(':'))), parseInt(item.endTime.substr(3, item.endTime.indexOf(':'))), 0);
    var entity = {
      'ID': item.id,
      'UserID': item.staffID,
      'SigninDate': this.formatDate(item.sDate),
      'SignoutDate': this.formatDate(item.sDate),
    }
    Swal.fire({
      title: 'Approve Record',
      text: "Are you sure? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!'
    }).then((result) => {
      if (result.value == true) {
        this.loader = true;
        this.DigiofficeService.ApproveAttedanceCoorection(entity)
          .subscribe({
            next: data => {
              debugger
              this.ngOnInit();
              /* Swal.fire('Attendance Correction Updated Successfully'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 10
            }, error: (err) => {
              this.loader = false;
              //Swal.fire('Issue in Approve Attedance Correction);
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


  public exportexcel1() {
    debugger
    var ExportData: any;
    //this.DigiofficeService.GetApprovedAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")

    /* const Export_to_excel_options = {
      staffname: '',
      filename: 'Company_report'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    //debugger
    csvExporter.generateCsv(ExportData); */
  }
}