import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addstaffsalary',
  templateUrl: './addstaffsalary.component.html',
  styleUrls: ['./addstaffsalary.component.css']
})

export class AddstaffsalaryComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private activatedroute: ActivatedRoute) { }
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  dropdownList1: any = [];
  selectedItems1: any = [];
  dropdownSettings1: any = {};
  RoleTypeList: any
  leavelist: any;
  dropdownList123: any;
  deniminimislist123: any;
  NewSalary: any;
  deniminimisamt: any;
  effectivedate: any;
  loader: any
  public attachments21: any = [];
  public attachments: any = [];
  currentUrl: any;
  deniminimislist: any;
  Amount: any;
  public attachments211: any = [];
  public attachments1: any = [];
  BaseSal: any;
  deniminimis: any;
  deniminimis_amount: any;
  ID: any;
  RoleID: any
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.deniminimis_amount = 0;
    this.RoleID = 0;
    this.deniminimis = '';
    this.ActivatedRouterCall();
    this.GetMyDetails();
    this.GetRoleType();
    this.GetDeminimisMaster();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'amount',
      textField: 'item',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 20,
      allowSearchFilter: true,
    };
  }

  public ActivatedRouterCall() {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.BaseSal = ""
      }
      else {
        this.DigiofficeService.GetMyDetails()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.BaseSal = this.leavelist[0].baseSal,
                this.EmployeeId = this.ID;
              this.RoleID = this.leavelist[0].type
              this.deniminimis = this.leavelist[0].deniminimis.split(",");
              this.deniminimis = this.deniminimis[0];
              this.deniminimis_amount = this.leavelist[0].deniminimis_amount
              this.DigiofficeService.GetMyDetails()
                .subscribe({
                  next: data => {
                    debugger
                    this.dropdownList123 = data.filter(x => x.id == this.ID);
                    this.selectedItems = this.dropdownList123
                  }, error: (err) => {
                    // Swal.fire('Issue in Getting My Details');
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
              this.DigiofficeService.GetDe_minimis_Master()
                .subscribe({
                  next: data => {
                    debugger
                    let temp1: any = data.filter(x => x.item != this.deniminimis[0]);
                    this.deniminimislist123 = temp1;
                    this.dropdownList1 = this.deniminimislist123
                  }, error: (err) => {
                    // Swal.fire('Issue in Getting De Minimis Master');
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
              // Swal.fire('Issue in Getting My Details');
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

  public GetMyDetails() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  public GetRoleType() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          this.RoleTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
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

  public GetDeminimisMaster() {
    this.DigiofficeService.GetDe_minimis_Master()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList1 = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Deminimis Master');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.EmployeeId = item.id;
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          let temp: any = data.filter(x => x.id == this.EmployeeId);
          this.EmployeeName = temp[0].name;
          this.DigiofficeService.GetDeMinimisMapping()
            .subscribe({
              next: data => {
                let temp1: any = data.filter(x => x.roleID == temp[0].roleType);
                this.deniminimislist = temp1[0].deMinimis;
                this.Amount = temp1[0].amount;
              }, error: (err) => {
                // Swal.fire('Issue in Getting DeMinimis Mapping');
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

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    console.log(event);
    this.attachments21.push(...event.addedFiles);
  }

  onItemSelect1(item: any) {
    debugger
    console.log(item);
    this.deniminimis = '';
    this.attachments1.push(item);
    for (let i = 0; i < this.selectedItems1.length; i++) {
      this.deniminimisamt = this.deniminimis_amount + this.selectedItems1[i].amount;
      this.deniminimis = this.deniminimis + this.selectedItems1[i].item + ','
    }
  }

  onRemove211(event: any) {
    debugger
    console.log(event);
    this.attachments211.splice(this.attachments1.indexOf(event), 1);
    this.deniminimis_amount = this.deniminimis_amount - event.amount;
  }

  onSelect211(event: any) {
    debugger
    console.log(event);
    this.attachments211.push(...event.addedFiles);
  }

  public Save() {
    debugger;
    this.showPopup = 0;

    if (this.BaseSal == undefined || this.BaseSal == "" || this.deniminimis == "") {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13
    }
    else {
      for (let i = 0; i < this.selectedItems1.length; i++) {
        this.deniminimis_amount = this.deniminimis_amount + this.selectedItems1[i].amount;
        this.deniminimis = this.deniminimis + this.selectedItems1[i].item + ','
      }
      var eb = {
        'ID': this.EmployeeId,
        'BaseSal': this.BaseSal,
        'deniminimis': this.deniminimislist,
        'deniminimis_amount': this.Amount,
      }
      this.DigiofficeService.InsertDe_minimis_Detailsforstaff(eb)
        .subscribe({
          next: data => {
            debugger
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8
            /*    Swal.fire('Saved successfully.'); */
            this.router.navigate(['/Staffsalarydash']);

          }, error: (err) => {
            // Swal.fire('Issue in Inserting Deminimis Details for staff');
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

  public Update() {
    debugger
    this.showPopup = 0;

    for (let i = 0; i < this.selectedItems1.length; i++) {
      this.deniminimis_amount = this.deniminimis_amount + this.selectedItems1[i].amount;
      this.deniminimis = this.deniminimis + this.selectedItems1[i].item + ','
    }
    var eb = {
      'ID': this.EmployeeId,
      'BaseSal': this.BaseSal,
      'deniminimis': this.deniminimis,
      'deniminimis_amount': this.deniminimis_amount,
      'NewSalary': this.NewSalary,
      'effectivedate': this.effectivedate,
    }
    this.DigiofficeService.UpdateDe_minimis_Detailsforstaff(eb)
      .subscribe({
        next: data => {
          /* Swal.fire('Updated successfully.'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          this.router.navigate(['/HR/Staffsalarydash']);
        }, error: (err) => {
          // Swal.fire('Issue in Updating Deminimis Details for staff');
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

  public cancel() {
    debugger
    this.router.navigate(['/HR/Staffsalarydash']);
  }

  public GetRoleID(event: any) {
    debugger
    this.RoleID = event.target.value;
    this.deniminimislist = '';
    this.Amount = '';
    this.selectedItems1 = [];
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          this.dropdownList = data.filter(x => x.roleType == this.RoleID);
        }, error: (err) => {
          // Swal.fire('Issue in Getting MyDetails');
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