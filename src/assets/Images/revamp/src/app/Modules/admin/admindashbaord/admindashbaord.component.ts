import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-admindashbaord',
  templateUrl: './admindashbaord.component.html',
  styleUrls: ['./admindashbaord.component.css']
})

export class AdmindashbaordComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  profilepercentage: any
  holidaylist: any
  showback: any;
  showfront: any;
  myDate: any;
  roleid: any;
  currentUrl: any;
  todaydate: any;
  annnounecemnetlist: any;
  announcementname: any;
  description: any;
  loader:any;

  async ngOnInit(): Promise<void> {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.myDate = new Date();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    this.roleid = localStorage.getItem('roleid');
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.GetAnnouncements();
    this.GetHolidays();
  }

  public GetAnnouncements() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetAnnouncementsByBuildingID(56)
      .subscribe({
        next: data => {
          debugger
          this.annnounecemnetlist = data.filter(x => x.filterdate >= this.todaydate);
          this.announcementname = this.annnounecemnetlist[0].name
          this.description = this.annnounecemnetlist[0].description
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Announcements');
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

  public GetHolidays() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetHolidays()
      .subscribe({
        next: data => {
          debugger
          this.holidaylist = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Holidays');
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

}