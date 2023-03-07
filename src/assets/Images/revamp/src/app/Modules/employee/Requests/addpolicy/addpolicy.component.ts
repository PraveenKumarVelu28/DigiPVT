import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})

export class AddpolicyComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe, public router: Router) { }
  FolderID: any;
  pagename: any;
  loader: any;
  currentUrl: any;
  Date: any;
  Documnet_Name: any;
  Documnet_Description: any;
  Version: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.pagename = localStorage.getItem('Pagename')
    this.ActivatedRouteCall();
  }

  public ActivatedRouteCall() {
    debugger
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.FolderID = params['id'];
      this.loader = false;
    })
  }

  onRemove21(event: any) {
    debugger
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.attachments21.push(...event.addedFiles);
  }

  public Save() {
    debugger
    this.loader = true;
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: data => {
          debugger
          this.attachmentsurl.push(data);
          this.attachments.length = 0;
          this.loader = false;
          this.InsertPolicies();
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Project Attachments');
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

  public InsertPolicies() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      Date: this.Date,
      Documnet_Name: this.Documnet_Name,
      Documnet_Description: this.Documnet_Description,
      Version: this.Version,
      Attachment: this.attachmentsurl[0],
      FolderID: this.FolderID
    }
    this.DigiofficeService.InsertPolicies(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /* Swal.fire("Saved Successfully"); */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
            // location.href = "#/Policydashbaord/";
            this.router.navigate(['/Employee/Policydashbaord', this.FolderID]);
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Policies');
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

  public Cancel() {
    location.href = "#/Employee/Company-policy";
    this.loader = false;
  }

}