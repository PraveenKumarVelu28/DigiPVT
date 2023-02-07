import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-bonus-validation',
  templateUrl: './bonus-validation.component.html',
  styleUrls: ['./bonus-validation.component.css']
})
export class BonusValidationComponent implements OnInit {

  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }

  roleid:any;
  StaffID:any;
  level:any;
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  i:any;
  startdate:any;
  Attachment:any;
  stafflistcopy123:any;
  EndDate:any;
  stafflist:any;
  public attachmentsurl: any = [];
  PayPeriodSettingList:any;
  sdate:any;
  Date:any;
  edate:any;
  term:any;
  

  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roledid');
    this.StaffID = localStorage.getItem('staffid');
    this.level = localStorage.getItem('level');
  }

  filterbydate(){

  }
  FilterAttendence(){

  }

  ExporttoExcel(){

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


   public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];


      for (this.i = 0; this.i < this.exceldata.length; this.i++) {
       
            this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[this.i].EmployeID)
             
             if(this.stafflistcopy123.length!=0){
              this.StaffID = this.stafflistcopy123[0].id
             }
             else{
              this.StaffID = 0
             }
        let temp = this.PayPeriodSettingList.filter((x: { payDate: any; })=>x.payDate==this.exceldata[this.i].Period);
        this.Date = new Date(Date.UTC(0, 0, this.exceldata[this.i].Startdate-1 )); 
        this.EndDate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Enddate-1 )); 
          var eb = {
            'Building': 56,
            'StaffName': this.StaffID,
            'SDateOfLeave': this.Date,
            'EDateOfLeave': this.EndDate ,
            'NoOfDays': this.exceldata[this.i].noofdays,
            'diffDays': 0,
            'LeaveReason': this.exceldata[this.i].LeaveReason,
            'LeaveType': 10056,
            'HalfDayBit': 0,
            'HalfDayType': 0,
            'PaidBit': 1,
            'Supervisor': 10331,
            'CoveringStaff': 'NA',
            'AMPMText': 'AMPMText',
            'MedicalUrl1': this.attachmentsurl[0],
            'Status': 'Manager Approved'
          }
          this.DigiofficeService.InsertStaffLeavesWeb(eb).subscribe({
            next: data => {
            debugger
            this.StaffID=data;
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


}
