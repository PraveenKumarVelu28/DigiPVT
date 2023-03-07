import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-transportation-type-dash',
  templateUrl: './transportation-type-dash.component.html',
  styleUrls: ['./transportation-type-dash.component.css']
})
export class TransportationTypeDashComponent implements OnInit {
  currentUrl: any;
  loader: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  constructor(public DigiofficeService: DigiofficecorehrService) { }
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader = true;
    this.GetTransportRequestType();
  }


  travellist: any
  term: any;
  public GetTransportRequestType() {
    debugger
    this.DigiofficeService.GetTransportRequestType()
      .subscribe({
        next: data => {
          debugger
          this.travellist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Transport Request Type');
          // this.loader = false;
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

  DeleteTransportRequestType(id: any) {
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete the selected record?",
      // icon: 'success',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value == true) {
        debugger
        this.DigiofficeService.DeleteTransportRequestType(id)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully...!') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Delete Transport Request Type');
              // this.loader = false;
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
    });
  }




}
