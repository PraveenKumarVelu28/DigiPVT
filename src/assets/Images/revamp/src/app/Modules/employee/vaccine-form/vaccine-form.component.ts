import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})

export class VaccineFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private activatedroute: ActivatedRoute) { }
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  roledid: any
  currentUrl: any;
  BoosterName: any;
  BoosterDoseDate: any;
  loader: any;
  ID: any;
  public attachments21: any = [];
  public attachments22: any = [];
  public attachments23: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  public attachmentsurl1: any = [];
  public attachmentsurl2: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.attachmentsurl = [];
    this.attachmentsurl1 = [];
    this.attachmentsurl2 = [];
    this.loader = true;
    this.roledid = localStorage.getItem('roledid');
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.EmployeeId = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
      }
      else {

      }
    })
    this.GetMyDetails();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }

  public GetMyDetails() {
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
          this.loader = false;
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

  onItemSelect(item: any) {
    debugger
    this.EmployeeId = item.id;
    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == this.EmployeeId);
      this.EmployeeName = temp[0].name;
      this.loader = false;
    })
  }

  onRemove21(event: any) {
    debugger
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onRemove22(event: any) {
    debugger
    this.attachments22.splice(this.attachments.indexOf(event), 1);
  }

  onRemove23(event: any) {
    debugger
    this.attachments23.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.showPopup = 0;
    if (event.addedFiles[0].size / 1048576 > 2) {
      /* Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 14
    } else {
      this.attachments21.push(...event.addedFiles);
    }
  }

  onSelect22(event: any) {
    debugger
    this.showPopup = 0
    if (event.addedFiles[0].size / 1048576 > 2) {
      /*  Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 14
    } else {
      this.attachments22.push(...event.addedFiles);
    }
  }

  onSelect23(event: any) {
    debugger
    this.showPopup = 0;
    if (event.addedFiles[0].size / 1048576 > 2) {
      /*   Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 14
    } else {
      this.attachments23.push(...event.addedFiles);
    }
  }

  public Save() {
    debugger
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: data => {
          debugger
          this.attachmentsurl.push(data);
          this.attachments.length = 0;
          this.DigiofficeService.ProjectAttachments(this.attachments22)
            .subscribe({
              next: data => {
                debugger
                this.attachmentsurl1.push(data);
                this.attachments.length = 0;
                this.DigiofficeService.ProjectAttachments(this.attachments23)
                  .subscribe({
                    next: data => {
                      debugger
                      this.attachmentsurl2.push(data);
                      this.attachments.length = 0;
                      this.InsertVaccineDetails();
                      this.loader = false;
                    }, error: (err) => {
                      // Swal.fire('Issue in Inserting Project Attachments');
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

                this.loader = false;
              }, error: (err) => {
                // Swal.fire('Issue in Inserting Project Attachments');
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
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Project Attachments');
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

  public InsertVaccineDetails() {
    debugger
    this.showPopup = 0;
    if (this.VaccinationName == undefined || this.attachments21 == "" || this.attachments22 == "" || this.attachments23 == ""
      || this.FirstDoseDate == undefined || this.SecondDoseDate == undefined || this.BoosterName == undefined ||
      this.BoosterDoseDate == undefined) {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13
    } else {
      var eb = {
        'EmployeeId': this.EmployeeId,
        'EmployeeName': this.EmployeeName,
        'VaccinationName': this.VaccinationName,
        'FirstDoseDate': this.FirstDoseDate,
        'SecondDoseDate': this.SecondDoseDate,
        'Certificate_url': this.attachmentsurl[0],
        'Certificate_url_second': this.attachmentsurl1[0],
        'BoosterDoseCertificate': this.attachmentsurl2[0],
        'BoosterName': this.BoosterName,
        'BoosterDoseDate': this.BoosterDoseDate
      }
      this.DigiofficeService.InsertEmployeeVaccinationDetails(eb)
        .subscribe({
          next: data => {
            debugger
            /* Swal.fire('Saved Successfully.'); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8
            if (this.roledid == 1) {
              this.router.navigate(['/Employee/Vaccinedashboard']);
              this.loader = false;
            } else if (this.roledid == 2) {
              this.router.navigate(['/Manager/ManagerDashboard']);
              this.loader = false;
            }
            else if (this.roledid == 9) {
              this.router.navigate(['/HR/HRDashboard']);
              this.loader = false;
            }
            else {
              this.router.navigate(['/Employee/Employeedashboard']);
              this.loader = false;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Employee Vaccination Details');
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
    if (this.roledid == 1) {
      this.router.navigate(['/Employee/Vaccinedashboard']);
      this.loader = false;
    } else if (this.roledid == 2) {
      this.router.navigate(['/Manager/ManagerDashboard']);
      this.loader = false;
    }
    else if (this.roledid == 9) {
      this.router.navigate(['/HR/HRDashboard']);
      this.loader = false;
    }
    else {
      this.router.navigate(['/Employee/Employeedashboard']);
      this.loader = false;
    }
  }

}