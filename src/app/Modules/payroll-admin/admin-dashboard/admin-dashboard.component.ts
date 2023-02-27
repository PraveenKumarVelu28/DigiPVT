import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { DatePipe, NgStyle } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigiPVTService, public router: Router,public datepipe: DatePipe) { }
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
  Attachment:any;
  count:any;

  async ngOnInit(): Promise<void> {

    this.currentUrl = window.location.href;
    this.loader=true;
    this.myDate = new Date();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    this.roleid = localStorage.getItem('roleid');
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.GetHolidays();
    this.GetAnnouncements();
    
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
            this.Attachment = this.annnounecemnetlist[0].attachment
            this.description = this.annnounecemnetlist[0].description
            this.loader=false;
            this.count=this.annnounecemnetlist.length
           
        
        }, error: (err) => {
          // Swal.fire('Issue in Getting Announcements');
          // this.loader = false;
         
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
  HAttachment:any;
  HolidayName:any;

  HAttachment1:any;
  HolidayName1:any;
  HolidayDate1:any;
  HolidayDate:any;
  public GetHolidays() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetHolidays()
      .subscribe({
        next: data => {
          debugger
          this.holidaylist = data;
          this.HolidayName = this.holidaylist[0].holiday
          this.HAttachment = this.holidaylist[0].attachment
          this.HolidayDate=this.datepipe.transform(this.holidaylist[0].holidayDate, 'yyyy-MM-dd')

          this.HolidayName1 = this.holidaylist[1].holiday
          this.HAttachment1 = this.holidaylist[1].attachment
          this.HolidayDate1=this.datepipe.transform(this.holidaylist[1].holidayDate, 'yyyy-MM-dd')

          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Holidays');
          // this.loader = false;
         
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