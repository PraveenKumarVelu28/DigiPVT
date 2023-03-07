import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-region-master-dash',
  templateUrl: './region-master-dash.component.html',
  styleUrls: ['./region-master-dash.component.css']
})
export class RegionMasterDashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  CountryID: any;
  term: any;
  regionlist: any
  regionlist1: any
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
    this.GetRegionType();
    this.GetCountryType();
    this.CountryID = "Select"
  }

  public GetRegionType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetRegionMaster()
      .subscribe({
        next: data => {
          debugger
          this.regionlist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Region Type');
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

  public GetCountryType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetCountryType()
      .subscribe({
        next: data => {
          debugger
          this.regionlist1 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Country Type');
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

  public DeleteRegionType(ID: any) {
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
        this.DigiofficeService.DeleteRegionType(ID)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully') */
              this.showPopup = 1;
              this.messageId = 11
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Region Type');
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

  public GetFilteredRegionByCountry() {
    this.loader = true;
    this.DigiofficeService.GetStateType()
      .subscribe({
        next: data => {
          debugger
          this.regionlist = data.filter(x => x.countryID == this.CountryID);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting State Type');
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

}