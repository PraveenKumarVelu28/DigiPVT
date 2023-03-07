import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-floordash',
  templateUrl: './floordash.component.html',
  styleUrls: ['./floordash.component.css']
})

export class FloordashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  term: any;
  leavelist: any;
  currentUrl: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetBuildinglist();
  }

  public GetBuildinglist() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetFloorType(0)
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Floor Type');
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

  public DeleteBuilding(ID: any) {
    debugger
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteFloorType(ID)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully') */
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit()
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Building');
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