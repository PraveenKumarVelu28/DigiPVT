import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})

export class CompanydashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  companylist: any
  term: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetCompanyDetails();
  }

  public GetCompanyDetails() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetCompanyDetails()
      .subscribe({
        next: data => {
          debugger
          this.companylist = data.filter(x => x.enable_Disable != 1);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Company Details');
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

  public DisableCompany(id: any) {
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete the selected record?",
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value == true) {
        var eb = {
          'ID': id,
          'Enable_Disable': 1
        }
        this.DigiofficeService.DisableCompany(eb)
          .subscribe({
            next: data => {
              debugger
              /* Swal.fire('Deleted Successfully.'); */

              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
              this.GetCompanyDetails();
            }, error: (err) => {
              // Swal.fire('Issue in Disable Company');
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

  public EnableCompany(id: any) {
    this.loader = true;
    var eb = {
      'ID': id,
      'Enable_Disable': 0
    }
    this.DigiofficeService.DisableCompany(eb)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire('Updated Successfully.'); */
          this.GetCompanyDetails();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Disable Company');
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

}