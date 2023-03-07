import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../Services/digiofficecorehr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, public CookieService: CookieService) { }
  accessToken: string | undefined;
  companycode: any;
  username: any;
  roledid: any;
  password: any;
  showpassword: any;
  showotp: any;
  Otp: any;
  newpassword: any;
  confirmpassword: any;
  email: any
  currentUrl: any
  companyid: any;
  loader: any
  otp: any;
  password1: any;
  api: any;
  passvaild: any;
  ipAddress: any;
  ipaddress: any;
  public Attactments = [];
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.showpassword = 0;
    this.sssvalid = false;
    this.sssvalid = false;
    this.getipaddress();
    if (sessionStorage.getItem('temp') == '1') {
      localStorage.clear();
      location.reload();

    }
  }

  public checkpassword(event: any) {
    debugger
    this.showPopup = 0;
    this.confirmpassword = event.target.value;
    if (this.confirmpassword.includes('#') == true || this.confirmpassword.includes('&') == true || this.confirmpassword.includes('+') == true || this.confirmpassword.includes('*') == true || this.confirmpassword.includes('%') == true) {
      /*   Swal.fire("Special Character  not allowed in Passowrd"); */

      this.passvaild = false;
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 39
    } else {
      if (this.newpassword === this.confirmpassword) {
        this.passvaild = true;
      } else {
        this.passvaild = false;
      }
    }
  }
  sssvalid: any;
  public checksssandtin(event: any) {
    debugger
    var entity = {
      'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
      'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
    }
    this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
      debugger
      localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
      this.DigiofficeService.GetStaffDetailsByEmpIDandSSS(this.Empid, this.sssno)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              this.sssvalid = false;
            }

            else {
              this.sssvalid = true;

            }

          }, error: (err) => {

            // Insert error in Db Here//
            // var obj = {
            //   'PageName': this.currentUrl,
            //   'ErrorMessage': err.error.message
            // }
            // this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            //   data => {
            //     debugger
            //   },
            // )
          }
        })

    })
    // this.DigiofficeService.Authenicate(entity).subscribe((data: any) => {
    //   debugger
    //   if (data['requestMessage'] != undefined || null) {
    //     localStorage.setItem('token', data['requestMessage'].headers[0].value[0]);



    //   }
    // })

  }
  public checksssandtinforforgot(event: any) {
    debugger
    var entity = {
      'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
      'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
    }

    this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
      debugger
      localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));

      this.DigiofficeService.GetStaffDetailsByEmpIDandSSS(this.Empid, this.sssno)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              this.sssvalid = false;
            }

            else {
              this.sssvalid = true;

            }

          }, error: (err) => {

            // Insert error in Db Here//
            // var obj = {
            //   'PageName': this.currentUrl,
            //   'ErrorMessage': err.error.message
            // }
            // this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            //   data => {
            //     debugger
            //   },
            // )
          }
        })

    })
    // this.DigiofficeService.Authenicate(entity).subscribe((data: any) => {
    //   debugger
    //   if (data['requestMessage'] != undefined || null) {





    //     // this.DigiofficeService.Getantiforgerytoken().subscribe((data: any) => {
    //     //   debugger
    //     //   localStorage.setItem('token', data['requestMessage'].headers[0].value[0]);

    //     //   localStorage.setItem('antiforgerytoken', data.antiForgeryToken);

    //     // })
    //   }
    // })

  }


  id: any;
  public ChangePassword() {
    debugger
    this.showPopup = 0;
    if (this.newpassword == undefined || this.newpassword == null || this.newpassword == '' || this.confirmpassword == undefined || this.confirmpassword == null || this.confirmpassword == '') {
      /*  Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7
    } else {
      var entity = {
        ID: this.id,
        Password: btoa(this.confirmpassword),
        'jS1vSGsaIRdhVtOp': 'sIAnElKvYV6XUm6V',
      }
      this.DigiofficeService.UpdateDefaultPassword(entity).subscribe(data => {
        /*         Swal.fire("Password Changed Successfully.Login With New Password"); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 84
        this.newpassword = '';
        this.confirmpassword = ''
        this.ngOnInit();
        this.loader = false;
      })
    }



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
  Empid: any;
  sssno: any;
  public getCompanyDetails(event: any) {
    debugger
    this.showPopup = 0;
    this.companyid = event.target.value;
    this.DigiofficeService.GetCompanyID(this.companyid)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          if (temp.length == 0) {
            /*  Swal.fire('Invalid Compnay'); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 80
          }
          else {
            sessionStorage.setItem('digiofficeapiurl', temp.officeapiurl);
            sessionStorage.setItem('payrollapiurl', temp.payrollapiurl);
            sessionStorage.setItem('Companylogo', temp.companylogo);
            sessionStorage.setItem('companyid', this.companyid);
            sessionStorage.setItem('companycode', temp.companycode);
            sessionStorage.setItem('companyName', temp.companyName);

          }
        }, error: (err) => {
          //  Swal.fire('Issue in Getting Company ID');
          this.loader = false;

          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
            'EmailId': localStorage.getItem('EmployeeID'),
            'LoginType': localStorage.getItem('roledid'),
            'API': 'Get CompanyID API Failed'
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public Adminhelp() {
    localStorage.setItem('clickname', 'PROFILE')
    this.router.navigate(['/Help']);


    // location.href='https://digipayrolllite.amazeone.co/DigiPayrollliteapi/Images/ProjectAttachments/USER MANUAL-digiPayroll-Lite-Admin_V1.0_200322.docx'
  }


  public login() {
    this.showPopup = 0;
    debugger
    this.loader = true;
    if (this.companyid == undefined || this.companyid == null) {
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 1;
    }
    else if (this.roledid == undefined || this.roledid == null) {
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 2;
    }
    else {
      this.loader = true;
      var entity = {
        'username': 'Amaze',
        'Password': 'P@ssw0rd',
        'RoleID': 1

      }


      this.DigiofficeService.Authenicate(entity).subscribe((data: any) => {
        debugger
        if (data['requestMessage'] != undefined || null) {
          localStorage.setItem('token', btoa(data['requestMessage'].headers[0].value[0]));
          debugger
          //a


          // localStorage.setItem('antiforgerytoken', data[1]);
          // this.CookieService.set('xsrf-token', data[0])
          // localStorage.setItem('cookietoken', data[0]);
          this.DigiofficeService.GetAllStafffordefaultcheck(this.username).subscribe(
            data => {
              let temp: any = data;

              if (temp.length == 0) {
                /*  Swal.fire('Incorrect Username or Incorrect Subsidiary'); */
                this.loader = false;
                this.showPopup = 1;
                this.messageId = 87
              } else {
                this.id = temp[0].id;
                this.loader = false;
                if (temp[0].defaultpasschange == 0) {
                  const element1 = document.getElementById('opencost');
                  if (element1 !== null) {
                    element1.click();

                  }
                }
                else if (temp[0].defaultpasschange == 1) {
                  this.loader = true;
                  if (this.roledid == 6) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 6)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*   Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {

                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }

                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/Employee/Employeedashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });

                            })

                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 2) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 2)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*  Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {
                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/Manager/ManagerDashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });
                            })

                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 1) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 1)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*  Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {
                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/HR/Staffdashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });
                            })


                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 9) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 9)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*  Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {
                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/HR/HRDashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });
                            })


                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 8) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 8)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*   Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {

                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/Admin/ManagerDashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });
                            })


                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 10) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 10)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*    Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {
                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/HR/Staffdashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });

                            })


                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else if (this.roledid == 11) {
                    this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 11)
                      .subscribe({
                        next: data => {
                          debugger
                          let temp: any = data;
                          if (temp.length == 0) {
                            /*     Swal.fire('Incorrect Username Or Password'); */
                            this.loader = false;
                            this.showPopup = 1;
                            this.messageId = 88
                          }
                          else {
                            var entity = {
                              'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
                              'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
                            }
                            this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
                              debugger
                              localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
                              sessionStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('roledid', this.roledid);
                              localStorage.setItem('jdate', temp[0].joiningDate);
                              localStorage.setItem('staffid', temp[0].id);
                              localStorage.setItem('EmployeeID', temp[0].employeid);
                              localStorage.setItem('UserName', temp[0].name);
                              localStorage.setItem('email', temp[0].emailID);
                              localStorage.setItem('Department', temp[0].department_name);
                              localStorage.setItem('levelid', temp[0].levelid);
                              localStorage.setItem('Province', temp[0].district)
                              localStorage.setItem('shiftID', temp[0].shiftType);
                              localStorage.setItem('supervisor', temp[0].supervisor);
                              localStorage.setItem('OTEligibility', temp[0].ot);
                              sessionStorage.setItem('temp23', '1');
                              this.InsertLogActivity();
                              this.router.navigate(['/HR/Staffdashboard']).then(() => {
                                this.loader = false;
                                location.reload();
                              });
                            })


                          }
                        }, error: (err) => {
                          // Swal.fire('Issue in Getting My Details For Login');
                          // this.loader = false;
                          // Insert error in Db Here//
                          var obj = {
                            'PageName': this.currentUrl,
                            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                            'EmailId': localStorage.getItem('EmployeeID'),
                            'LoginType': localStorage.getItem('roledid'),
                            'API': 'Login APi for Staff'
                          }
                          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                            data => {
                              debugger
                            },
                          )
                        }
                      })
                  }
                  else {
                    /*    Swal.fire('Incorrect Username Or Password'); */
                    this.loader = false;
                    this.showPopup = 1;
                    this.messageId = 88
                  }

                }
                else {
                  /* Swal.fire('Username Does not Exist'); */
                  this.loader = false;
                  this.showPopup = 1;
                  this.messageId = 89
                }
              }


            }

          )




        }
      })






    }
  }



  public InsertLogActivity() {

    var options = { hour12: false };
    var date = new Date();
    var entity = {
      StaffID: localStorage.getItem('staffid'),
      EmployeeID: localStorage.getItem('staffid'),
      SigninDate: date.toLocaleString('en-US', options),
      SignoutDate: date.toLocaleString('en-US', options),
      punchinip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
      punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
      LoginType: localStorage.getItem('roledid'),
    }
    this.DigiofficeService.InsertLogActivity(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {

          }
        }, error: (err) => {
          // Swal.fire('Login Failed');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message == null ? err.message : err.error.message,
            'EmailId': localStorage.getItem('EmployeeID'),
            'LoginType': localStorage.getItem('roledid'),
            'API': 'InsertLogActivity'
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })

  }

  public SendOTP() {
    debugger;
    this.showPopup = 0
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          let temp: any = data.filter(x => (x.emailID === this.email));
          if (temp.length != 0) {
            this.otp = Math.floor(100000 + Math.random() * 900000);
            this.showotp = 1;
            var entity1 = {
              'emailto': this.email,
              'emailsubject': 'OTP for Resetting Your Password',
              'emailbody': this.otp + ' is your verification code for Reset Password.',
              'attachmenturl': this.Attactments,
              'cclist': this.email,
              'bcclist': this.email,
            }
            var entity2 = {
              'EmailID': this.email,
              'OTP': this.otp
            }
            this.DigiofficeService.sendemailattachements(entity1).subscribe((_res: any) => {
              debugger;
              this.Attactments = [];
            })
            this.DigiofficeService.Updateotp(entity2).subscribe((_res: any) => {
              debugger;

            })
          }
          else {
            /*   Swal.fire('This Email Address is Not Registered with HPM') */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 210;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
          // this.loader = false;
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

  public VerifyOTP() {
    debugger
    this.showPopup = 0;
    var entity2 = {
      'EmailID': this.email,
      'OTP': this.Otp
    }
    this.DigiofficeService.Verifyotp(entity2)
      .subscribe({
        next: data => {
          debugger
          if (data == 1) {
            this.showotp = 2;
          }
          else {
            if (this.Otp == '' || this.Otp == undefined || this.Otp == null) {
              /*    Swal.fire('OTP Field Cannot be Empty'); */
              this.loader = false;
              this.showPopup = 1
              this.messageId = 90
            }
            else {
              /* Swal.fire('OTP Mismatch'); */
              this.loader = false;
              this.showPopup = 1
              this.messageId = 91
            }
          }
        }, error: (err) => {
          // Swal.fire('Issue in Verifing OTP');
          // this.loader = false;
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

  getpassword() {
    debugger
    this.showPopup = 0
    this.loader = true;

    var entity = {
      'm0ucEgBZCmnxjEpj': 'XOxKhzxPTuKbEeYS',
      'jPsUmyVPIbCpPuf3': 'P@sn3JrYm5OyfhiDUxksw0rd',
    }
    this.DigiofficeService.Getantiforgerytoken(entity).subscribe((data: any) => {
      debugger
      localStorage.setItem('antiforgerytoken', btoa(data.antiForgeryToken));
      this.DigiofficeService.GetStaffDetailsByEmpIDandSSS(this.Empid, this.sssno)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length != 0) {
              this.password1 = temp[0].password;
              var entity1 = {
                'emailto': this.email,
                'emailsubject': 'Forgot Password',
                'emailbody': 'Hi  ' + temp[0].name + ', <br> Below is the Password for login into DigiOffice. <br><br>' + 'Password :  ' + this.password1 + '<br>  <br> Thanks <br> Team Digi-Office',
                'attachmenturl': this.Attactments,
                'cclist': this.email,
                'bcclist': this.email,
              }
              this.DigiofficeService.sendemailattachementsforemail(entity1)
                .subscribe({
                  next: data => {
                    debugger
                    this.Attactments = [];
                    /*      Swal.fire('Password sent to your email.'); */
                    this.loader = false;
                    this.showPopup = 1;
                    this.messageId = 92;
                  }, error: (err) => {
                    // Swal.fire('Issue in Sending Attachments For Email');
                    // this.loader = false;
                    // this.loader = false;
                    // Insert error in Db Here//
                    var obj = {
                      'PageName': this.currentUrl,
                      'ErrorMessage': err.error.message == null ? err.message : err.error.message,
                      'EmailId': localStorage.getItem('EmployeeID'),
                      'LoginType': localStorage.getItem('roledid'),
                      'API': 'Login APi for Staff'
                    }
                    this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                      data => {
                        debugger
                      },
                    )
                  }
                })

            }
            else {
              /*      Swal.fire('This Email is not found in the system'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 93;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Getting password');

            // this.loader = false;
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

    })


  }

  public Save() {
    var entity = {
      'username': 'Amaze',
      'Password': 'P@ssw0rd',
      'RoleID': 1
    }
    this.getpassword();
    // this.DigiofficeService.Authenicate(entity).subscribe((data: any) => {
    //   debugger
    //   if (data['requestMessage'] != undefined || null) {
    //     localStorage.setItem('token', data['requestMessage'].headers[0].value[0]);




    //   }
    // })


  }
  pp: any;
  public checkStrength(password: any) {
    var strength = 0;


    //If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;


    }

    //If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 1;

    }

    //If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;


    }
    if (password.length > 7) {
      strength += 1;
    }

    if (strength >= 4) {
      this.pp = 2;
    } else {
      this.pp = 1;
    }
    // Swal.fire('c' + strength);



    // If value is less than 2

    // if (strength < 2) {

    // } else if (strength == 2) {

    //   return 'Week'
    // } else if (strength == 4) {


    //   return 'Strong'
    // }

  }

  public getipaddress() {
    debugger
    this.DigiofficeService.getIPAddress()
      .subscribe({
        next: data => {
          debugger
          let temap: any = data;
          this.ipaddress = temap.ip;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting IP Address');
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