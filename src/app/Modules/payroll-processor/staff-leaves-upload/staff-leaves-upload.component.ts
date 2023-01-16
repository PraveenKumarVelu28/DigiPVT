import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;

@Component({
  selector: 'app-staff-leaves-upload',
  templateUrl: './staff-leaves-upload.component.html',
  styleUrls: ['./staff-leaves-upload.component.css']
})
export class StaffLeavesUploadComponent implements OnInit {

  
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
  level:any;
  
  PayPeriodSettingList:any;

  loader:any;
  PayPeriodSettingListAdjustment:any;
  stafflist:any;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.preapprove1=true;
    this.applyot1=false;
    this.Department = "";
    this.RoleType = "";
 
  
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

 
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;

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



  staffleaves2:any;
  public GetMyOverTimeDetails() {
    debugger
    this.DigiofficeService.GetAllStaffLeaves(localStorage.getItem('staffid'), 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.staffleaves2 = data;
          
           
           
          this.count = this.staffleaves2.length
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
          )}
      })
  }

  public FilterAttendence() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.attendancelist = this.timedetails.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
    this.count = this.attendancelist.length;
  }

  show:any;

  public filterbydate() {

    debugger
  
    
   
    this.DigiofficeService.GetStaffOverTimeDetailsUpload().subscribe(data => {
      debugger
      this.timedetails = data.filter(x=>(x.filterdate == this.sdate ));
     
      if(this.timedetails.length==0){
        Swal.fire('No Records Found On This Date')
      }
      else{
        this.show=1;
      }   
             
    })
  
  
  }

  public filterdatepreapproval() {

    debugger
    if (this.sdate == undefined) {
      Swal.fire('Please Select Start Date');
      this.edate = ""
      this.loader=false;
    }
   
    else if (this.edate == "") {
      this.edate = "";
      this.sdate = "";
      this.ngOnInit();
    }

    else if (this.edate<this.sdate){
      Swal.fire('Enddate Must Be Greater Than Startdate')
      this.edate = ""
      this.sdate = ""
    }
    else{
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
        this.preapprovaldetails1 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Pending' || x.status == 'Manager Pending HR Pending') &&  (x.filterdate >= this.sdate && x.filterdate <= this.edate));
        this.preapprovaldetails2 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.status == 'Manager Approved' || x.status == 'Manager Approved HR Pending') && (x.filterdate >= this.sdate && x.filterdate <= this.edate))
        this.preapprovaldetails3 = data.filter(x => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Rejected');
        // this.count = this.preapprovaldetails.length;
        }
        else{
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
  i:any;
  startdate:any;
  Attachment:any;
  stafflistcopy123:any;
  EndDate:any;
  public attachmentsurl: any = [];
   public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];


      for (this.i = 0; this.i < this.exceldata.length; this.i++) {
       
            this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[this.i].EmployeeID)
             
             if(this.stafflistcopy123.length!=0){
              this.StaffID = this.stafflistcopy123[0].id
             }
             else{
              this.StaffID = 0
             }


        let temp = this.PayPeriodSettingList.filter((x: { payDate: any; })=>x.payDate==this.exceldata[this.i].Period);
        this.Date = new Date(Date.UTC(0, 0, this.exceldata[this.i].PayDate-1 )); 
        this.EndDate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Enddate-1 )); 
      



          
          var eb = {
            'Building': 56,
            'StaffName': this.StaffID,
            'SDateOfLeave': this.Date,
            'EDateOfLeave': this.EndDate ,
            'NoOfDays': this.exceldata[this.i].lopdays,
            'diffDays': 0,
            'LeaveReason': this.exceldata[this.i].LeaveReason,
            'LeaveType': this.exceldata[this.i].LeaveType,
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


  preapprove1:any;
  applyot1:any;
  preapprove(){
    this.preapprove1=true
    this.applyot1=false
  }

  applyot(){
    this.preapprove1=false
    this.applyot1=true
  }


  preapprovaldetails:any;
  preapprovaldetails1:any;
  preapprovaldetails2:any;
  preapprovaldetails3:any;
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

  undefined: any;
  sequenceNumber1: any
  SequenceNumber : any

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



      singleData.NormalOT  = this.timedetails[i].noofhours;
      singleData.NightOT = this.timedetails[i].nightOT;
      singleData.HolidayOT = this.timedetails[i].specialNormalOT;
      singleData.ExcessNightOT = this.timedetails[i].exccessNightOt;
      singleData.ExccessNormalOt = this.timedetails[i].exccessNormalOt;
      singleData.RestNightOt  = this.timedetails[i].restNightOt;
      singleData.RestNormalOT = this.timedetails[i].restNormalOT;
      singleData.ExccessRestNormalOt = this.timedetails[i].exccessRestNormalOt;
      singleData.RestExccessNightOt = this.timedetails[i].restExccessNightOt;
      singleData.LegalNightOt = this.timedetails[i].legalNightOt;
      singleData.LegalNormalOT  = this.timedetails[i].legalNormalOT;
      singleData.LegalExccessNormalOt = this.timedetails[i].legalExccessNormalOt;
      singleData.LegalExccessNightOt = this.timedetails[i].legalExccessNightOt;
      singleData.SpecialNightOt = this.timedetails[i].specialNightOt;
      singleData.SpecialNormalOT = this.timedetails[i].specialNormalOT;
      singleData.SpecialExccessNormalOt  = this.timedetails[i].specialExccessNormalOt;
      singleData.SpecialExccessNightOt = this.timedetails[i].specialExccessNightOt;
      singleData.SpecialRestNightOt = this.timedetails[i].specialRestNightOt;
      singleData.SpecialRestExccessNightOt = this.timedetails[i].specialRestExccessNightOt;
      singleData.LegalRestNightOt = this.timedetails[i].legalRestNightOt;
      singleData.LegalRestNormalOT  = this.timedetails[i].legalRestNormalOT;
      singleData.LegalExccessRestNormalOt = this.timedetails[i].legalExccessRestNormalOt;
      singleData.LegalExccessRestNightOt = this.timedetails[i].legalExccessRestNightOt;
      singleData.DoubleHolidayNormalOt = this.timedetails[i].doubleHolidayNormalOt;
      singleData.DoubleHolidayNightOt = this.timedetails[i].doubleHolidayNightOt;
      singleData.DoubleHolidayExcessNormalOt  = this.timedetails[i].doubleHolidayExcessNormalOt;
      singleData.DoubleHolidayExcessNightOt = this.timedetails[i].doubleHolidayExcessNightOt;
      singleData.DoubleHolidayRestNormalOt = this.timedetails[i].doubleHolidayRestNormalOt;
      singleData.DoubleHolidayRestNightOt = this.timedetails[i].doubleHolidayRestNightOt;
      singleData.DoubleHolidayRestExcessNormalOt = this.timedetails[i].doubleHolidayRestExcessNormalOt;
      singleData.DoubleHolidayRestExcessNightOt  = this.timedetails[i].doubleHolidayRestExcessNightOt;
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
