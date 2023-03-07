import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deniminisadd',
  templateUrl: './deniminisadd.component.html',
  styleUrls: ['./deniminisadd.component.css']
})

export class DeniminisaddComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Item: any;
  Amount: any;
  loader: any;
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetDe_minimis_Master();
  }

  public GetDe_minimis_Master() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetDe_minimis_Master()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.Item = this.leavelist[0].item;
              this.Amount = this.leavelist[0].amount;
            }, error: (err) => {
              // Swal.fire('Issue in Getting De Minimis Master');
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
    )
  }

  public Cancel() {
    debugger
    location.href = "#/Admin/Deniminisdash";
    this.loader = false;
  }

  public InsertCountryType() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.Item == undefined || this.Amount == undefined) {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13
    } else {
      debugger;
      var entity = {
        Item: this.Item,
        Amount: this.Amount
      }
      this.DigiofficeService.InsertDe_minimis_Master(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*  Swal.fire("Saved Successfully"); */
              location.href = "#/Admin/Deniminisdash";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting De Minimis Master');
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

  public UpdateCountryType() {
    debugger;
    this.showPopup=0;
    this.loader = true;
    var entity = {
      ID: this.ID,
      Item: this.Item,
      Amount: this.Amount
    }
    this.DigiofficeService.UpdateDe_minimis_Master(entity)
      .subscribe({
        next: data => {
          debugger
         /*  Swal.fire("Updated Successfully"); */
          location.href = "#/Admin/Deniminisdash";
          this.loader = false;
          this.showPopup=1;
          this.messageId=10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating De Minimis Master');
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