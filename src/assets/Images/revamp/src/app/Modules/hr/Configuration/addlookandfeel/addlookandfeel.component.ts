import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { timeStamp } from 'console';

@Component({
  selector: 'app-addlookandfeel',
  templateUrl: './addlookandfeel.component.html',
  styleUrls: ['./addlookandfeel.component.css']
})

export class AddlookandfeelComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  companyLogo: any;
  currentUrl: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  ButtonColor: any;
  HeaderColor: any;
  FontName: any
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.ActivatedRouterCall();
  }

  public ActivatedRouterCall() {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Holiday = '',
          this.HolidayDescription = ''
      }
      else {
        this.DigiofficeService.GetCompanyConfiguration()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.ButtonColor = this.leavelist[0].buttonColor
              this.HeaderColor = this.leavelist[0].headerColor;
              this.FontName = this.leavelist[0].fontName;
              this.companyLogo = this.leavelist[0].companyLogo
            }, error: (err) => {
              // Swal.fire('Issue in Getting Company Configuration');
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
    })
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger;

    console.log(event);
    this.attachments21.push(...event.addedFiles);/* 
    Swal.fire('Attachment Added Successfully'); */
    this.showPopup = 1;
    this.messageId = 12;
  }

  public Save() {
    debugger
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: res => {
          debugger
          this.attachmentsurl.push(res);
          this.attachments.length = 0;
          this.InsertHolidays();
        }, error: (err) => {
          // Swal.fire('Issue in Project Attachments');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe({
            next: data => {
              debugger
            },
          })
        }
      })
  }

  public Save2() {
    debugger
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: res => {
          debugger
          this.attachmentsurl.push(res);
          this.attachments.length = 0;
          this.UpdateHolidays();
        }, error: (err) => {
          // Swal.fire('Issue in Project Attachments');
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

  public InsertHolidays() {
    debugger;
    this.showPopup = 0;
    var entity = {
      CompanyLogo: this.attachmentsurl[0],
      HeaderColor: this.HeaderColor,
      ButtonColor: this.ButtonColor,
      FontName: this.FontName,
    }
    this.DigiofficeService.InsertCompanyConfiguration(entity)
      .subscribe({
        next: data => {
          if (data != 0) {
            /*  Swal.fire("Saved Successfully"); */
            this.showPopup = 1;
            this.messageId = 8;
            location.href = "#/HR/Lookandfeeldash";
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Company Configuration');
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

  public UpdateHolidays() {
    debugger;
    this.showPopup = 0;
    var entity = {
      ID: this.ID,
      CompanyLogo: this.attachmentsurl[0],
      HeaderColor: this.HeaderColor,
      ButtonColor: this.ButtonColor,
      FontName: this.FontName,
    }
    this.DigiofficeService.UpdateCompanyConfiguration(entity)
      .subscribe({
        next: data => {
          /*  Swal.fire("Updated Successfully"); */
          this.showPopup = 1;
          this.messageId = 10;
          location.href = "#/HR/Lookandfeeldash";
        }, error: (err) => {
          // Swal.fire('Issue in Updating Company Configuration');
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