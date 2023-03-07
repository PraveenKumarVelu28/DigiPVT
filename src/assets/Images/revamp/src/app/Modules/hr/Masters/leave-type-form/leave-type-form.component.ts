import { Component, Inject, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-leave-type-form',
  templateUrl: './leave-type-form.component.html',
  styleUrls: ['./leave-type-form.component.css']
})
export class LeaveTypeFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute,public dialogRef: MatDialogRef<LeaveTypeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: any) { }
  // ID: any;
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
    this.activatedroute.params.subscribe(params => {
      debugger;
      // this.ID = params['id'];
      if (this.ID == undefined) {
        this.loader = false;
        this.Short = "",
          this.Description = ""

      }
      else {

        this.DigiofficeService.GetLeaveType().
          subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Short = this.leavelist[0].short
              this.Description = this.leavelist[0].description
              this.Entitlement_Per_Year = this.leavelist[0].entitlement_Per_Year
              this.carry_forward = this.leavelist[0].carry_forward
            }, error: (err) => {
              // Swal.fire('Issue in Getting Leave Type');
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

  Entitlement_Per_Year: any;
  carry_forward: any;
  public InsertLeaveTypeMaster() {
    this.showPopup = 0;
    debugger;
    if (this.Short == undefined || this.Short == "" || this.Description == undefined || this.Description == "") {
      /*   Swal.fire("Please Fill All the Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      var entity = {
        Short: this.Short,
        Description: this.Description,
        Entitlement_Per_Year: this.Entitlement_Per_Year,
        carry_forward: this.carry_forward

      }
      this.DigiofficeService.InsertLeaveTypeMaster(entity)
        .subscribe({
          next: data => {
            debugger
            if (data != 0) {
              /*   Swal.fire("Saved Successfully"); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
              location.href = "#/HR/LeaveTypeDashboard";
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Leave Type');
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


  public UpdateLeaveType() {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: this.ID,
      Short: this.Short,
      Description: this.Description,
      Entitlement_Per_Year: this.Entitlement_Per_Year,
      carry_forward: this.carry_forward
    }
    this.DigiofficeService.UpdateLeaveType(entity).
      subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          /*          Swal.fire("Updated Successfully"); */
          location.href = "#/HR/LeaveTypeDashboard";

        }, error: (err) => {
          // Swal.fire('Issue in Updating Leave Type');
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

  cancel(){
    location.href = "#/HR/LeaveTypeDashboard";
    this.loader = false;
    this.dialogRef.close(false);
  }


}
