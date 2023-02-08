import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;
@Component({
  selector: 'app-upload-pay-period-allowance',
  templateUrl: './upload-pay-period-allowance.component.html',
  styleUrls: ['./upload-pay-period-allowance.component.css']
})
export class UploadPayPeriodAllowanceComponent implements OnInit {
  constructor(public DigiPVTService: DigiPVTService, public router: Router) { }
  componentmaster: any;
  id : any;
  term:any;
  p1: any = 1;
  count2: any = 10;
  stafflist:any;
  PayPeriodSettingList:any;
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  fileName = 'Attendance Report.xlsx';
  i:any;
  startdate:any;
  Attachment:any;
  stafflistcopy123:any;
  EndDate:any;
  StaffID:any;
  Paydate:any;
  public attachmentsurl: any = [];

  ngOnInit(): void {
    debugger
    this.GetUploadAllowancevalues();
    this.DigiPVTService.GetAllStaffNew().
    subscribe({
      next: data => {
        debugger
        this.stafflist = data;
      }
    })

    this.DigiPVTService.GetPayPeriodSetting().subscribe(data => {
        debugger
        this.PayPeriodSettingList = data;
      });
  }

  public GetUploadAllowancevalues(){
    debugger
    this.DigiPVTService.GetUploadAllowancevalues().subscribe(data => {
      debugger
      this.componentmaster = data;
      console.log("componentmaster", this.componentmaster);
    });
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

  exportexcel(): void {
    debugger
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  
  public delete(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiPVTService.DeleteComponentMaster(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              location.reload();
              
            }
          })
      }
    })
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
          var options = { hour12: false };
            //  this.Paydate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Paydate-1 )); 
            this.Paydate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Paydate - 1));
            // this.Paydate=this.Paydate.toLocaleString('en-US', options)          
          ; 
          var eb = { 
            'staffid': this.StaffID,
            'Allowancename' : this.exceldata[this.i].AllowanceName,
             'Totalallowanceamount' : this.exceldata[this.i].NoofUnits,
            'paydate' : this.Paydate
          }
          this.DigiPVTService.InsertUploadAllowancevalues(eb).subscribe({
            next: data => {
            debugger
            this.StaffID=data;
              Swal.fire('Saved Successfully')
              this.ngOnInit();
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
