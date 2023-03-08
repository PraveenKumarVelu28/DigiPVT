import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;
@Component({
  selector: 'app-my-team-over-time-details',
  templateUrl: './my-team-over-time-details.component.html',
  styleUrls: ['./my-team-over-time-details.component.css']
})
export class MyTeamOverTimeDetailsComponent implements OnInit {


  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }
  viewMode = 'tab1';
  viewMode1 = 'tab11';
  viewMode2 = 'tab111';
  selecallbtn: any;
  projectlist: any;
  attendancelist: any;
  RoleTypeList: any;
  Departmentlist: any;
  roleid: any;
  sdate: any;
  RoleType: any;
  Department: any;
  count: any;
  p: any = 1;
  count1: any = 10;
  TransportationType: any;
  Date: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  StaffID: any;
  OTlist: any;
  Supervisor: any;
  Name: any;
  Project: any;
  Destination: any;
  Purpose: any;
  ContactPerson: any;
  ContactPhNo: any;
  TimeOfDeparture: any;
  TimeOfReturn: any;
  noofhours: any;
  Comments: any;
  type: any;
  day: any
  attendancelistcopy: any;
  timedetails: any;
  timedetails1: any;
  timedetails2: any;
  timedetails3: any;
  currentUrl: any;
  edate: any;
  temp: any;
  term: any;
  id: any;
  sdte: any;
  Notes: any;
  level: any;
  specialNormalOT: any;
  ExccessNightOt: any;
  ExccessNormalOt: any;
  RestNightOt: any;
  RestNormalOT: any;
  ExccessRestNormalOt: any;
  RestExccessNightOt: any;
  LegalNightOt: any;
  LegalNormalOT: any;
  LegalExccessNormalOt: any;
  LegalExccessNightOt: any;
  SpecialNightOt: any;
  SpecialNormalOT: any;
  SpecialExccessNormalOt: any;
  SpecialExccessNightOt: any;
  SpecialRestNightOt: any;
  SpecialRestNormalOT: any;
  SpecialRestExccessNormalOt: any;
  SpecialRestExccessNightOt: any;
  LegalRestNightOt: any;
  LegalRestNormalOT: any;
  LegalExccessRestNormalOt: any;
  LegalExccessRestNightOt: any;
  PayPeriodSettingList: any;
  specialNormalOTAdjustment: any;
  ExccessNightOtAdjustment: any;
  ExccessNormalOtAdjustment: any;
  RestNightOtAdjustment: any;
  RestNormalOTAdjustment: any;
  ExccessRestNormalOtAdjustment: any;
  RestExccessNightOtAdjustment: any;
  LegalNightOtAdjustment: any;
  LegalNormalOTAdjustment: any;
  LegalExccessNormalOtAdjustment: any;
  LegalExccessNightOtAdjustment: any;
  SpecialNightOtAdjustment: any;
  SpecialNormalOTAdjustment: any;
  SpecialExccessNormalOtAdjustment: any;
  SpecialExccessNightOtAdjustment: any;
  SpecialRestNightOtAdjustment: any;
  SpecialRestNormalOTAdjustment: any;
  SpecialRestExccessNormalOtAdjustment: any;
  SpecialRestExccessNightOtAdjustment: any;
  LegalRestNightOtAdjustment: any;
  LegalRestNormalOTAdjustment: any;
  LegalExccessRestNormalOtAdjustment: any;
  LegalExccessRestNightOtAdjustment: any;
  PayPeriodSettingListAdjustment: any;
  stafflist: any;
  pendingpreapprove1: any;
  pendingapplyot: any;
  approvedpreapprove1: any;
  approvedapplyot: any;
  Rejectedpreapprove1: any;
  Rejectedapplyot: any;
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  show: any;
  i: any;
  startdate: any;
  Attachment: any;
  stafflistcopy123: any;
  noofhoursAdjustment: any;
  loader: any;
  nightOT: any;
  restNormalOT: any;
  LWOP: any;
  Undertime: any;
  Tardiness: any;
  nightOTAdjustment: any;
  restNormalOTAdjustment: any;
  DoubleHolidayNormalOt: any;
  DoubleHolidayExcessNormalOt: any;
  DoubleHolidayNightOt: any;
  DoubleHolidayExcessNightOt: any;
  DoubleHolidayRestNormalOt: any;
  DoubleHolidayRestNightOt: any;
  DoubleHolidayRestExcessNormalOt: any;
  DoubleHolidayRestExcessNightOt: any;
  LWOPAdjustment: any;
  UndertimeAdjustment: any;
  TardinessAdjustment: any;
  DoubleHolidayNormalOtAdjustment: any;
  DoubleHolidayExcessNormalOtAdjustment: any;
  DoubleHolidayNightOtAdjustment: any;
  DoubleHolidayExcessNightOtAdjustment: any;
  DoubleHolidayRestNormalOtAdjustment: any;
  DoubleHolidayRestNightOtAdjustment: any;
  DoubleHolidayRestExcessNormalOtAdjustment: any;
  DoubleHolidayRestExcessNightOtAdjustment: any;
  NSDRegular: any;
  NSDRegularAdjustment: any;
  undefined: any;
  sequenceNumber1: any
  SequenceNumber: any
  preapprove1: any;
  applyot1: any;
  preapprovaldetails: any;
  preapprovaldetails1: any;
  preapprovaldetails2: any;
  preapprovaldetails3: any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.preapprove1 = true;
    this.applyot1 = false;
    this.Department = "";
    this.RoleType = "";
    this.pendingpreapprove1 = true;
    this.roleid = sessionStorage.getItem('roledid');
    this.StaffID = localStorage.getItem('staffid');
    this.level = localStorage.getItem('level');

    this.GetMyOverTimeDetails();
    this.DigiofficeService.GetPayPeriodSetting().subscribe(data => {
      debugger
      this.PayPeriodSettingList = data;
    });

    this.DigiofficeService.GetAllStaffNew().
      subscribe({
        next: data => {
          debugger
          this.stafflist = data;
        }
      })
  }

  PendingPreRequest() {
    this.pendingpreapprove1 = true
    this.pendingapplyot = false
  }

  PendingRequest() {
    this.pendingpreapprove1 = false
    this.pendingapplyot = true
  }

  ApprovedPreRequest() {
    this.approvedpreapprove1 = true
    this.approvedapplyot = false
  }

  ApprovedRequest() {
    this.approvedpreapprove1 = false
    this.approvedapplyot = true
  }

  RejectedPreRequest() {
    this.Rejectedpreapprove1 = true
    this.Rejectedapplyot = false
  }

  RejectedRequest() {
    this.Rejectedpreapprove1 = false
    this.Rejectedapplyot = true
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

  public GetMyOverTimeDetails() {
    debugger
    this.DigiofficeService.GetStaffOverTimeDetailsUpload()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;

          this.count = this.timedetails.length
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff Over Time Details');
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

  public FilterAttendence() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.attendancelist = this.timedetails.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
    this.count = this.attendancelist.length;
  }

  public filterbydate() {
    debugger
    this.DigiofficeService.GetStaffOverTimeDetailsUpload().subscribe(data => {
      debugger
      this.timedetails = data.filter(x => (x.filterdate == this.sdate));

      if (this.timedetails.length == 0) {
        Swal.fire('No Records Found On This Date')
      }
      else {
        this.show = 1;
      }
    })
  }

  public filterdatepreapproval() {
    debugger
    if (this.sdate == undefined) {
      Swal.fire('Please Select Start Date');
      this.edate = ""
      this.loader = false;
    }
    else if (this.edate == "") {
      this.edate = "";
      this.sdate = "";
      this.ngOnInit();
    }

    else if (this.edate < this.sdate) {
      Swal.fire('Enddate Must Be Greater Than Startdate')
      this.edate = ""
      this.sdate = ""
    }
    else {
      // this.DigiofficeService.GetStaffOverTimeDetails().subscribe(data => {
      //   debugger
      //   this.timedetails = data;
      //   if (this.roleid == 2) {
      //     this.timedetails1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Pending' ) &&  (x.filterdate >= this.sdate && x.filterdate <= this.edate));
      //     this.timedetails2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Approved' ) && (x.filterdate >= this.sdate && x.filterdate <= this.edate))
      //     this.timedetails3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Rejected');
      //   }
      //   else {
      //     this.timedetails1 = data.filter(x => x.status == 'Manager Pending' && (x.filterdate >= this.sdate && x.filterdate <= this.edate));
      //     this.timedetails2 = data.filter(x => (x.status == 'Manager Approved') && (x.filterdate >= this.sdate && x.filterdate <= this.edate))
      //     this.timedetails3 = data.filter(x => x.status == 'Manager Rejected');
      //   }


      //   this.count = this.timedetails.length
      // })
      this.DigiofficeService.GetPreApprovalOverTime()
        .subscribe({
          next: data => {
            debugger
            this.preapprovaldetails = data
            if (this.roleid == 2) {
              // this.preapprovaldetails = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
              this.preapprovaldetails1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Pending' || x.status == 'Manager Pending HR Pending') && (x.filterdate >= this.sdate && x.filterdate <= this.edate));
              this.preapprovaldetails2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Approved' || x.status == 'Manager Approved HR Pending') && (x.filterdate >= this.sdate && x.filterdate <= this.edate))
              this.preapprovaldetails3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Rejected');
              // this.count = this.preapprovaldetails.length;
            }
            else {
              this.preapprovaldetails1 = data.filter(x => x.status == 'Manager Pending' && (x.filterdate >= this.sdate && x.filterdate <= this.edate));
              this.preapprovaldetails2 = data.filter(x => (x.status == 'Manager Approved') && (x.filterdate >= this.sdate && x.filterdate <= this.edate))
              this.preapprovaldetails3 = data.filter(x => x.status == 'Manager Rejected');
            }

          }, error: (err) => {
            Swal.fire('Issue in Getting PreApproval OverTime');
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

  public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];


      for (this.i = 0; this.i < this.exceldata.length; this.i++) {

        this.stafflistcopy123 = this.stafflist.filter((x: { employeID: any; }) => x.employeID == this.exceldata[this.i].EmployeeID)

        if (this.stafflistcopy123.length != 0) {
          this.StaffID = this.stafflistcopy123[0].id
        }
        else {
          this.StaffID = 0
        }


        let temp = this.PayPeriodSettingList.filter((x: { payDate: any; }) => x.payDate == this.exceldata[this.i].Period);
        this.Date = new Date(Date.UTC(0, 0, this.exceldata[this.i].PayDate - 1));


        var eb = {
          'StaffID': this.StaffID,
          'Date': this.Date,
          'noofhours': this.exceldata[this.i].OT_ON_REG_DAY,
          'NightOT': this.exceldata[this.i].OT_NIGHT_DIFFERENTIAL,
          'Comments': 'Uploaded Overtime',
          'StartTime': '10:00',
          'EndTime': '19:00',
          'Status': 'Manager Approved',
          'Attachment': this.Attachment == " " ? null : this.Attachment,
          'ExccessNormalOt': this.exceldata[this.i].OT_ON_REG_DAY_GREATER_THAN_8_HRS,
          'ExccessNightOt': this.exceldata[this.i].OT_NIGHT_DIFFERENTIAL_GREATER_THAN_8_HRS,
          'NSD_REGULAR': this.exceldata[this.i].NSD_REGULAR,
          'RestNightOt': this.exceldata[this.i].OT_ND_ON_REST_DAY,
          'RestNormalOT': this.exceldata[this.i].OT_ON_REST_DAY,
          'ExccessRestNormalOt': this.exceldata[this.i].OT_ON_REST_DAY_GREATER_THAN_8_HRS,
          'RestExccessNightOt': this.exceldata[this.i].OTND_ON_REST_DAY_Greater_Than_8HRS,
          'LegalNightOt': this.exceldata[this.i].ND_ON_LEGAL_HOL,
          'LegalNormalOT': this.exceldata[this.i].OT_ON_LEGAL_HOL,
          'LegalExccessNormalOt': this.exceldata[this.i].OT_ON_LEGAL_HOL_GREATER_THAN_8_hrs,
          'LegalExccessNightOt': this.exceldata[this.i].OTND_ON_LEGAL_HOL_GREATER_THAN_8_HRS,
          'SpecialHoliday': this.exceldata[this.i].OT_ON_SPECIAL_HOL,
          'SpecialNightOt': this.exceldata[this.i].ND_ON_SPECIAL_HOL,
          'SpecialNormalOT': this.exceldata[this.i].OT_ON_SPECIAL_HOL,
          'SpecialExccessNormalOt': this.exceldata[this.i].OT_ON_SPECIAL_HOL_GREATER_THAN_8_hrs,
          'SpecialExccessNightOt': this.exceldata[this.i].OTND_ON_SPECIAL_HOL_GREATER_THAN_8_hrs,
          'SpecialRestNightOt': this.exceldata[this.i].OT_ND_SPECIAL_HOL_ON_RESTDAY,
          'SpecialRestNormalOT': this.exceldata[this.i].OT_Special_HOL_ON_RESTDAY,
          'SpecialRestExccessNormalOt': this.exceldata[this.i].OT_SPECIAL_HOL_ON_RESTDAY_GREATER_THAN_8hrs,
          'SpecialRestExccessNightOt': this.exceldata[this.i].OTND_SPECIAL_HOL_ON_RESTDAY_GREATER_THAN_8hrs,
          'LegalRestNightOt': this.exceldata[this.i].OT_ND_LEGAL_HOL_ON_RESTDAY,
          'LegalRestNormalOT': this.exceldata[this.i].OT_LEGAL_HOL_ON_RESTDAY,
          'LegalExccessRestNormalOt': this.exceldata[this.i].OT_LEGAL_HOL_ON_RESTDAY_GREATER_THAN_8hrs,
          'LegalExccessRestNightOt': this.exceldata[this.i].OTND_LEGAL_HOL_ON_RESTDAY_GREATR_THAN_8hrs,
          'LWOP': this.exceldata[this.i].LWOP,
          'Undertime': this.exceldata[this.i].TARDY,
          'Tardiness': this.exceldata[this.i].UNDERTIME,
          'DoubleHolidayNormalOt': this.exceldata[this.i].OT_ON_DOUBLE_DAY,
          'DoubleHolidayNightOt': this.exceldata[this.i].OTND_ON_DOUBLE_DAY,
          'DoubleHolidayExcessNormalOt': this.exceldata[this.i].OT_ON_DOUBLE_DAY_8_HRS,
          'DoubleHolidayExcessNightOt': this.exceldata[this.i].OTND_ON_DOUBLE_DAY_8_HRS,
          'DoubleHolidayRestNormalOt': this.exceldata[this.i].OT_DOUBLE_DAY_ON_RESTDAY,
          'DoubleHolidayRestNightOt': this.exceldata[this.i].OTND_DOUBLE_DAY_ON_RESTDAY,
          'DoubleHolidayRestExcessNormalOt': this.exceldata[this.i].OT_DOUBLE_DAY_ON_RESTDAY_8_HRS,
          'DoubleHolidayRestExcessNightOt': this.exceldata[this.i].OTND_DOUBLE_DAY_ON_RESTDAY_8_HRS,
          'noofhoursAdjustment': this.exceldata[this.i].OT_REG_ADJ,
          'NightOTAdjustment': this.exceldata[this.i].OTND_REG_ADJ,
          'ExccessNormalOtAdjustment': this.exceldata[this.i].OT_REG_EXC8_ADJ,
          'ExccessNightOtAdjustment': this.exceldata[this.i].OTND_REG_EXC8_ADJ,

          'RestNightOtAdjustment': this.exceldata[this.i].OT_ND_ON_REST_DAY_ADJ,
          'RestNormalOTAdjustment': this.exceldata[this.i].OT_ON_REST_DAY_ADJ,
          'ExccessRestNormalOtAdjustment': this.exceldata[this.i].OT_ON_REST_DAY_GREATER_THAN_8_HRS_ADJ,
          'RestExccessNightOtAdjustment': this.exceldata[this.i].OTND_ON_REST_DAY_Greater_Than_8HRS_ADJ,
          'LegalNightOtAdjustment': this.exceldata[this.i].OTND_LEGALWD_ADJ,
          'LegalNormalOTAdjustment': this.exceldata[this.i].OT_LEGALWD_ADJ,
          'LegalExccessNormalOtAdjustment': this.exceldata[this.i].OT_LEGALWD_EXC8_ADJ,
          'LegalExccessNightOtAdjustment': this.exceldata[this.i].OTND_LEGALWD_EXC8_ADJ,
          'SpecialNightOtAdjustment': this.exceldata[this.i].OTND_SPECIALWD_ADJ,
          'SpecialNormalOTAdjustment': this.exceldata[this.i].OT_SPECIALWD_ADJ,
          'SpecialExccessNormalOtAdjustment': this.exceldata[this.i].OT_SPECIALWD_EXC8_ADJ,
          'SpecialExccessNightOtAdjustment': this.exceldata[this.i].OTND_SPECIALWD_EXC8_ADJ,
          'SpecialRestNightOtAdjustment': this.exceldata[this.i].OTND_SPECIALRD_ADJ,
          'SpecialRestNormalOTAdjustment': this.exceldata[this.i].OT_SPECIALRD_ADJ,
          'SpecialRestExccessNormalOtAdjustment': this.exceldata[this.i].OT_SPECIALRD_EXC8_ADJ,
          'SpecialRestExccessNightOtAdjustment': this.exceldata[this.i].OTND_SPECIALRD_EXC8_ADJ,
          'LegalRestNightOtAdjustment': this.exceldata[this.i].OTND_LEGALRD_ADJ,
          'LegalRestNormalOTAdjustment': this.exceldata[this.i].OT_LEGALRD_ADJ,
          'LegalExccessRestNormalOtAdjustment': this.exceldata[this.i].OT_LEGALRD_EXC8_ADJ,
          'LegalExccessRestNightOtAdjustment': this.exceldata[this.i].OTND_LEGALRD_EXC8_ADJ,
          'LWOPAdjustment': this.exceldata[this.i].LWOP_ADJ,
          'UndertimeAdjustment': this.exceldata[this.i].TARDY_ADJ,
          'TardinessAdjustment': this.exceldata[this.i].UNDERTIME_ADJ,
          'DoubleHolidayNormalOtAdjustment': this.exceldata[this.i].OT_ON_DOUBLE_DAY_ADJ,
          'DoubleHolidayNightOtAdjustment': this.exceldata[this.i].OTND_ON_DOUBLE_DAY_ADJ,
          'DoubleHolidayExcessNormalOtAdjustment': this.exceldata[this.i].OT_ON_DOUBLE_DAY_8_HRS_ADJ,
          'DoubleHolidayExcessNightOtAdjustment': this.exceldata[this.i].OTND_ON_DOUBLE_DAY_8_HRS_ADJ,
          'DoubleHolidayRestNormalOtAdjustment': this.exceldata[this.i].OT_DOUBLE_DAY_ON_RESTDAY_ADJ,
          'DoubleHolidayRestNightOtAdjustment': this.exceldata[this.i].OTND_DOUBLE_DAY_ON_RESTDAY_ADJ,
          'DoubleHolidayRestExcessNormalOtAdjustment': this.exceldata[this.i].OT_DOUBLE_DAY_ON_RESTDAY_8_HRS_ADJ,
          'DoubleHolidayRestExcessNightOtAdjustment': this.exceldata[this.i].OTND_DOUBLE_DAY_ON_RESTDAY_8_HRS_ADJ,
          'NSD_REGULARAdjustment': this.exceldata[this.i].NSD_REGULARAdjustment,
        }
        this.DigiofficeService.InsertStaffOverTimeDetailsUpload(eb).subscribe({
          next: data => {

            debugger
            this.StaffID = data;

            Swal.fire('Saved Successfully')
            // // this.SavePositionDetails();
            // var eb = {
            //   'EmergencyContactName': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactName,
            //   'EmergencyContactRelationship': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactRelationship,
            //   'EmergencyContactMobileNumber': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactMobileNumber,
            //   'StaffID':  this.StaffID
            // }
            // this.i++;
            // this.AliprojectService.InsertMyAddressDetails(eb).subscribe(

            //   data => {
            //     debugger
            //     Swal.fire('Staffs Added Successfully');
            //     // this.router.navigate(['/EmployeeDashboard']);

            //   },
            // )

          }, error: (err) => {
            Swal.fire('Issue in Inserting Attendance Units');
            // Insert error in Db Here//

          }
        }
        )
      }
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
  
  public GetOTDetails(time: any) {
    this.DigiofficeService.GetStaffOverTimeDetailsUpload()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          let temp: any = data.filter(x => x.id == time.id);
          this.noofhours = temp[0].noofhours;
          this.nightOT = temp[0].nightOT;
          this.restNormalOT = temp[0].restNormalOT;
          this.specialNormalOT = temp[0].specialNormalOT;
          this.ExccessNightOt = temp[0].exccessNightOt;
          this.ExccessNormalOt = temp[0].exccessNormalOt;
          this.RestNightOt = temp[0].restNightOt;
          this.RestNormalOT = temp[0].restNormalOT;
          this.ExccessRestNormalOt = temp[0].exccessRestNormalOt;
          this.RestExccessNightOt = temp[0].restExccessNightOt;
          this.LegalNightOt = temp[0].legalNightOt;
          this.LegalNormalOT = temp[0].legalNormalOT;
          this.LegalExccessNormalOt = temp[0].legalExccessNormalOt;
          this.LegalExccessNightOt = temp[0].legalExccessNightOt;
          this.SpecialNightOt = temp[0].specialNightOt;
          this.SpecialNormalOT = temp[0].specialNormalOT;
          this.SpecialExccessNormalOt = temp[0].specialExccessNormalOt;
          this.SpecialExccessNightOt = temp[0].specialExccessNightOt;
          this.SpecialRestNightOt = temp[0].specialRestNightOt;
          this.SpecialRestNormalOT = temp[0].specialRestNormalOT;
          this.SpecialRestExccessNormalOt = temp[0].specialRestExccessNormalOt;
          this.SpecialRestExccessNightOt = temp[0].specialRestExccessNightOt;
          this.LegalRestNightOt = temp[0].legalRestNightOt;
          this.LegalRestNormalOT = temp[0].legalRestNormalOT;
          this.LegalExccessRestNormalOt = temp[0].legalExccessRestNormalOt;
          this.LegalExccessRestNightOt = temp[0].legalExccessRestNightOt;
          this.LWOP = temp[0].lopDays;
          this.Undertime = temp[0].undertime;
          this.Tardiness = temp[0].tardiness;
          this.DoubleHolidayNormalOt = temp[0].doubleHolidayNormalOt,
            this.DoubleHolidayNightOt = temp[0].doubleHolidayNightOt,
            this.DoubleHolidayExcessNormalOt = temp[0].doubleHolidayExcessNormalOt,
            this.DoubleHolidayExcessNightOt = temp[0].doubleHolidayExcessNightOt,
            this.DoubleHolidayRestNormalOt = temp[0].doubleHolidayRestNormalOt,
            this.DoubleHolidayRestNightOt = temp[0].doubleHolidayRestNightOt,
            this.DoubleHolidayRestExcessNormalOt = temp[0].doubleHolidayRestExcessNormalOt,
            this.DoubleHolidayRestExcessNightOt = temp[0].doubleHolidayRestExcessNightOt,
            this.noofhoursAdjustment = temp[0].noofhoursAdjustment;
          this.nightOTAdjustment = temp[0].nightOTAdjustment;
          this.restNormalOTAdjustment = temp[0].restNormalOTAdjustment;
          this.specialNormalOTAdjustment = temp[0].specialNormalOTAdjustment;
          this.ExccessNightOtAdjustment = temp[0].exccessNightOtAdjustment;
          this.ExccessNormalOtAdjustment = temp[0].exccessNormalOtAdjustment;
          this.RestNightOtAdjustment = temp[0].restNightOtAdjustment;
          this.RestNormalOTAdjustment = temp[0].restNormalOTAdjustment;
          this.ExccessRestNormalOtAdjustment = temp[0].exccessRestNormalOtAdjustment;
          this.RestExccessNightOtAdjustment = temp[0].restExccessNightOtAdjustment;
          this.LegalNightOtAdjustment = temp[0].legalNightOtAdjustment;
          this.LegalNormalOTAdjustment = temp[0].legalNormalOTAdjustment;
          this.LegalExccessNormalOtAdjustment = temp[0].legalExccessNormalOtAdjustment;
          this.LegalExccessNightOtAdjustment = temp[0].legalExccessNightOtAdjustment;
          this.SpecialNightOtAdjustment = temp[0].specialNightOtAdjustment;
          this.SpecialNormalOTAdjustment = temp[0].specialNormalOTAdjustment;
          this.SpecialExccessNormalOtAdjustment = temp[0].specialExccessNormalOtAdjustment;
          this.SpecialExccessNightOtAdjustment = temp[0].specialExccessNightOtAdjustment;
          this.SpecialRestNightOtAdjustment = temp[0].specialRestNightOtAdjustment;
          this.SpecialRestNormalOTAdjustment = temp[0].specialRestNormalOTAdjustment;
          this.SpecialRestExccessNormalOtAdjustment = temp[0].specialRestExccessNormalOtAdjustment;
          this.SpecialRestExccessNightOtAdjustment = temp[0].specialRestExccessNightOtAdjustment;
          this.LegalRestNightOtAdjustment = temp[0].legalRestNightOtAdjustment;
          this.LegalRestNormalOTAdjustment = temp[0].legalRestNormalOTAdjustment;
          this.LegalExccessRestNormalOtAdjustment = temp[0].legalExccessRestNormalOtAdjustment;
          this.LegalExccessRestNightOtAdjustment = temp[0].legalExccessRestNightOtAdjustment;
          this.LWOPAdjustment = temp[0].lopDaysAdjustment;
          this.UndertimeAdjustment = temp[0].undertimeAdjustment;
          this.TardinessAdjustment = temp[0].tardinessAdjustment;
          this.DoubleHolidayNormalOtAdjustment = temp[0].doubleHolidayNormalOtAdjustment,
            this.DoubleHolidayNightOtAdjustment = temp[0].doubleHolidayNightOtAdjustment,
            this.DoubleHolidayExcessNormalOtAdjustment = temp[0].doubleHolidayExcessNormalOtAdjustment,
            this.DoubleHolidayExcessNightOtAdjustment = temp[0].doubleHolidayExcessNightOtAdjustment,
            this.DoubleHolidayRestNormalOtAdjustment = temp[0].doubleHolidayRestNormalOtAdjustment,
            this.DoubleHolidayRestNightOtAdjustment = temp[0].doubleHolidayRestNightOtAdjustment,
            this.DoubleHolidayRestExcessNormalOtAdjustment = temp[0].doubleHolidayRestExcessNormalOtAdjustment,
            this.DoubleHolidayRestExcessNightOtAdjustment = temp[0].doubleHolidayRestExcessNightOtAdjustment
          this.NSDRegular = temp[0].nsD_REGULAR,
            this.NSDRegularAdjustment = temp[0].nsD_REGULARAdjustment
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff Over Time Details');
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

  public GetOTDetails1(time: any) {
    this.DigiofficeService.GetPreApprovalOverTime()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          let temp: any = data.filter(x => x.id == time.id);
          this.noofhours = temp[0].noofhours;
          this.nightOT = temp[0].nightOT;
          this.restNormalOT = temp[0].restNormalOT;
          this.specialNormalOT = temp[0].specialNormalOT;
          this.ExccessNightOt = temp[0].exccessNightOt;
          this.ExccessNormalOt = temp[0].exccessNormalOt;
          this.RestNightOt = temp[0].restNightOt;
          this.RestNormalOT = temp[0].restNormalOT;
          this.ExccessRestNormalOt = temp[0].exccessRestNormalOt;
          this.RestExccessNightOt = temp[0].restExccessNightOt;
          this.LegalNightOt = temp[0].legalNightOt;
          this.LegalNormalOT = temp[0].legalNormalOT;
          this.LegalExccessNormalOt = temp[0].legalExccessNormalOt;
          this.LegalExccessNightOt = temp[0].legalExccessNightOt;
          this.SpecialNightOt = temp[0].specialNightOt;
          this.SpecialNormalOT = temp[0].specialNormalOT;
          this.SpecialExccessNormalOt = temp[0].specialExccessNormalOt;
          this.SpecialExccessNightOt = temp[0].specialExccessNightOt;
          this.SpecialRestNightOt = temp[0].specialRestNightOt;
          this.SpecialRestNormalOT = temp[0].specialRestNormalOT;
          this.SpecialRestExccessNormalOt = temp[0].specialRestExccessNormalOt;
          this.SpecialRestExccessNightOt = temp[0].specialRestExccessNightOt;
          this.LegalRestNightOt = temp[0].legalRestNightOt;
          this.LegalRestNormalOT = temp[0].legalRestNormalOT;
          this.LegalExccessRestNormalOt = temp[0].legalExccessRestNormalOt;
          this.LegalExccessRestNightOt = temp[0].legalExccessRestNightOt;
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff Over Time Details');
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

  public ManagerOTApprove(id: any) {
    debugger
    var entity = {
      'ID': id.id,
      'Status': 'Manager Approved',
    }
    this.DigiofficeService.UpdateOtFromManager(entity)
      .subscribe({
        next: data => {
          debugger
          Swal.fire("Approved Successfully");
          this.InsertNotificationforapproval(id.StaffID);
          this.ngOnInit();
        }, error: (err) => {
          Swal.fire('Issue in Updating OT From Manager');
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

  public InsertNotificationforapproval(supervisor: any) {
    debugger
    var entity = {
      'Date': new Date(),
      'Event': 'Over Time Request',
      'FromUser': 'Admin',
      'ToUser': localStorage.getItem('staffid'),
      'Message': 'Your Over Time Request has been Approved !!',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': supervisor,
      'NotificationTypeID': 3,
      'VendorID': 0
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {

          }
        }, error: (err) => {
          Swal.fire('Issue in Inserting Notification');
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

  public PreApproveOtApprove(id: any) {
    debugger
    var entity = {
      'ID': id.id,
      'Status': 'Manager Approved'

    }
    this.DigiofficeService.PreApproveOtRequest(entity)
      .subscribe({
        next: data => {
          debugger
          Swal.fire("Approved Successfully");
          this.InsertNotificationforapproval(id.StaffID);
          this.ngOnInit();
        }, error: (err) => {
          Swal.fire('Issue in Updating OT From Manager');
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
  public ManagerOTReject(id: any) {
    debugger
    var entity = {
      'ID': id.id,
      'Status': 'Manager Rejected',
    }
    this.DigiofficeService.UpdateOtFromManager(entity)
      .subscribe({
        next: data => {
          debugger
          Swal.fire("Rejected Successfully");
          this.InsertNotificationforReject(id.StaffID);
          this.ngOnInit();
        }, error: (err) => {
          Swal.fire('Issue in Updating OT From Manager');
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

  public InsertNotificationforReject(supervisor: any) {
    debugger
    var entity = {
      'Date': new Date(),
      'Event': 'Over Time Request',
      'FromUser': 'Admin',
      'ToUser': localStorage.getItem('staffid'),
      'Message': 'Your Over Time Request has been Approved !!',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': supervisor,
      'NotificationTypeID': 3,
      'VendorID': 0
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          location.reload();
          if (data != 0) {
          }
        }, error: (err) => {
          Swal.fire('Issue in Inserting Notification');
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

  public PreApproveOtReject(id: any) {
    debugger
    var entity = {
      'ID': id.id,
      'Status': 'Manager Rejected'
    }
    this.DigiofficeService.PreApproveOtRequest(entity)
      .subscribe({
        next: data => {
          debugger
          Swal.fire("Rejected Successfully");
          this.InsertNotificationforReject(id.StaffID);
          this.ngOnInit();
        }, error: (err) => {
          Swal.fire('Issue in Updating OT From Manager');
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

  preapprove() {
    this.preapprove1 = true
    this.applyot1 = false
  }

  applyot() {
    this.preapprove1 = false
    this.applyot1 = true
  }


  public GetPreApprovalOverTime() {
    debugger

    this.DigiofficeService.GetPreApprovalOverTime()
      .subscribe({
        next: data => {
          debugger
          this.preapprovaldetails = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
          this.preapprovaldetails1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Pending' || x.status == 'Manager Pending HR Pending'));
          this.preapprovaldetails2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Approved' || x.status == 'Manager Approved HR Pending'))
          this.preapprovaldetails3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Rejected');
          this.count = this.timedetails.length;

        }, error: (err) => {
          Swal.fire('Issue in Getting PreApproval OverTime');
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

  public ExporttoExcel() {
    debugger
    var ExportData = [];
    this.sequenceNumber1 = 0;
    this.undefined = 'NA'
    for (let i = 0; i < this.timedetails.length; i++) {
      debugger;
      this.sequenceNumber1 = i + 1;
      let singleData = {
        EmployeID: String,
        FirstAndLastName: String,
        Role: String,
        Department_name: String,
        Date: String,
        NormalOT: String,
        NightOT: String,
        HolidayOT: String,
        ExcessNightOT: String,
        ExccessNormalOt: String,
        RestNightOt: String,
        RestNormalOT: String,
        ExccessRestNormalOt: String,
        RestExccessNightOt: String,
        LegalNightOt: String,
        LegalNormalOT: String,
        LegalExccessNormalOt: String,
        LegalExccessNightOt: String,
        SpecialNightOt: String,
        SpecialNormalOT: String,
        SpecialExccessNormalOt: String,
        SpecialExccessNightOt: String,
        SpecialRestNightOt: String,
        SpecialRestExccessNightOt: String,
        LegalRestNightOt: String,
        LegalRestNormalOT: String,
        LegalExccessRestNormalOt: String,
        LegalExccessRestNightOt: String,
        DoubleHolidayNormalOt: String,
        DoubleHolidayNightOt: String,
        DoubleHolidayExcessNormalOt: String,
        DoubleHolidayExcessNightOt: String,
        DoubleHolidayRestNormalOt: String,
        DoubleHolidayRestNightOt: String,
        DoubleHolidayRestExcessNormalOt: String,
        DoubleHolidayRestExcessNightOt: String,
        LWOP: String,
        Undertime: String,
        Tardiness: String,
      }
      //singleData.SequenceNumber = this.sequenceNumber1;
      singleData.EmployeID = this.timedetails[i].employeID;
      singleData.FirstAndLastName = this.timedetails[i].firstAndLastName;
      singleData.Role = this.timedetails[i].role;
      singleData.Department_name = this.timedetails[i].department_name;
      singleData.Date = this.timedetails[i].date;
      singleData.NormalOT = this.timedetails[i].noofhours;
      singleData.NightOT = this.timedetails[i].nightOT;
      singleData.HolidayOT = this.timedetails[i].specialNormalOT;
      singleData.ExcessNightOT = this.timedetails[i].exccessNightOt;
      singleData.ExccessNormalOt = this.timedetails[i].exccessNormalOt;
      singleData.RestNightOt = this.timedetails[i].restNightOt;
      singleData.RestNormalOT = this.timedetails[i].restNormalOT;
      singleData.ExccessRestNormalOt = this.timedetails[i].exccessRestNormalOt;
      singleData.RestExccessNightOt = this.timedetails[i].restExccessNightOt;
      singleData.LegalNightOt = this.timedetails[i].legalNightOt;
      singleData.LegalNormalOT = this.timedetails[i].legalNormalOT;
      singleData.LegalExccessNormalOt = this.timedetails[i].legalExccessNormalOt;
      singleData.LegalExccessNightOt = this.timedetails[i].legalExccessNightOt;
      singleData.SpecialNightOt = this.timedetails[i].specialNightOt;
      singleData.SpecialNormalOT = this.timedetails[i].specialNormalOT;
      singleData.SpecialExccessNormalOt = this.timedetails[i].specialExccessNormalOt;
      singleData.SpecialExccessNightOt = this.timedetails[i].specialExccessNightOt;
      singleData.SpecialRestNightOt = this.timedetails[i].specialRestNightOt;
      singleData.SpecialRestExccessNightOt = this.timedetails[i].specialRestExccessNightOt;
      singleData.LegalRestNightOt = this.timedetails[i].legalRestNightOt;
      singleData.LegalRestNormalOT = this.timedetails[i].legalRestNormalOT;
      singleData.LegalExccessRestNormalOt = this.timedetails[i].legalExccessRestNormalOt;
      singleData.LegalExccessRestNightOt = this.timedetails[i].legalExccessRestNightOt;
      singleData.DoubleHolidayNormalOt = this.timedetails[i].doubleHolidayNormalOt;
      singleData.DoubleHolidayNightOt = this.timedetails[i].doubleHolidayNightOt;
      singleData.DoubleHolidayExcessNormalOt = this.timedetails[i].doubleHolidayExcessNormalOt;
      singleData.DoubleHolidayExcessNightOt = this.timedetails[i].doubleHolidayExcessNightOt;
      singleData.DoubleHolidayRestNormalOt = this.timedetails[i].doubleHolidayRestNormalOt;
      singleData.DoubleHolidayRestNightOt = this.timedetails[i].doubleHolidayRestNightOt;
      singleData.DoubleHolidayRestExcessNormalOt = this.timedetails[i].doubleHolidayRestExcessNormalOt;
      singleData.DoubleHolidayRestExcessNightOt = this.timedetails[i].doubleHolidayRestExcessNightOt;
      singleData.LWOP = this.timedetails[i].lopDays;
      singleData.Undertime = this.timedetails[i].undertime;
      singleData.Tardiness = this.timedetails[i].tardiness;
      ExportData.push(singleData);
      debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'EMPLOYEE ATTEDANCE REPORT',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'EMPLOYEE ATTEDANCE REPORT'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    debugger
    csvExporter.generateCsv(ExportData);
  }

}
