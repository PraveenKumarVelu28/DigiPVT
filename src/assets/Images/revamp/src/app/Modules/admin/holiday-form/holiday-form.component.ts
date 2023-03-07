import { Component, Inject, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})

export class HolidayFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public dialogRef: MatDialogRef<HolidayFormComponent>, private activatedroute: ActivatedRoute, private datepipe: DatePipe,  @Inject(MAT_DIALOG_DATA) public ID: any) { }
  // ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  attachment: any;
  Citylist: any;
  CityID: any;
  attachment1: any;
  currentUrl: any;
  Type: any;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  Attachment: any;
  HolidayCategory: any;
  Region: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  Allcity: boolean = false;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.Allcity = false;
    this.HolidayCategory = 0;
    this.Region = 0;
    this.GetCityType();
    this.GetHolidays();
  }

  public GetCityType() {
    this.loader = true;
    this.DigiofficeService.GetCityType()
      .subscribe({
        next: data => {
          debugger
          this.Citylist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting City Type');
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
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      // this.ID = params['id'];
      this.loader = false;
      if (this.ID == undefined) {
        this.Holiday = '',
          this.HolidayDescription = ''
        this.loader = false;
      }
      else {
        this.DigiofficeService.GetHolidays()
          .subscribe({
            next: data => {
              debugger
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Holiday = this.leavelist[0].holiday
              this.HolidayDescription = this.leavelist[0].holidayDescription
              this.HolidayDate = this.datepipe.transform(this.leavelist[0].holidayDate, 'yyyy-MM-dd');
              this.attachment = this.leavelist[0].attachment;
              this.attachment1 = this.leavelist[0].attachment1;
              this.HolidayCategory = this.leavelist[0].holidayCategory;
              this.Region = this.leavelist[0].region;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Holiday');
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
    )
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    this.showPopup = 1;
    debugger
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    /* Swal.fire('Attachment Added Successfully'); */
    this.messageId = 12;
  }

  public Save() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.HolidayCategory == undefined || this.HolidayCategory == null || this.HolidayCategory == '' ||
      this.HolidayCategory == 0 || this.Holiday == null || this.Holiday == '' || this.Holiday == undefined ||
      this.Holiday == 0 || this.HolidayDescription == '' || this.HolidayDescription == undefined || this.HolidayDescription == null ||
      this.HolidayDate == '' || this.HolidayDate == undefined || this.HolidayDate == null || this.attachments21 == null || this.attachments21 == undefined
      || this.attachments21 == "") {
      /*   Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7
    } else {
      this.DigiofficeService.ProjectAttachments(this.attachments21)
        .subscribe({
          next: data => {
            debugger
            this.attachmentsurl.push(data);
            this.attachments21.length = 0;
            this.InsertHolidays();
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Project Attachments');
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

  public update() {
    debugger
    this.showPopup = 0;
    if (this.HolidayCategory == undefined || this.HolidayCategory == null || this.HolidayCategory == '' ||
      this.HolidayCategory == 0 || this.Holiday == null || this.Holiday == '' || this.Holiday == undefined ||
      this.Holiday == 0 || this.HolidayDescription == '' || this.HolidayDescription == undefined || this.HolidayDescription == null ||
      this.HolidayDate == '' || this.HolidayDate == undefined || this.HolidayDate == null || this.attachment == undefined) {
      /* Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7

    } else {
      this.loader = true;
      this.DigiofficeService.ProjectAttachments(this.attachments21)
        .subscribe({
          next: data => {
            debugger
            this.attachmentsurl.push(data);
            this.attachments21.length = 0;
            this.UpdateHolidays();
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Project Attachments');
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

  public InsertHolidays() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      Holiday: this.Holiday,
      HolidayDescription: this.HolidayDescription,
      HolidayDate: this.HolidayDate,
      Attachment: this.attachmentsurl[0],
      HolidayCategory: this.HolidayCategory,
      Region: this.Region
    }
    this.DigiofficeService.InsertHolidays(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /*  Swal.fire("Saved Successfully"); */
            this.SaveEmployeeAttendance_Holidays();
            location.href = "#/Admin/HolidayDashboard";
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Hoilday');
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
  stafflist: any;
  public SaveEmployeeAttendance_Holidays() {
    debugger
    this.DigiofficeService.GetAllStaffNew().
      subscribe({
        next: data => {
          debugger
          // this.stafflist = data;
          this.stafflist = data.filter(x => x.payrollBit == 0);

          for (let i = 0; i < this.stafflist.length; i++) {
            var obj = {
              'EmployeeID': this.stafflist[i].id,
              'Date': this.HolidayDate,
              'Holidaytype': this.HolidayCategory
            }
            this.DigiofficeService.InsertEmployeeAttendance_Holidays(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        }
      })
  }

  public UpdateHolidays() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      ID: this.ID,
      Holiday: this.Holiday,
      HolidayDescription: this.HolidayDescription,
      HolidayDate: this.HolidayDate,
      Attachment: this.attachmentsurl[0] == "" ? this.attachment1 : this.attachmentsurl[0],
      HolidayCategory: this.HolidayCategory,
      Region: this.Region
    }
    this.DigiofficeService.UpdateHolidays(entity)
      .subscribe({
        next: data => {
          debugger
          /*     Swal.fire("Updated Successfully"); */
          location.href = "#/Admin/HolidayDashboard";
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10
        }, error: (err) => {
          // Swal.fire('Issue in Updating Hoilday');
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

  public Cancel() {
    debugger
    this.ngOnInit();
    this.dialogRef.close(false);

  }

}