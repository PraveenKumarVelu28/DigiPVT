import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';

@Component({
  selector: 'app-exitformalityform',
  templateUrl: './exitformalityform.component.html',
  styleUrls: ['./exitformalityform.component.css']
})

export class ExitformalityformComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  stafflist: any;
  dropdownList: any = [];
  Type: any
  loader: any
  selectedItems: any = [];
  dropdownSettings: any = {};
  mindate: any;
  StaffID: any;
  Notes: any;
  lastworkingdate: any;
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.mindate = new Date().toISOString().split("T")[0];
    this.Type = "Select Type";
    this.GetMyDetails();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }

  public GetMyDetails() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.StaffID = item.id;
  }

  public save() {
    debugger
    this.showPopup = 0;
    var eb = {
      'StaffID': this.StaffID,
      'Notes': this.Notes,
      'lastworkingdate': this.lastworkingdate,
      'type': this.Type
    }
    this.DigiofficeService.InsertStaffExitFormality(eb)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire('Saved successfully.'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
          this.router.navigate(['/Manager/Exitformalityformdash']);
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Staff Exit Formality');
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
    this.router.navigate(['/Manager/Exitformalityformdash']);
  }

}