import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transportation-type-form',
  templateUrl: './transportation-type-form.component.html',
  styleUrls: ['./transportation-type-form.component.css']
})
export class TransportationTypeFormComponent implements OnInit {

  currentUrl: any;
  loader: any;

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Name = "",
          this.Description = ""

      }
      else {

        this.DigiofficeService.GetTransportRequestType()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Name = this.leavelist[0].name
              this.Description = this.leavelist[0].description
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
    }
    )
  }


  Name: any;

  public InsertTransportRequestType() {
    debugger;
    this.showPopup = 0;
    if (this.Name == undefined || this.Name == "" || this.Description == undefined || this.Description == "") {
      /*    Swal.fire("Please Fill All Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {

      var entity = {
        Name: this.Name,
        Description: this.Description
      }
      this.DigiofficeService.InsertTransportRequestType(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*  Swal.fire("Saved Successfully"); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
              location.href = "#/HR/TransportationTypeDash";

            }
            this.ngOnInit();
          }, error: (err) => {
            // Swal.fire('Issue in Insert Transport Request Type');
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
  public cancel() {
    location.href = "#/HR/TransportationTypeDash";
  }


  public UpdateTransportRequestType() {
    debugger;

    this.showPopup = 0;
    var entity = {

      ID: this.ID,
      Name: this.Name,
      Description: this.Description

    }
    this.DigiofficeService.UpdateTransportRequestType(entity)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire("Updated Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/HR/TransportationTypeDash";
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Deleting Hoilday');
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
