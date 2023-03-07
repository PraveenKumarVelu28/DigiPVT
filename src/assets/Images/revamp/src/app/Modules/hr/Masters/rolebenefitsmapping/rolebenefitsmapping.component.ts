import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-rolebenefitsmapping',
  templateUrl: './rolebenefitsmapping.component.html',
  styleUrls: ['./rolebenefitsmapping.component.css']
})
export class RolebenefitsmappingComponent implements OnInit {
  currentUrl: any;
  loader: any;

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
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
  level: any;
  RoleTypeList: any;
  RoleID: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.deniminimis_amount = 0;
    this.deniminimis = '';
    this.RoleID = '';
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff');
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

    this.DigiofficeService.GetEmployeeBenfits().
      subscribe({
        next: data => {
          debugger
          this.dropdownList1 = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Benefits');
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
      idField: 'beniftamount',
      textField: 'beniftname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 20,
      allowSearchFilter: true,

    };
  }

  public GetRole() {
    debugger
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.RoleTypeList = data.filter(x => x.levelid == this.level);
        }, error: (err) => {
          // Swal.fire('Issue in Getting Position');
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
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Name');
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
  public attachments21: any = [];

  public attachments: any = [];
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

    this.attachments1.push(item);

  }
  public attachments211: any = [];

  public attachments1: any = [];
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



  BaseSal: any;
  deniminimis: any;
  deniminimis_amount: any;
  public Save() {
    this.showPopup = 0;
    debugger
    if (this.RoleID == undefined || this.RoleID == 0) {
      /*   Swal.fire('Please Enter All fields') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    }
    else {
      for (let i = 0; i < this.attachments1.length; i++) {
        this.deniminimis_amount = this.deniminimis_amount + this.selectedItems1[i].beniftamount;
        this.deniminimis = this.deniminimis + this.selectedItems1[i].beniftname + ','
      }
      var eb = {
        'RoleID': this.RoleID,
        'Benefits': this.deniminimis,
        'Amount': this.deniminimis_amount,
      }
      this.DigiofficeService.InsertBenefitsRoleMapping(eb).
        subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Saved Successfully.'); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
            this.router.navigate(['/HR/Rolebenefitsmappingdash']);
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Benefits Role Mapping');
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

  public cancel() {
    debugger
    this.router.navigate(['/HR/Rolebenefitsmappingdash']);

  }

}

