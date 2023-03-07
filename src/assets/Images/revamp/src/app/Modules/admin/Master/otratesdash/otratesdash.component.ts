import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-otratesdash',
  templateUrl: './otratesdash.component.html',
  styleUrls: ['./otratesdash.component.css']
})

export class OtratesdashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  leavelist: any
  term: any;
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
    this.GetLeaveType();
  }

  public GetLeaveType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetOTRates()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting OT Rates');
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

  public DeleteOTRates(ID: any) {
    debugger
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
        this.DigiofficeService.DeleteOTRates(ID)
          .subscribe({
            next: data => {
              debugger
              /*           Swal.fire('Deleted Successfully') */
              this.showPopup = 1;
              this.messageId = 11
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting OT Rates');
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