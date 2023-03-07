import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departmentmasteradd',
  templateUrl: './departmentmasteradd.component.html',
  styleUrls: ['./departmentmasteradd.component.css']
})

export class DepartmentmasteraddComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  currentUrl: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.GetDepartmentMaster();
  }

  public GetDepartmentMaster() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetDepartmentMaster()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.loader = false;
              this.Short = this.leavelist[0].department_name
              this.Description = this.leavelist[0].department_Desc
            }, error: (err) => {
              // Swal.fire('Issue in Getting Department Master');
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
    location.href = "#/Admin/Departmentmasterdash";
    this.loader = false;
  }

  public InsertDepartmentMaster() {
    this.showPopup = 0;
    debugger
    if (this.Short == undefined || this.Description == undefined) {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      debugger;
      var entity = {
        Department_name: this.Short,
        Department_Desc: this.Description
      }
      this.DigiofficeService.InsertDepartmentMaster(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*     Swal.fire("Saved Successfully"); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
              location.href = "#/Admin/Departmentmasterdash";
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Department Master');
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

  public UpdateDepartmentMaster() {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: this.ID,
      Department_name: this.Short,
      Department_Desc: this.Description
    }
    this.DigiofficeService.UpdateDepartmentMaster(entity)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("Updated Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10
          location.href = "#/Admin/Departmentmasterdash";
        }, error: (err) => {
          // Swal.fire('Issue in Updating Department Master');
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