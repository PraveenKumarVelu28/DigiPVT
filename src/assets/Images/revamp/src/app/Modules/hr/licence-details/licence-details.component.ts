import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';

@Component({
  selector: 'app-licence-details',
  templateUrl: './licence-details.component.html',
  styleUrls: ['./licence-details.component.css']
})
export class LicenceDetailsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService,) { }

  ngOnInit(): void {
    this.companyid = 1;
    this.getCount(this.companyid);
  }
  activestaff: any;
  inactivestaff: any;
  remainig: any;
  public getCount(id: any) {
    this.DigiofficeService.GetStaffLicenseDetailsbycompany(id).
      subscribe({
        next: data => {
          //debugger
          let countdetails: any = data;
          this.activestaff = countdetails[0].activestaff;
          this.inactivestaff = countdetails[0].inactivestaff;
          this.remainig = (5600 - (this.activestaff + this.inactivestaff)) <= 0 ? 0 : 5600 - (this.activestaff + this.inactivestaff);

        }, error: (err) => {

        }
      })
  }
  companyid: any
  public getCompanyDetails() {

    this.DigiofficeService.GetStaffLicenseDetailsbycompany(this.companyid).
      subscribe({
        next: data => {
          //debugger
          let countdetails: any = data;
          this.activestaff = countdetails[0].activestaff;
          this.inactivestaff = countdetails[0].inactivestaff;
          if (this.companyid == 1) {
            this.remainig = (5600 - (this.activestaff + this.inactivestaff)) <= 0 ? 0 : 5600 - (this.activestaff + this.inactivestaff);
          } else {
            this.remainig = ((this.activestaff - this.inactivestaff)) <= 0 ? 0 : (this.activestaff - this.inactivestaff);
          }


        }, error: (err) => {

        }
      })
  }

}
