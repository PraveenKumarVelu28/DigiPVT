import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employeebenfitsmasteradd',
  templateUrl: './employeebenfitsmasteradd.component.html',
  styleUrls: ['./employeebenfitsmasteradd.component.css']
})

export class EmployeebenfitsmasteraddComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Item: any;
  Amount: any;
  loader: any;
  currentUrl: any;
  criteria: any;
  frequency: any;
  Beniftname: any;
  Beniftdesc: any;
  Beniftamount: any

  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.frequency = "";
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
      }
      else {
        this.DigiofficeService.GetEmployeeBenfits().
          subscribe({
            next: data => {
              debugger
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Beniftname = this.leavelist[0].beniftname
              this.Beniftamount = this.leavelist[0].beniftamount
              this.criteria = this.leavelist[0].criteria
              this.Beniftdesc = this.leavelist[0].beniftdesc;
              this.frequency = this.leavelist[0].frequency;
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
    })
  }

  public InsertCountryType() {
    debugger;
    this.loader = true
    this.showPopup = 0;
    if (this.Beniftname == undefined || this.Beniftdesc == undefined || this.Beniftamount == undefined || this.criteria == undefined || this.frequency == undefined) {
      /*  Swal.fire('Please Fill All The Mandatory Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      var entity = {
        Beniftname: this.Beniftname,
        Beniftdesc: this.Beniftdesc,
        Beniftamount: this.Beniftamount,
        criteria: this.criteria,
        frequency: this.frequency
      }
      this.DigiofficeService.InsertEmployeeBenfits(entity).
        subscribe({
          next: data => {
            if (data != 0) {
              /*     Swal.fire("Saved Successfully"); */
              this.loader = false
              this.showPopup = 1;
              this.messageId = 8;
              location.href = "#/HR/Employeebenfitsmasterdash";
            }
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

  public Cancel() {
    debugger
    location.href = "#/HR/Employeebenfitsmasterdash";
  }
  public UpdateCountryType() {
    this.showPopup = 0;
    debugger;
    this.loader = true
    var entity = {
      ID: this.ID,
      Beniftname: this.Beniftname,
      Beniftdesc: this.Beniftdesc,
      Beniftamount: this.Beniftamount,
      criteria: this.criteria,
      frequency: this.frequency
    }
    this.DigiofficeService.UpdateEmployeeBenfits(entity)
      .subscribe({
        next: data => {
          /*    Swal.fire("Updated Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/HR/Employeebenfitsmasterdash";
        }, error: (err) => {
          // Swal.fire('Issue in Updating Employee Benefits');
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