import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employeebenfitsmasterdash',
  templateUrl: './employeebenfitsmasterdash.component.html',
  styleUrls: ['./employeebenfitsmasterdash.component.css']
})
export class EmployeebenfitsmasterdashComponent implements OnInit {

  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.GetCountryType();
  }
  term: any;
  leavelist: any
  loader: any
  public GetCountryType() {
    debugger
    this.loader = true
    this.DigiofficeService.GetEmployeeBenfits()

      .subscribe({
        next: data => {
          debugger
          debugger
          this.leavelist = data
          this.loader = false
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Benfits');
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



  public DeleteEmployeebenefits(ID: any) {
    debugger
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteEmployeeBenfits(ID.id)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Hoilday');
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

