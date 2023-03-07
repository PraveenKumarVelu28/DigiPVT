import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vaccinedashboard',
  templateUrl: './vaccinedashboard.component.html',
  styleUrls: ['./vaccinedashboard.component.css']
})

export class VaccinedashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  currentUrl: any;
  search: any;
  EmployeeVaccinationDetail: any;
  date: any;
  loader:any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.getDetails();
  }

  public getDetails() {
    debugger
    this.DigiofficeService.GetEmployeeVaccinationDetails()
      .subscribe({
        next: data => {
          debugger
          this.EmployeeVaccinationDetail = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Vaccination Details');
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

  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    if (this.date == "") {
      this.ngOnInit();
    } else {
    this.DigiofficeService.GetEmployeeVaccinationDetails()
      .subscribe({
        next: data => {
          debugger
          this.EmployeeVaccinationDetail = data.filter(x => x.filterdate == this.date);
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Vaccination Details');
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

}