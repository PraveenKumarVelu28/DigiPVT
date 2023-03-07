import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-work-station-type-form',
  templateUrl: './work-station-type-form.component.html',
  styleUrls: ['./work-station-type-form.component.css']
})

export class WorkStationTypeFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  currentUrl: any;
  buildinglist: any;
  floorlist: any;
  BuildingID: any;
  FloorID: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetBuildinglist();
    this.Get_WorkStationType_Master();
  }

  public Get_WorkStationType_Master() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
        this.loader = false;
        this.Short = "",
          this.Description = "",
          this.FloorID = "",
          this.BuildingID = ""
      }
      else {
        this.DigiofficeService.Get_WorkStationType_Master()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.GetBuildinglist();
              this.BuildingID = this.leavelist[0].buildingID;
              this.DigiofficeService.GetFloorType(this.BuildingID)
                .subscribe({
                  next: data => {
                    debugger
                    this.floorlist = data;
                    this.FloorID = this.leavelist[0].floorID
                  }, error: (err) => {
                    // Swal.fire('Issue in Getting Floor Type');
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
              this.Short = this.leavelist[0].short
              this.Description = this.leavelist[0].description
            }, error: (err) => {
              // Swal.fire('Issue in Getting WorkStation Type Master');
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

  public GetBuildinglist() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetBuildinglist()
      .subscribe({
        next: data => {
          debugger
          this.buildinglist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Building List');
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

  public GetFloorType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetFloorType(this.BuildingID)
      .subscribe({
        next: data => {
          debugger
          this.floorlist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Floor Type');
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

  GetFloorID(even: any) {
    debugger
    this.FloorID = even.target.value;
  }

  public InsertWorkStationType_Master() {
    this.showPopup = 0;
    this.loader = true;
    debugger
    if (this.FloorID == undefined || this.BuildingID == undefined || this.Description == undefined ||
      this.FloorID == "" || this.BuildingID == "" || this.Description == "") {
      /* Swal.fire("Please Fill All Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        FloorID: this.FloorID,
        BuildingID: this.BuildingID,
        Short: this.Description,
        Description: this.Description
      }
      this.DigiofficeService.InsertWorkStationType_Master(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*  Swal.fire("Saved Successfully"); */
              this.showPopup = 1;
              this.messageId = 8;
              location.href = "#/Admin/WorkStationTypeDash";
              this.loader = false;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting WorkStation Type Master');
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

  public UpdateWorkStationType_Master() {
    debugger;
    this.loader = true;
    var entity = {
      ID: this.ID,
      Short: this.Short,
      Description: this.Description
    }
    this.DigiofficeService.UpdateWorkStationType_Master(entity)
      .subscribe({
        next: data => {
          debugger
          /*     Swal.fire("Updated Successfully"); */
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/Admin/WorkStationTypeDash";
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Updating WorkStation Type Master');
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