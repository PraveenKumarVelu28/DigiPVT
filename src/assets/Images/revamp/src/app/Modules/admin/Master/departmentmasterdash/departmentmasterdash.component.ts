import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-departmentmasterdash',
  templateUrl: './departmentmasterdash.component.html',
  styleUrls: ['./departmentmasterdash.component.css']
})

export class DepartmentmasterdashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  term: any;
  leavelist: any;
  currentUrl: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader = true;
    this.GetDepartmentMaster();
  }

  public GetDepartmentMaster() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetDepartmentMaster()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Department Master');
          // this.loader=false;
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
    debugger
    this.showPopup=0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteDepartmentMaster(ID)
          .subscribe({
            next: data => {
              debugger
             /*  Swal.fire('Deleted Successfully') */
             this.showPopup=1;
             this.messageId=11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Department Master');
              // this.loader=false;
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

}