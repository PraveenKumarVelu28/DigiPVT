import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subsidaryform',
  templateUrl: './subsidaryform.component.html',
  styleUrls: ['./subsidaryform.component.css']
})

export class SubsidaryformComponent implements OnInit {
  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Name: any;
  Description: any;
  currentUrl: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetSubsidaryMaster();
  }

  public GetSubsidaryMaster() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetSubsidaryMaster()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.Name = this.leavelist[0].name
              this.Description = this.leavelist[0].description
            }, error: (err) => {
              // Swal.fire('Issue in Getting Subsidary Master');
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

  public Cancel() {
    debugger
    location.href = "#/Admin/Subsidarydashboard";
    this.loader = false;
  }

  public InsertSubsidaryMaster() {
    this.showPopup = 0;
    debugger;
    this.loader = true;
    if (this.Name == undefined || this.Name == "" || this.Description == undefined || this.Description == "") {
      /*  Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        'Name': this.Name,
        'Description': this.Description
      }
      this.DigiofficeService.InsertSubsidaryMaster(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*    Swal.fire("Saved Successfully"); */
              location.href = "#/Admin/Subsidarydashboard";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Subsidary Master');
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

  public UpdateSubsidaryMaster() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      'ID': this.ID,
      'Name': this.Name,
      'Description': this.Description
    }
    this.DigiofficeService.UpdateSubsidaryMaster(entity)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("Updated Successfully"); */
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/Admin/Subsidarydashboard";
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Subsidiary Master');
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