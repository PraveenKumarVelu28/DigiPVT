import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-over-time-configuration',
  templateUrl: './over-time-configuration.component.html',
  styleUrls: ['./over-time-configuration.component.css']
})

export class OverTimeConfigurationComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigiofficecorehrService) { }
  AutoApproval: any;
  roleid: any
  staffID: any;
  ID: any;
  ManualApply: any;
  result: any;
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roleid = sessionStorage.getItem('roledid');
    this.staffID = sessionStorage.getItem('staffid');
    this.GetOtConfiguration();
  }

  public GetOtConfiguration() {
    this.DigipayrollServiceService.GetOtConfiguration()
      .subscribe({
        next: data => {
          debugger
          this.result = data;
          this.AutoApproval = this.result[0].approvalStatus;
          this.ManualApply = this.result[0].manualApply;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Ot Configuration');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public UpdateOtConfiguration() {
    debugger;
    this.showPopup = 0;
    if (this.AutoApproval == undefined) {
      /* Swal.fire('Please fill all the fields') */
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        ID: 1,
        ApprovalStatus: this.AutoApproval,
        ManualApply: this.ManualApply
      }
      this.DigipayrollServiceService.UpdateOtConfiguration(entity)
        .subscribe({
          next: data => {
            /* Swal.fire("Updated Successfully"); */
            this.showPopup = 1;
            this.messageId = 10;
            location.reload();
          }, error: (err) => {
            // Swal.fire('Issue in Updating Ot Configuration');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigipayrollServiceService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
  }

}