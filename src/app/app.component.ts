import { Component } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from './Pages/Services/digi-pvt.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiPVT';
  hasNetworkConnection: boolean = false;
  hasInternetAccess: boolean = false;
  status: string | undefined;

  constructor(public router: Router, public DigiPVTService: DigiPVTService,) {
    // this.connectionService.updateOptions({
    //   heartbeatExecutor: options => new Observable<any>(subscriber => {
    //     if (Math.random() > .5) {
    //       subscriber.next();
    //       subscriber.complete();
    //     } else {
    //       throw new Error('Connection error');
    //     }
    //   })
    // });

    // this.connectionService.monitor().subscribe(currentState => {
    //   this.hasNetworkConnection = currentState.hasNetworkConnection;
    //   this.hasInternetAccess = currentState.hasInternetAccess;
    //   if (this.hasNetworkConnection && this.hasInternetAccess) {
    //     this.status = 'ONLINE';
    //   } else {
    //     this.status = 'OFFLINE';
    //   }
    // });
  }


  login: any;
  chatcount: any;
  myname: any;
  staffID: any;
  pagename: any;
  showsidebar: any;
  time: any;
  hh: any;
  mm: any;
  ampm: any;
  username: any;
  officelogo: any;
  CompanyConfiguration: any;
  temp1: any;
  ngOnInit(): void {



    // interval(100000000000).subscribe(((_x: any) => {
    //   this.pagename = localStorage.getItem('Pagename')
    //   this.DigiofficeService.GetCompanyConfiguration().subscribe((data: any) => {

    //     this.CompanyConfiguration = data;
    //     let header = document.getElementById('dynamiccss') as HTMLElement;
    //     header.style.backgroundColor = this.CompanyConfiguration[0].headerColor;
    //     this.officelogo = this.CompanyConfiguration[0].companyLogo;
    //     let button = document.getElementsByTagName('button') as unknown as HTMLElement;
    //     button.style.backgroundColor = this.CompanyConfiguration[0].buttonColor;

    //   })

    // }));

    this.staffID = localStorage.getItem('staffid');
    this.temp1 = localStorage.getItem('temp');
    this.login = localStorage.getItem('roledid');
    this.username = localStorage.getItem('UserName');

    // setInterval(() => {
    //   var time = new Date();
    //   this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
    //   let temp: any = this.time.split(':');
    //   this.hh = temp[0];
    //   let temp1: any = this.time.split(':')[1].split(" ");
    //   this.mm = temp1[0];
    //   this.ampm = temp1[1];
    // }, 1000);


    if (localStorage.length == 0) {
      this.showsidebar = 0
    }
    else {
      this.showsidebar = 1
    }
    // this.GetNotification();


    // this.DigiPVTService.GetMyDetailsByStaffID(this.staffID).subscribe((res: any) => {
    //   //debugger
    //   let temp: any = res;
    //   this.myname = temp[0].name;
    //   this.initail = this.myname.charAt(0);
    // });


  }


  public swal() {
    Swal.fire({
      title: 'Access Salary',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        //debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 1111) {
          location.href = '#/Staffsalarydash'

        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)

        }
      }
    })
  }



  initail: any
  notificationslist: any
  notificationCount: any;
  notificationslistforCount:any;
  uniquelist:any;
  notificationslist1:any;
  notificationCount1:any;

  // public GetNotification() {
  //   //debugger

  //   this.DigiPVTService.GetNotification(this.staffID).subscribe((data: any) => {
  //     //debugger
  //     this.notificationslist = data;
  //     this.notificationslist1 = data.filter((x: { seen: number; }) => x.seen == null);
  //     this.uniquelist = data.filter((x: { seen: number; }) => x.seen == null);

  //     const key = 'message';

  //     this.uniquelist = [...new Map(this.notificationslist.map((item: { [x: string]: any; }) =>

  //       [(item[key]), item])).values()]

  //     this.notificationCount = this.uniquelist.length;
  //     this.notificationCount1 = this.notificationslist1.length;
  //     this.ngOnInit();
  //   })
  // }

  public ClearNotification() {
    //debugger
    this.DigiPVTService.ClearNotificationByID(Number(this.staffID)).subscribe((_data: any) => {
      //debugger
    })

    Swal.fire('Cleared Successfully');
    location.reload();
    // this.GetNotification();
  }


  public onActivate(event: any) {
    window.scroll(0, 0);
  }
  show: any;

  public changecolor(ID: any) {
    //debugger
    var entity = {
      ID: ID
    }
    this.DigiPVTService.UpdateNotificationSeen(entity).subscribe((_data: any) => {
      location.reload();
    })
  }

  loader: any;
  public logout() {
    debugger
    this.loader = true;
    localStorage.setItem('roledid', "0");
    this.router.navigate(['/login']).then(() => {
      location.reload();
      localStorage.clear();
      sessionStorage.clear();

    })
  }

  public accountsetting() {
    //debugger
    this.router.navigate(['/Shared/MyAccountSetting']);
  }

  public Clearstorge() {
    sessionStorage.setItem('temp', '0');
    location.reload();
  }
}
