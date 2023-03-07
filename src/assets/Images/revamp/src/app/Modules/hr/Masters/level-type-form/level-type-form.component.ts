import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-level-type-form',
  templateUrl: './level-type-form.component.html',
  styleUrls: ['./level-type-form.component.css']
})
export class LevelTypeFormComponent implements OnInit {
  loader: any;
  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  shiftmasterlist: any;
  Short: any;
  Description: any;
  leveltypeList: any
  Grace: any
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    // this.GetLevelType();
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {

      }
      else {

        this.DigiofficeService.GetLevelType()
          .subscribe({
            next: data => {
              debugger
              this.leveltypeList = data.filter(x => x.id == this.ID);
              this.Short = this.leveltypeList[0].short;
              this.Description = this.leveltypeList[0].description;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Level Type');
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



  public GetLevelType() {
    this.DigiofficeService.GetLevelType().
      subscribe({
        next: data => {
          debugger
          this.leveltypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Level Type');
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


  public InsertLevelType() {
    debugger;
    this.showPopup = 0;
    if (this.Description == undefined || this.Short == undefined) {
      /*  Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7
    }
    var entity = {
      Short: this.Short,
      Description: this.Description,
    }
    this.DigiofficeService.InsertLevelType(entity).
      subscribe({
        next: data => {
          debugger
          if (data != 0) {
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8
            location.href = "#/HR/LevelTypeDash";
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting  Level Type');
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


  public Cancel() {
    debugger
    location.href = "#/HR/LevelTypeDash";
  }

  public UpdateLevelType() {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: this.ID,
      Short: this.Short,
      Description: this.Description,
    }
    this.DigiofficeService.UpdateLevelType(entity)
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/HR/LevelTypeDash";
        }, error: (err) => {
          // Swal.fire('Issue in Updating Level Type');
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
