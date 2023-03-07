import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rolebenefitsmappingdash',
  templateUrl: './rolebenefitsmappingdash.component.html',
  styleUrls: ['./rolebenefitsmappingdash.component.css']
})
export class RolebenefitsmappingdashComponent implements OnInit {
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;
  loader: any;
  constructor(public DigiofficeService: DigiofficecorehrService) { }
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.GetMyDetails();
  }
  term: any;
  leavelist: any
  public GetMyDetails() {
    debugger
    this.DigiofficeService.GetBenefitsRoleMapping()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Hoilday');
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
    this.showPopup = 0;
    debugger
    this.DigiofficeService.DeleteDe_minimis_Master(ID)
      .subscribe({
        next: data => {
          debugger
          /*    Swal.fire('Deleted SuccessFully') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 11
          location.reload();
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Deminimis Master');
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

