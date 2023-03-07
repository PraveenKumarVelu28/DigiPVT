import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shift-master-dash',
  templateUrl: './shift-master-dash.component.html',
  styleUrls: ['./shift-master-dash.component.css']
})

export class ShiftMasterDashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  term: any;
  shiftmasterlist: any
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
    this.GetShiftMaster();
  }

  public GetShiftMaster() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetShiftMaster()
      .subscribe({
        next: data => {
          debugger
          this.shiftmasterlist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Shift Master');
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

  public delete(ID: any) {
    debugger
    this.showPopup=0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteShiftMaster(ID)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully') */
              this.showPopup=1;
              this.messageId=11;
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Shift Master');
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
    })
  }

}