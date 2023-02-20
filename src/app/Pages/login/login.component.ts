import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from '../Services/digi-pvt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accessToken: string | undefined;

  constructor(public DigiPVTService: DigiPVTService, public router: Router) { }
  companycode: any;
  username: any;
  roledid: any;
  password: any;
  showpassword: any;
  showotp: any;
  Otp: any;
  newpassword: any
  email: any
  roleid: any;
  loader: any;
  companyname: any;
  positionname: any;
  rolelist: any
  enabledisable: any;
  companyid: any;

  ngOnInit(): void {
    this.showpassword = 0;
    // this.companyname = "0";
    // this.positionname = "0";
    this.companyid = sessionStorage.getItem('companyid');
    this.roleid = sessionStorage.getItem('roledid');
  }
  public getroleid(event: any) {
    this.roledid = event.target.value;
  }

  Showhidepassword() {
    debugger
    if (this.showpassword == 0) {
      this.showpassword = 1;
    }
    else {
      this.showpassword = 0;
    }
  }


  public getCompanyDetails(event: any) {
    debugger
    this.companyid = event.target.value;

    this.DigiPVTService.GetCompanyID(this.companyid).subscribe((data: any) => {
      debugger
      let temp: any = data;
      if (temp?.length == 0) {
        Swal.fire('Invalid Compnay')
      }
      else {
        sessionStorage.setItem('digiofficeapiurl', temp?.officeapiurl);
        sessionStorage.setItem('payrollapiurl', temp?.payrollapiurl);
        sessionStorage.setItem('Companylogo', temp?.companylogo);
        sessionStorage.setItem('companyid', this.companyid);
      }
    });
  }
 
  public login() {
    debugger
    this.loader = true;
    if (this.companyid == undefined || this.companyid == "" || this.companyid == null || this.companyid == 0) {
      Swal.fire('Select Company Name');
      this.loader = false;
    }
    // else if (this.roledid == undefined || this.roledid == "" || this.roledid == null || this.roledid == 0) {
    //   Swal.fire('Select Your Position');
    //   this.loader = false;
    // }
    else if (this.username == undefined || this.username == "" || this.username == null || this.username == 0) {
      Swal.fire('Enter Username');
      this.loader = false;
    }
    else if (this.password == undefined || this.password == "" || this.password == null || this.password == 0) {
      Swal.fire('Enter Password');
      this.loader = false;
    }

    else {
      this.DigiPVTService.GetMyDetailsForLogin(this.username, this.password, 6).subscribe((data: any) => {
        debugger

        let temp: any = data;
        this.rolelist = data
        this.roleid = this.rolelist[0].login
        this.enabledisable = this.rolelist[0].enableDisable
        if (temp?.length == 0) {
          Swal.fire('Incorrect Username or Incorrect Subsidiary');
          this.loader = false;
        }
        else if (this.enabledisable == 1) {
          Swal.fire('Sorry, Your Login is Disabled!!');
          this.loader = false;
        }
        else {
          sessionStorage.setItem('roledid', temp[0].login);
          localStorage.setItem('roledid', temp[0].login);
          localStorage.setItem('staffid', temp[0].id);
          localStorage.setItem('UserName', temp[0].name);
          localStorage.setItem('email', temp[0].emailID);
          localStorage.setItem('Department', temp[0].department_name);
          localStorage.setItem('levelid', temp[0].levelid);
          localStorage.setItem('level', temp[0].level);
          localStorage.setItem('Province', temp[0].district)
          localStorage.setItem('shiftID', temp[0].shiftID);
          localStorage.setItem('Band', temp[0].band);
          sessionStorage.setItem('AttendanceEnable', temp[0].attendanceEnable)
          if (this.roleid == 2) {
            // if (this.companyid == 1002 || this.companyid == 1003) {
              this.router.navigate(['/Manager/ALIAVIDAManagerdashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            
            // else if (this.companyid == 1005) {
            //   this.router.navigate(['/HR/AVIDAHRDashboard']).then(() => {
            //     this.loader = false;
            //     location.reload();
            //   });
            // }
            // else {
            //   this.router.navigate(['/Manager/ALIAVIDAManagerdashboard']).then(() => {
            //     this.loader = false;
            //     location.reload();
            //   });
            // }
            // else {
            //   this.router.navigate(['/Employee/StaffDashboard']).then(() => {
            //     this.loader = false;
            //     location.reload();
            //   });
            // }
          }
          else if (this.roleid == 9) {
            this.router.navigate(['/Employee/StaffDashboard']).then(() => {
              this.loader = false;
              location.reload();
            });


           
          }
          else if (this.roleid == 1 || this.roleid == 41) {

            this.DigiPVTService.GetMyDetailsForLogin(this.username, this.password, 1).subscribe((data: any) => {
              debugger
              let temp: any = data;
              if (temp.length == 0) {
                Swal.fire('Incorrect Username or Incorrect Subsidiary');
                this.loader = false;
              }
              else {
                sessionStorage.setItem('roledid', temp[0].login);
                localStorage.setItem('roledid', temp[0].login);
                localStorage.setItem('staffid', temp[0].id);
                localStorage.setItem('UserName', temp[0].name);
                localStorage.setItem('email', temp[0].emailID);
                localStorage.setItem('Department', temp[0].department_name);
                localStorage.setItem('levelid', temp[0].levelid);
                localStorage.setItem('Province', temp[0].district)
                localStorage.setItem('shiftID', temp[0].shiftID);
                localStorage.setItem('Band', temp[0].band)
                sessionStorage.setItem('AttendanceEnable', temp[0].attendanceEnable)

                this.router.navigate(['/PayrollAdmin/AdminDashboard']).then(() => {
                  this.loader = false;
                  location.reload();
                });
              }
            });
          }

          else {
            if (this.companyid == 1002 || this.companyid == 1003) {
              this.router.navigate(['/Employee/ALIAVIDAEmployeedashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
            else if (this.companyid == 1005) {
              this.router.navigate(['/Employee/AVIDAEmployeeDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
            // else {
            //   this.router.navigate(['/Employee/ALIAVIDAEmployeedashboard']).then(() => {
            //     this.loader = false;
            //     location.reload();
            //   });
            // }
            else {
              this.router.navigate(['/Employee/StaffDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }
        }

      });
    }
  }

  getpassword(){

  }

  Save(){

  }
}
