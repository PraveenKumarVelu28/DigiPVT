import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-policydashbaord',
  templateUrl: './policydashbaord.component.html',
  styleUrls: ['./policydashbaord.component.css']
})

export class PolicydashbaordComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe, private router: Router) { }
  login: any;
  FolderID: any
  pagename: any;
  currentUrl: any;
  term: any
  policylist: any
  date: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.pagename = localStorage.getItem('Pagename')
    this.GetPoliciesActivatedParams();
    this.login = localStorage.getItem('roledid')
  }

  public GetPoliciesActivatedParams() {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.FolderID = params['id'];
      this.GetPolicies();
      this.loader = false;
    })
  }

  public GetPolicies() {
    debugger
    this.DigiofficeService.GetPolicies()
      .subscribe({
        next: data => {
          debugger
          this.policylist = data.filter(x => x.folderID == this.FolderID);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Policies');
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

  public getdate() {
    debugger
    if (this.date == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetPolicies()
        .subscribe({
          next: data => {
            debugger
            this.policylist = data.filter(x => x.filterdate == this.date);
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Policies');
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

  public DeleteHolidays(ID: any) {
    debugger;
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeletePolicies(ID)
          .subscribe({
            next: data => {
              debugger
              /*       Swal.fire('Deleted Successfully') */
              location.reload();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 11;
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Policies');
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

  public goback() {
    debugger
    location.href = "#/Employee/Company-policy";
    this.loader = false;
  }

  public addpolicy() {
    debugger
    this.router.navigate(['/Employee/Addpolicy/', this.FolderID]);
    this.loader = false;
  }

}