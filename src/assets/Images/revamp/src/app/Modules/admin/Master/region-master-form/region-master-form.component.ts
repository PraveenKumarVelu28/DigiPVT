import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-region-master-form',
  templateUrl: './region-master-form.component.html',
  styleUrls: ['./region-master-form.component.css']
})
export class RegionMasterFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  regionlist: any;
  Short: any;
  Description: any;
  CountryID: any;
  currentUrl: any;
  regionlist1: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.CountryID = "Select"
    this.GetCountryType();
    this.GetRegionType();
  }

  public GetRegionType() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetRegionMaster()
          .subscribe({
            next: data => {
              debugger
              this.regionlist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.CountryID = this.regionlist[0].countryID
              this.Short = this.regionlist[0].short
              this.Description = this.regionlist[0].description
            }, error: (err) => {
              // Swal.fire('Issue in Getting Region Type');
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

  public InsertRegionMaster() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    if (this.CountryID == undefined || this.CountryID == 0
      || this.Description == undefined || this.Description == "" || this.Description == null
      || this.Short == undefined || this.Short == "" || this.Short == null) {
      /*  Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        'CountryID': this.CountryID,
        'Short': this.Short,
        'Description': this.Description
      }
      this.DigiofficeService.InsertRegionMaster(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*  Swal.fire("Saved Successfully"); */
              location.href = "#/Admin/RegionMasterDash";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Region Type');
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

  public Cancel() {
    debugger
    location.href = "#/Admin/RegionMasterDash";
    this.loader = false;
  }

  public UpdateRegionType() {
    debugger;
    this.loader = true;
    if (this.CountryID == undefined || this.CountryID == 0
      || this.Description == undefined || this.Description == ""
      || this.Short == undefined || this.Short == "") {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        ID: this.ID,
        Short: this.Short,
        Description: this.Description
      }
      this.DigiofficeService.UpdateRegionType(entity)
        .subscribe({
          next: data => {
            debugger
            /*      Swal.fire("Updated Successfully"); */
            location.href = "#/Admin/RegionMasterDash";
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating State Type');
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

}