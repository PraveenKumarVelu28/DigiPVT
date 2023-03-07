import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grivelnecemaster',
  templateUrl: './grivelnecemaster.component.html',
  styleUrls: ['./grivelnecemaster.component.css']
})
export class GrivelnecemasterComponent implements OnInit {

  currentUrl: any;
  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  loader: any;
  Description: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.activatedroute.params.subscribe(params => {

      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Short = "",
          this.Description = ""

      }
      else {

        this.DigiofficeService.GetGrivenceMaster()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID)
              this.Short = this.leavelist[0].short
              this.Description = this.leavelist[0].description
            }, error: (err) => {
              // Swal.fire('Issue in Getting Grivence Master');
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
    )
  }



  public InsertGrivenceMaster() {
    debugger;
    this.showPopup = 0;
    this.loader = true
    if (this.Short == undefined || this.Short == "" || this.Description == undefined || this.Description == "") {
      /*  Swal.fire("Please Fill the Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      var entity = {
        Short: this.Short,
        Description: this.Description
      }
      this.DigiofficeService.InsertGrivenceMaster(entity)
        .subscribe({
          next: data => {
            debugger
            /*             Swal.fire("Saved Successfully"); */
            this.loader = true;
            this.showPopup = 1;
            this.messageId = 8;
            location.href = "#/HR/Grivelnecemasterdash";
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Grivence Master');
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


  public UpdateGrivenceMaster() {
    debugger;
    this.showPopup = 0;
    this.loader = true
    var entity = {
      ID: this.ID,
      Short: this.Short,
      Description: this.Description
    }
    this.DigiofficeService.UpdateGrivenceMaster(entity)
      .subscribe({
        next: data => {
          debugger
          this.loader = false
          /* Swal.fire("Updated Successfully"); */
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/HR/Grivelnecemasterdash";
        }, error: (err) => {
          // Swal.fire('Issue in Updating Grivence Master');
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

