import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css']
})
export class SupportTicketsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private Activatedroute: ActivatedRoute) { }
  date: any;
  time: any;
  typeofissue: any;
  prority: any;
  screenShot: any = []
  comments: any;
  status: any;
  companyname: any;
  applicationName: any;
  id: any;
  companyID: any;
  ticketlist: any;
  SubsudiaryName: any
  staffID: any;
  loader: any;

  ngOnInit(): void {
    this.staffID = localStorage.getItem('staffid')
    this.date = new Date().toISOString().split("T")[0];

    this.companyID = sessionStorage.getItem('companyid');
    this.typeofissue = "0";
    this.prority = "0";
    this.ActivatedRouteCall();
  }

  public ActivatedRouteCall() {
    this.Activatedroute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetSupportTickets();
        this.loader = false;
      }
    })
  }

  public GetSupportTickets() {
    this.loader = true;
    this.DigiofficeService.GetSupportTickets().subscribe(
      data => {

        if (this.companyID == 1001) {
          this.SubsudiaryName = 'Asticom Main'
        }
        else if (this.companyID == 1002) {
          this.SubsudiaryName = 'Asticom ABSI (ABSI)'
        }
        else if (this.companyID == 1003) {
          this.SubsudiaryName = 'Asticom BRAD'
        }
        else if (this.companyID == 1004) {
          this.SubsudiaryName = 'Asticom HCX'
        }
        else if (this.companyID == 1005) {
          this.SubsudiaryName = 'Asticom FINSI'
        }
        else if (this.companyID == 1006) {
          this.SubsudiaryName = 'Asticom HQ'
        }
        this.loader = false;
        this.ticketlist = data.filter(x => x.companyname == this.SubsudiaryName && x.id == this.id);
        this.date = this.ticketlist[0].date,
          this.time = this.ticketlist[0].time1,
          this.typeofissue = this.ticketlist[0].typeOfApplicationIssues,
          this.prority = this.ticketlist[0].priority,
          this.screenShot[0] = this.ticketlist[0].screenShot,
          this.comments = this.ticketlist[0].comment

      }
    )
  }

  files: File[] = [];
  files1: File[] = [];
  showPopup: number = 0;
  messageId: number = 0;
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.files1.push(event.addedFiles[0]);
    console.log("content", this.files);

  }


  AttachmentsUpload() {
    this.showPopup = 0;
    this.DigiofficeService.AttachmentsUploadsss(this.files).subscribe(data => {
      debugger
      this.loader = false;
      this.screenShot.push(data);
      console.log("data", this.screenShot);

      if (this.companyID == 1001) {
        this.SubsudiaryName = 'Asticom Main'
      }
      else if (this.companyID == 1002) {
        this.SubsudiaryName = 'Asticom ABSI (ABSI)'
      }
      else if (this.companyID == 1003) {
        this.SubsudiaryName = 'Asticom BRAD'
      }
      else if (this.companyID == 1004) {
        this.SubsudiaryName = 'Asticom HCX'
      }
      else if (this.companyID == 1005) {
        this.SubsudiaryName = 'Asticom FINSI'
      }
      else if (this.companyID == 1006) {
        this.SubsudiaryName = 'Asticom HQ'
      }
      if (this.date == undefined || this.time == undefined || this.typeofissue == undefined
        || this.prority == undefined || this.comments == undefined || this.files.length == 0) {
        /*     Swal.fire('Please Fill All Fields'); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 7;
      }
      else {


        var entity = {
          "Date": this.date,
          "Time": this.time,
          "TypeOfApplicationIssues": this.typeofissue,
          "Priority": this.prority,
          "ScreenShot": this.screenShot[0],
          "Comment": this.comments,
          "Status": 'Raised',
          "TicketRaisedBy": localStorage.getItem('EmployeeID'),
          "Companyname": this.SubsudiaryName,
          "ApplicationName": 'DigiOfficeAsticom',
          "Role": 'Manager',
          "StaffID": localStorage.getItem('staffid'),
          "EmployeeID": localStorage.getItem('EmployeeID')
        }
        this.DigiofficeService.InsertSupportTickets(entity).subscribe(
          data => {
            this.ticketid = data;
            this.uploadmultipleimages()
            /*         Swal.fire("Saved Successfully"); */
            this.files.length = 0;
            location.href = "#/Shared/SupportTicketDashboard";
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
            this.date = '';
            this.time = '';
            this.typeofissue = '';
            this.prority = '';
            this.comments = '';

          }
        )
      }
    })
  }

  onRemove(event: any) {
    debugger
    console.log(event);
    this.files1.splice(this.files.indexOf(event), 1);


  }

  save() {
    debugger
    this.AttachmentsUpload();


  }
  ticketid: any
  public uploadmultipleimages() {
    this.showPopup = 0;
    debugger
    for (let i = 0; i < this.screenShot.length; i++) {
      var entity = {
        "Attachment": this.screenShot[i],
        "TicketID": this.ticketid,
      }
      this.DigiofficeService.InsertAttachment(entity).subscribe(
        data => {
          /*  Swal.fire("Uploaded Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 83;
        }
      )
    }
  }

  public Update() {
    this.showPopup = 0;
    debugger
    if (this.companyID == 1001) {
      this.SubsudiaryName = 'Asticom Main'
    }
    else if (this.companyID == 1002) {
      this.SubsudiaryName = 'Asticom ABSI (ABSI)'
    }
    else if (this.companyID == 1003) {
      this.SubsudiaryName = 'Asticom BRAD'
    }
    else if (this.companyID == 1004) {
      this.SubsudiaryName = 'Asticom HCX'
    }
    else if (this.companyID == 1005) {
      this.SubsudiaryName = 'Asticom FINSI'
    }
    else if (this.companyID == 1006) {
      this.SubsudiaryName = 'Asticom HQ'
    }
    var entity = {
      "id": this.id,
      "Date": this.date,
      "Time": this.time,
      "TypeOfApplicationIssues": this.typeofissue,
      "Priority": this.prority,
      "ScreenShot": this.screenShot[0],
      "Comment": this.comments,
      "Status": 'Open',
      "Companyname": this.SubsudiaryName,
      "ApplicationName": 'DigiOfficeAsticom',
      "Role": 'Manager',
      "StaffID": this.staffID
    }
    this.DigiofficeService.UpdateSupportTickets(entity).subscribe(

      data => {
        this.loader = false;
        this.ticketid = data;
        // this.uploadmultipleimages()
        /*    Swal.fire("Updated Successfully"); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 83;
        location.href = "#/Shared/SupportTicketDashboard";
        this.date = '';
        this.time = '';
        this.typeofissue = '';
        this.prority = '';
        this.comments = '';

      }
    )
  }

  public cancel() {
    location.href = "#/Shared/SupportTicketDashboard";
    this.loader = false;
  }
}

