import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support-ticket-dashboard',
  templateUrl: './support-ticket-dashboard.component.html',
  styleUrls: ['./support-ticket-dashboard.component.css']
})
export class SupportTicketDashboardComponent implements OnInit {
  viewMode = 'tab1';
  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute) { }

  loader: any;
  ticketlist: any;
  ticketlist1: any;
  ticketlist2: any;
  search: any;
  count: any;
  companyID: any;
  SubsudiaryName: any;
  login: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.login = sessionStorage.getItem('roledid');
    this.companyID = sessionStorage.getItem('companyid');
    this.loader = true;
    this.GetSupportTickets();
  }

  public GetSupportTickets() {
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
    debugger
    this.DigiofficeService.GetSupportTickets().subscribe(

      data => {
        this.loader = false;
        this.ticketlist = data.filter(x => x.companyname == this.SubsudiaryName && x.staffID == localStorage.getItem('staffid'));
        this.ticketlist1 = data.filter(x => x.companyname == this.SubsudiaryName && (x.status == 'Open' || x.status == 'accepted') && x.staffID == localStorage.getItem('staffid'));
        this.ticketlist2 = data.filter(x => x.companyname == this.SubsudiaryName && (x.status == 'rejected' || x.status == 'closed') && x.staffID == localStorage.getItem('staffid'));
        this.count = this.ticketlist.length;
      }
    )
  }


  attachmentlist: any;
  image(id: any) {
    debugger
    this.DigiofficeService.GetSupportAttachment().subscribe(
      data => {
        debugger
        this.attachmentlist = data.filter(x => x.ticketID == id);
        this.loader = false;
      }
    )

  }
  supportid: any;
  public UpdateAttachment(id: any) {
    this.supportid = id;
    this.loader = false;
  }
  Update() {
    this.showPopup = 0;
    debugger
    var entity = {
      "ID": this.supportid,
      "Attachment": this.screenShot[0]
    }
    this.DigiofficeService.UpdateAttachment(entity).subscribe(
      data => {
        /*  Swal.fire('Updated Successfully'); */
        location.reload();
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 10
      }

    )
  }

  files: File[] = [];
  files1: File[] = [];
  screenShot: any = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.files1.push(event.addedFiles[0]);

    console.log("content", this.files);
    this.AttachmentsUpload()
  }

  AttachmentsUpload() {
    this.DigiofficeService.AttachmentsUploadsss(this.files).subscribe(data => {
      debugger
      this.loader = false;
      this.screenShot.push(data);
      console.log("data", this.screenShot);
      this.files.length = 0;
    })
  }

  onRemove(event: any) {
    debugger
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public DeleteSupportTickets(ID: any) {
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteSupportTickets(ID).subscribe(data => {
          debugger
          /*  Swal.fire('Deleted Successfully') */
          location.reload();
          this.showPopup = 1;
          this.messageId = 11
        })
      }
    })
  }

  comments : any
  view(desc:any){
    this.comments=desc;
    
  }

  Usercomment:any;
  viewUserComments(user:any){
    this.Usercomment=user;
    
  }

}


