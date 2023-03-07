import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-retirement-list',
  templateUrl: './retirement-list.component.html',
  styleUrls: ['./retirement-list.component.css']
})

export class RetirementListComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  stafflist: any;
  term: any;
  login: any;
  RetiredAge: any;
  date: any;
  selectone: any;
  selecallbtn: any;
  file: any;
  arrayBuffer: any;
  exceldata: any;
  currentUrl: any;
  loader: any;
  fileName = 'Retirement List.xlsx';
  showPopup: number = 0;
  messageId: number = 0;


  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.RetiredAge = ""
    this.login = sessionStorage.getItem('roledid');
    this.GetRetirementList();
  }

  public GetRetirementList() {
    this.DigiofficeService.GetRetirementList()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Retirement');
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

  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    if (this.date == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetEmployeeTransition()
        .subscribe({
          next: data => {
            this.stafflist = data.filter(x => x.trasnferdate == this.date);
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Employee Transition');
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

  public Getemployee() {
    this.DigiofficeService.GetRetirementList()
      .subscribe({
        next: data => {
          this.stafflist = data.filter(x => x.retirementAge == this.RetiredAge);
        }, error: (err) => {
          // Swal.fire('Issue in Getting Retirement List');
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

  public Delete(ID: any) {
    debugger;
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteEmployeeTransition(ID)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Deleted Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Employee Transition');
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

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('lvs');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    this.selectone = false;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }

  incomingfile(event: any) {
    debugger;
    this.showPopup = 0;
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
      /* Swal.fire("Imported file format not supported."); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 68;
    }
  }

  public Upload_file() {
    debugger
    /* Swal.fire('Promotion Added successfully'); */
    this.loader = false;
    this.showPopup = 1;
    this.messageId = 69;
  }

}