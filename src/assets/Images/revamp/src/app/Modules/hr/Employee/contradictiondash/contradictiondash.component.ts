import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contradictiondash',
  templateUrl: './contradictiondash.component.html',
  styleUrls: ['./contradictiondash.component.css']
})

export class ContradictiondashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  term: any;
  leavelist: any
  loader: any
  currentUrl: any;
  p: any = 1;
  count1: any = 10;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.GetLeaveType();
  }

  public GetLeaveType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetContradictionforstaff()
      .subscribe({
        next: data => {

          debugger
          this.leavelist = data
          this.loader = false
        }, error: (err) => {
          // Swal.fire('Issue in Getting Contradiction for staff');
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

  public delete(id: any) {
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
        this.DigiofficeService.DeleteContradictionforstaff(id)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Contradiction for staff');
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