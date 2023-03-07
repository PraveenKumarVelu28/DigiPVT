import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-staffsalarydash',
  templateUrl: './staffsalarydash.component.html',
  styleUrls: ['./staffsalarydash.component.css']
})

export class StaffsalarydashComponent implements OnInit {
  loader: any;

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  Department: any;
  level: any;
  RoleType: any;
  Departmentlist: any;
  RoleTypeList: any;
  currentUrl: any;
  term: any;
  leavelist: any
  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  BaseSal: any;
  deniminimis: any;
  deniminimis_amount: any;
  ID: any;
  showPopup: number = 0;
  messageId: number = 0
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.Department = 0;
    this.level = 0;
    this.RoleType = 0;
    this.GetDepartment();
    this.GetRoleType();
    this.GetMyDetails();
  }

  public GetRoleType() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.RoleTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
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
        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
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

  public GetMyDetails() {
    debugger
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          this.leavelist = data.filter(x => x.deniminimis != null)
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

  public getDepartment() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          if (this.Department == 0) {
            this.leavelist = data.filter(x => x.deniminimis != null)
          }
          else {
            this.leavelist = data.filter(x => x.deniminimis != null && x.department == this.Department)
          }
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

  geLevel() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          if (this.level == 0) {
            this.leavelist = data.filter(x => x.deniminimis != null)
          }
          else {
            this.leavelist = data.filter(x => x.deniminimis != null && x.levelid == this.level)
          }
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

  getRoleType() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          if (this.RoleType == 0) {
            debugger
            this.leavelist = data.filter(x => x.deniminimis != null)
          }
          else {
            this.leavelist = data.filter(x => x.deniminimis != null && x.type == this.RoleType)
          }
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

  public DeleteCountryType(ID: any) {
    debugger;
    this.showPopup = 0;
    this.DigiofficeService.DeleteDe_minimis_Master(ID)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire('Deleted SuccessFully') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 11;

          location.reload();
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Deminimis Master');
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
    this.showPopup = 0;
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
      /*    Swal.fire("Imported file format not supported."); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 68;
    }
  }

  public Upload_file() {
    debugger
    this.showPopup = 0;
    if (this.exceldata == undefined) {
      /* Swal.fire('Choose a File'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 209;
    } else {
      let apiarray = [];
      for (let i = 0; i < this.exceldata.length; i++) {
        var Enitity =
        {
          'ID': this.exceldata[i].employeeId,
          'BaseSal': this.exceldata[i].baseSal,
          'deniminimis': this.exceldata[i].deniminimis,
          'deniminimis_amount': this.exceldata[i].Amount
        };
        debugger
        this.DigiofficeService.InsertDe_minimis_Detailsforstaff(Enitity).subscribe(
          data => {
            debugger
            /*  Swal.fire('Saved Successfully'); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
          }, error => {
          })
      }
    }
  }

}