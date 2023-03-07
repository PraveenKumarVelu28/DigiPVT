import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-level-type-dash',
  templateUrl: './level-type-dash.component.html',
  styleUrls: ['./level-type-dash.component.css']
})
export class LevelTypeDashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }

  loader: any;
  leveltypeList: any;
  currentUrl: any;
  p: any = 1;
  term: any;
  count1: any = 10;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader = true;
    this.GetLevelType();
  }

  shiftmasterlist: any
  public GetLevelType() {
    debugger
    this.DigiofficeService.GetLevelType()
      .subscribe({
        next: data => {
          debugger
          this.leveltypeList = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Hoilday');
          this.loader = false;
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
    debugger;
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
        this.DigiofficeService.DeleteLevelType(ID)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully') */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit()
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Building');
              this.loader = false;
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