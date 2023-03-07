import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lookandfeeldash',
  templateUrl: './lookandfeeldash.component.html',
  styleUrls: ['./lookandfeeldash.component.css']
})

export class LookandfeeldashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  term: any;
  officelogo: any
  Configurationlist: any
  currentUrl: any;
  file: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.GetCompanyConfiguration();
  }

  public GetCompanyConfiguration() {
    debugger
    this.DigiofficeService.GetCompanyConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.Configurationlist = data;
          this.officelogo = this.Configurationlist[0].companyLogo;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Company Configuration');
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

  public DeleteCompanyConfiguration(ID: any) {
    debugger;
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
        this.DigiofficeService.DeleteCompanyConfiguration(ID)
          .subscribe({
            next: data => {
              /*  Swal.fire('Deleted Successfully') */
              this.showPopup = 1;
              this.messageId = 11;
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting CompanyConfiguration');
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

  Default(id: any) {
    debugger
    /*   Swal.fire('Default Configuration set Successfully') */
    this.showPopup = 1;
    this.messageId = 63;
  }

  public getmedicalUrl(file: any) {
    debugger
    this.file = file;
  }

}