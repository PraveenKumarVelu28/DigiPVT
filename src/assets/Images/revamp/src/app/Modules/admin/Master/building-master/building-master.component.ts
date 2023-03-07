import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-building-master',
  templateUrl: './building-master.component.html',
  styleUrls: ['./building-master.component.css']
})

export class BuildingMasterComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  loader: any;
  currentUrl: any;
  Name: any;
  Address: any;
  PhoneNo: any;
  NoOfFloors: any;
  NoOfBasements: any;
  TotalNoUnits: any;
  NoOfUnitsPerFloor: any;
  CountryID: any;
  leavelist1: any

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.GetCountryType();
    this.GetBuildinglist();
  }

  public GetBuildinglist() {
    this.loader=true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader=false;
      if (this.ID == undefined) {
        this.Name = "",
          this.Address = "",
          this.PhoneNo = "",
          this.NoOfFloors = "",
          this.NoOfBasements = "",
          this.TotalNoUnits = "",
          this.NoOfUnitsPerFloor = "",
          this.CountryID = ""
          this.loader=false;
      }
      else {
        this.DigiofficeService.GetBuildinglist()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader=false;
              this.Name = this.leavelist[0].name,
                this.Address = this.leavelist[0].address,
                this.PhoneNo = this.leavelist[0].phoneNo,
                this.NoOfFloors = this.leavelist[0].noOfFloors,
                this.NoOfBasements = this.leavelist[0].noOfBasements,
                this.TotalNoUnits = this.leavelist[0].totalNoUnits,
                this.NoOfUnitsPerFloor = this.leavelist[0].noOfUnitsPerFloor,
                this.DigiofficeService.GetCountryType()
                  .subscribe({
                    next: data => {
                      debugger
                      this.leavelist1 = data;
                      this.CountryID = this.leavelist[0].countryID;
                      this.loader=false;
                    }, error: (err) => {
                      // Swal.fire('Issue in getting Country Type');
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
    })
  }

  public GetCountryType() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetCountryType()
      .subscribe({
        next: data => {
          debugger
          this.leavelist1 = data;
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

  public InsertBuilding() {
    debugger;
    this.loader = true;
    var entity = {
      Name: this.Name,
      Address: this.Address,
      PhoneNo: this.PhoneNo,
      NoOfFloors: this.NoOfFloors,
      NoOfBasements: this.NoOfBasements,
      TotalNoUnits: this.TotalNoUnits,
      NoOfUnitsPerFloor: this.NoOfUnitsPerFloor,
      CountryID: this.CountryID,
      ContactPersonName: 'test',
      CityType: 1,
      StateType: 1
    }
    this.DigiofficeService.InsertBuilding(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            Swal.fire("Saved Successfully");
            location.href = "#/Admin/BuildingMasterDash";
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Building');
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

  Cancel() {
    location.href = "#/Admin/BuildingMasterDash";
    this.loader=false;
  }

  public UpdateBuilding() {
    debugger;
    this.loader = true;
    var entity = {
      ID: this.ID,
      Name: this.Name,
      Address: this.Address,
      PhoneNo: this.PhoneNo,
      NoOfFloors: this.NoOfFloors,
      NoOfBasements: this.NoOfBasements,
      TotalNoUnits: this.TotalNoUnits,
      NoOfUnitsPerFloor: this.NoOfUnitsPerFloor,
      CountryID: this.CountryID,
      ContactPersonName: 'test',
    }
    this.DigiofficeService.UpdateBuilding(entity)
      .subscribe({
        next: data => {
          debugger
          Swal.fire("Updated Successfully");
          location.href = "#/Admin/BuildingMasterDash";
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Building');
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