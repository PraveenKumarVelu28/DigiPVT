import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;


@Component({
  selector: 'app-upload-loaand-suspended-staff',
  templateUrl: './upload-loaand-suspended-staff.component.html',
  styleUrls: ['./upload-loaand-suspended-staff.component.css']
})
export class UploadLOAandSuspendedStaffComponent implements OnInit {

 
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
  fileName = 'Payroll Summery Reports.xlsx';
  i:any;
  startdate:any;
  Attachment:any;
  stafflistcopy123:any;
  EndDate:any;
  StaffID:any;
  Paydate:any;
  companyid:any;
  public attachmentsurl: any = [];

  ngOnInit(): void {
    debugger
    this.companyid = sessionStorage.getItem('companyid');
    this.GetUploadLoAandSuspendedStaff();
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

  public GetUploadLoAandSuspendedStaff(){
    debugger
    if(this.companyid==1007){
      this.DigiPVTService.GetUploadedMasterFileForAffinity().subscribe(data => {
        debugger
        this.componentmaster = data;
        console.log("componentmaster", this.componentmaster);
      });
    }
  else{
    this.DigiPVTService.GetUploadedMasterFile().subscribe(data => {
      debugger
      this.componentmaster = data;
      console.log("componentmaster", this.componentmaster);
    });
  }
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


  //  public Upload_file() {
  //   debugger
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
  //     for (this.i = 0; this.i < this.exceldata.length; this.i++) {
  //           this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[this.i].EmployeID)          
  //            if(this.stafflistcopy123.length!=0){
  //             this.StaffID = this.stafflistcopy123[0].id
  //            }
  //            else{
  //             this.StaffID = 0
  //            }           
  //         var options = { hour12: false };
  //           //  this.Paydate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Paydate-1 )); 
  //           this.Paydate = new Date(Date.UTC(0, 0, this.exceldata[this.i].Paydate - 1));
  //           // this.Paydate=this.Paydate.toLocaleString('en-US', options)          
  //         ; 
  //         var eb = { 
  //           'Staffid': this.StaffID,
  //           'ElementType' : this.exceldata[this.i].ClothingAllowance,
  //           'ElementName' : this.exceldata[this.i].ClothingAllowanceAdjustment,
  //           'ElementDescription' : this.exceldata[this.i].OldClothingAllowance,
  //           'PreviousPayrollValue' : this.exceldata[this.i].PreviousPayrollValue,
  //           'CurrentPayrollValue' : this.exceldata[this.i].CurrentPayrollValue,
  //           'Paydate' : new Date(Date.UTC(0, 0, this.exceldata[this.i].Paydate - 1)),

            
  //         }
  //         this.DigiPVTService.InsertUploadPayrollSummaryValidation(eb).subscribe({
  //           next: data => {
  //           debugger
  //           this.StaffID=data;
  //             Swal.fire('Saved Successfully')
  //             this.ngOnInit();
  //           // // this.SavePositionDetails();
  //           // var eb = {
  //           //   'EmergencyContactName': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactName,
  //           //   'EmergencyContactRelationship': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactRelationship,
  //           //   'EmergencyContactMobileNumber': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactMobileNumber,
  //           //   'StaffID':  this.StaffID
  //           // }
  //           // this.i++;
  //           // this.AliprojectService.InsertMyAddressDetails(eb).subscribe(
              
  //           //   data => {
  //           //     debugger
  //           //     Swal.fire('Staffs Added Successfully');
  //           //     // this.router.navigate(['/EmployeeDashboard']);
      
  //           //   },
  //           // )
 
  //         }, error: (err) => {
  //           Swal.fire('Issue in Inserting Attendance Units');
  //           // Insert error in Db Here//         
  //         }
  //       }
  //       )
  //     }
  //   }
  // }


  public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];

      // for (let i = 0; i < this.exceldata.length; i++) {
      //   this.RoleTypeList2=this.RoleTypeList.filter((x: { short: any; })=>x.short==this.exceldata[i].PositionTitle,


      //        )
    
      //        if(this.RoleTypeList2.length!=0){
      //         this.roletypeid = this.RoleTypeList2[0].id
      //        }
      //        else{
      //         this.roletypeid = 0
      //        }
    
      //         var eb1 = {


          
      //     // 'Short': this.exceldata[i].PositionTitle,
      //     // 'Description': this.exceldata[i].PositionTitle,

      //     'ID':this.exceldata[i].CurrentVacationLeaveBalance,
      //     'Short': this.exceldata[i].EmployeeNo,
      //     'Description': this.exceldata[i].EmployeeNo



      //   }
        // this.AliprojectService.InsertRoleType(eb1)


  var obj={
    attachmenturlforexport:this.exceldata
  }
  this.DigiPVTService.InsertUploadLoAandSuspendedStaff(obj)
    .subscribe({
      next: data => {
        debugger
        Swal.fire('Updated Successfully')
        this.ngOnInit();
      }
    })
       
      }
    // }
  }
  delete(ID : any){
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
        this.DigiPVTService.DeleteUploadedMasterFile(ID)
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


}
