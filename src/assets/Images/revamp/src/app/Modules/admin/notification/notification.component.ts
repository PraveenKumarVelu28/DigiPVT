import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  loader: any;
  staffID: any;
  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.staffID = localStorage.getItem('staffid');
    this.GetNotification();
  }
  notificationslist: any;

  public GetNotification() {
    debugger

    this.DigiofficeService.GetNotification(this.staffID).subscribe((data: any) => {
      debugger
      this.loader=true;
      this.notificationslist = data;
      this.loader=false;

    })
  }
  public changecolor(ID: any) {
    debugger
    var entity = {
      ID: ID
    }
    this.DigiofficeService.UpdateNotificationSeen(entity).subscribe((_data: any) => {
      this.GetNotification();
    })
  }

}
