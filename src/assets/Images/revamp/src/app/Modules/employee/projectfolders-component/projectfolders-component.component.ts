import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectfolders-component',
  templateUrl: './projectfolders-component.component.html',
  styleUrls: ['./projectfolders-component.component.css']
})

export class ProjectfoldersComponentComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  roledid: any;
  employeedepartment: any;
  ProjectFoldersLists: any;
  BuildingSearch: any;
  currentUrl: any;
  loader:any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.roledid = localStorage.getItem('roledid')
    this.employeedepartment = localStorage.getItem('Department');
    this.getfolders();
  }
  noProjectFolders:any;
  public getfolders() {
    debugger
    if (this.roledid == 9) {
      this.DigiofficeService.GetProjectFolders()
        .subscribe({
          next: data => {
            debugger
            this.ProjectFoldersLists = data;
            if (this.ProjectFoldersLists.length == 0) {
              this.noProjectFolders = true;
            } else {
              this.noProjectFolders = false;
            }
            this.loader=false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Project Folders');
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
    else {
      this.DigiofficeService.GetProjectFolders()
        .subscribe({
          next: data => {
            debugger
            this.ProjectFoldersLists = data.filter(x => x.folderName == 'HR Department' || x.department_name == this.employeedepartment);
            this.loader=false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Project Folders');
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

  public DeleteBuilding(ID: any) {
    this.showPopup=0;
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.Delete_ProjectFolders(ID)
          .subscribe({
            next: data => {
              debugger
             /*  Swal.fire('Deleted Successfully') */
             this.loader=false;
             this.showPopup=1;
             this.messageId=11;
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Project Folders');
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

  public Views(evn: { id: any; }) {
    debugger;
    this.router.navigate(['/Employee/Policydashbaord', evn.id]);
    this.loader=false;
  }

}