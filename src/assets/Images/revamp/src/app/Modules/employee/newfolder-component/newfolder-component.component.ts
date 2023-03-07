import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newfolder-component',
  templateUrl: './newfolder-component.component.html',
  styleUrls: ['./newfolder-component.component.css']
})

export class NewfolderComponentComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  FolderName: any;
  Departmentlist: any;
  pagename: any;
  Department: any
  currentUrl: any;
  loader: any;
  roledid: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.Department = "0";
    this.pagename = localStorage.getItem('Pagename');
    this.roledid = localStorage.getItem('roledid');
    this.GetDepartment();
  }

  public GetDepartment() {
    this.DigiofficeService.GetDepartmentMaster()
      .subscribe({
        next: data => {
          debugger
          this.Departmentlist = data;
          this.loader = false;
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

  public Save() {
    debugger
    this.showPopup = 0;
    if (this.FolderName == undefined || this.FolderName == "" || this.Department == undefined || this.Department == ""
      || this.Department == 0) {
      /*  Swal.fire('Please fill Mandatory Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      var entity = {
        FolderName: this.FolderName,
        Createdby: 'HR',
        // Createdby:  this.roledid,
        Department: this.Department
      }
      this.DigiofficeService.InsertProjectFolders(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*        Swal.fire("Created Successfully"); */
              if (this.pagename == 'ORIENTATION DOCS') {
                location.href = "#/Orientaiondocumnets";
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 40;
              }
              else {
                location.href = "#/Employee/Company-policy";
                this.loader = false;
              }
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Project Folders');
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

  public Cancel() {
    debugger
    location.href = "#/Employee/Company-policy";
    this.loader = false;
  }

}