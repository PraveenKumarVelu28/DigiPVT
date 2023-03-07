import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deniminisdash',
  templateUrl: './deniminisdash.component.html',
  styleUrls: ['./deniminisdash.component.css']
})

export class DeniminisdashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  loader:any;
  term: any;
  leavelist: any
  currentUrl: any;
  login:any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.loader=true;
    this.GetCountryType();
  }

  public GetCountryType() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetDe_minimis_Master()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting De Minimis Master');
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
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteDe_minimis_Master(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting De Minimis Master');
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