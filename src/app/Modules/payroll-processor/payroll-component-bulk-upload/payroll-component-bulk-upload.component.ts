import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as JSZip from 'jszip';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;
@Component({
  selector: 'app-payroll-component-bulk-upload',
  templateUrl: './payroll-component-bulk-upload.component.html',
  styleUrls: ['./payroll-component-bulk-upload.component.css']
})
export class PayrollComponentBulkUploadComponent implements OnInit {
  i: any;
  StaffID: any;
  PayrollComponentBulkUploadList: any;
  stafflist: any;
  stafflistCopy: any;
  loader: any;
  Department: any;
  term: any;
  seleconebtn: any;
  temp: any;
  IntID: any;
  selectallbtn: any;
  public ID: any = [];
  selecallbtn: any;
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  Code: any;
  componentmapping: any
  show: any;
  employeelist456: any;
  stafflistcopy123: any;
  PayDate: any;
  componentmapping123: any;
  componentmappingdata: any;
  constructor(public DigiPVTService: DigiPVTService, public router: Router) { }

  ngOnInit(): void {
    this.loader = true;
    this.Code = "";
    this.filterByCode();
    this.GetPayrollComponentBulkUpload();
    this.GetComponentMapping();
    this.DigiPVTService.GetAllStaffNew().
      subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.stafflistCopy = this.stafflist
          this.loader = false;
        }, error: (err) => {
          Swal.fire('Issue in Getting All Staff');
          this.loader = false;
          // Insert error in Db Here//
        }
      })
  }


  public GetComponentMapping() {
    this.DigiPVTService.GetComponentMapping().subscribe(data => {
      debugger
      this.componentmappingdata = data;

      console.log("ComponentMapping", this.componentmapping);
    });
  }

  public GetPayrollComponentBulkUpload() {
    debugger
    this.DigiPVTService.GetPayrollComponentBulkUpload().subscribe(data => {
      debugger
      this.PayrollComponentBulkUploadList = data;
      this.loader = false;
      console.log("componentmaster", this.PayrollComponentBulkUploadList);
    });

  }
  //   public Upload_file() {
  //   debugger
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
  //     for (this.i = 0; this.i < this.exceldata.length; this.i++) {
  //       var Enitity =
  //       {

  //         'PayrollComponentName': this.exceldata[this.i].PayrollComponentName,
  //         'PayCode': this.exceldata[this.i].PayrollComponentCode,
  //         'EmployeeID': this.exceldata[this.i].Emp_No,
  //         'Amount': this.exceldata[this.i].Amount,
  //       };
  //       //apiarray.push(Enitity)
  //       debugger
  //       this.AliprojectService.InsertMyDetails(Enitity).subscribe(
  //         data => {
  //          Swal.fire('Saved Successfully')
  //           }


  //         }
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

      for (let i = 0; i < this.exceldata.length; i++) {

        this.stafflistcopy123 = this.stafflist.filter((x: { employeID: any; }) => x.employeID == this.exceldata[i].EmployeeID
        )
        if (this.stafflistcopy123.length != 0) {
          this.StaffID = this.stafflistcopy123[0].id
        }
        else {
          this.StaffID = 0
        }
        this.componentmapping123 = this.componentmappingdata.filter((x: { code: any; }) => x.code == this.exceldata[i].ComponentCode)

        if (this.StaffID == 0) {
          Swal.fire('Employee ID not found in the system')
        }
        else if (this.exceldata[i].EmployeeID == undefined || this.exceldata[i].EmployeeID == "") {
          Swal.fire('Employee ID Cannot be Blank')
        }
        else if (this.exceldata[i].ComponentCode == undefined || this.exceldata[i].ComponentCode == "") {
          Swal.fire('Componenet Code Cannot be Blank')
        }
        else if (this.componentmapping123.length == 0) {
          Swal.fire('Incorrect Component Code')
        }
        else {
          this.PayDate = new Date(Date.UTC(0, 0, this.exceldata[i].PayDate - 1));
          var Enitity =
          {
            'PayrollComponentName': this.exceldata[i].ComponentCode,
            'PayCode': this.exceldata[i].ComponentCode,
            'EmployeeID': this.StaffID,
            'Amount': this.exceldata[i].Amount,
            'PayDate': this.PayDate
          };
          //apiarray.push(Enitity)
          debugger
          this.DigiPVTService.InsertPayrollComponentBulkUpload(Enitity).subscribe({
            next: data => {
              debugger
              Swal.fire('Saved Succesfully')
            }, error: (err) => {
              Swal.fire('Issue in Saving Payroll Components into the system ,Please Check the Input File');
              this.loader = false;
              // Insert error in Db Here//        
            }
          }
          )
        }
      }
    }
  }


  public getCheckbocdetails(evn: any, event: any) {
    debugger
    this.seleconebtn = true;
    let temp: any = evn;
    this.temp = Object.entries(temp);
    debugger
    if (event.target.checked == true) {
      debugger;
      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      this.ID.push(evn.id);
      this.seleconebtn = true;
      this.selectallbtn = false;
    }
    else {
      debugger;
      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = false;
      this.ID.pop(evn.id);
      this.seleconebtn = true;
      this.selectallbtn = false;
    }
  }


  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;

    if (this.PayrollComponentBulkUploadList.every((val: { checked: boolean; }) => val.checked == true)) {
      this.PayrollComponentBulkUploadList.forEach((val: { checked: boolean; }) => { val.checked = false });
      this.selectallbtn = false;
      this.seleconebtn = false;
    }
    else {
      debugger
      this.PayrollComponentBulkUploadList.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.selectallbtn = true;
      this.seleconebtn = false;
    }
  }

  public filteremployee() {
    this.loader = true;
    this.DigiPVTService.GetPayrollComponentBulkUpload().subscribe(data => {
      debugger
      this.PayrollComponentBulkUploadList = data.filter(x => x.payDate == this.PayDate);
      this.loader = false;
      if (this.PayrollComponentBulkUploadList.length == 0) {
        Swal.fire('No Records Found On This Date')
        this.loader = false;
      }
      else {
        this.show = 1
        this.loader = false;
      }
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


  public delete() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true && this.seleconebtn == true) {

        for (let i = 0; i < this.ID.length; i++) {
          this.DigiPVTService.DeletePayrollComponentBulkUpload(this.ID[i])
            .subscribe({
              next: data => {
                debugger;
                Swal.fire('Deleted Successfully')
                location.reload();
              }
            })
        }
      }
      else if (result.value == true && this.selectallbtn == true) {
        for (let i = 0; i < this.PayrollComponentBulkUploadList.length; i++) {
          this.DigiPVTService.DeletePayrollComponentBulkUpload(this.PayrollComponentBulkUploadList[i].id)
            .subscribe({
              next: data => {
                debugger;
                Swal.fire('Deleted Successfully')
                location.reload();
              }
            })
        }
      }
    })
  }

  public filterByCode() {
    this.DigiPVTService.GetComponentMapping().subscribe(data => {
      debugger
      this.componentmapping = data;
      console.log("ComponentMapping", this.componentmapping);
    });
  }

  fileName = 'Payroll Component Bulk Uploads.xlsx';
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

  public filterByPayCode() {
    this.DigiPVTService.GetPayrollComponentBulkUpload().subscribe(data => {
      debugger
      this.PayrollComponentBulkUploadList = data.filter(x => x.payCode == this.Code);
      console.log("ComponentMapping", this.componentmapping);
    });
  }
}
