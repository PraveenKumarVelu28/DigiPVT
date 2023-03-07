import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-work-station-type-dash',
  templateUrl: './work-station-type-dash.component.html',
  styleUrls: ['./work-station-type-dash.component.css']
})

export class WorkStationTypeDashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  term: any;
  workstationlist: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.Get_WorkStationType_Master();
  }

  public Get_WorkStationType_Master() {
    debugger
    this.loader = true;
    this.DigiofficeService.Get_WorkStationType_Master()
      .subscribe({
        next: data => {
          debugger
          this.workstationlist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting WorkStation Type Master');
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

  public DeleteWorkStationType_Master(ID: any) {
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
        this.DigiofficeService.DeleteWorkStationType_Master(ID)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully') */
              location.reload();
              this.showPopup = 1;
              this.messageId = 11
            }, error: (err) => {
              // Swal.fire('Issue in Deleting WorkStation Type Master');
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