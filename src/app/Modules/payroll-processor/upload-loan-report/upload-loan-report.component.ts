import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;

@Component({
  selector: 'app-upload-loan-report',
  templateUrl: './upload-loan-report.component.html',
  styleUrls: ['./upload-loan-report.component.css']
})
export class UploadLoanReportComponent implements OnInit {

 
  
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
  public attachmentsurl: any = [];

  ngOnInit(): void {
    debugger
    this.GetUploadedLoanReport();
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

  public GetUploadedLoanReport(){
    debugger
    this.DigiPVTService.GetUploadedLoanReport().subscribe(data => {
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
        this.DigiPVTService.InsertUploadLoanAmount(obj)
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
        this.DigiPVTService.DeleteBasicpayAdjustments(ID)
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
