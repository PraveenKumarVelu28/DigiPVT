import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
declare var JSZipUtils: any;
@Component({
  selector: 'app-validated-holiday-en-cashments',
  templateUrl: './validated-holiday-en-cashments.component.html',
  styleUrls: ['./validated-holiday-en-cashments.component.css']
})
export class ValidatedHolidayEnCashmentsComponent implements OnInit {

  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }

  ngOnInit(): void {

    this.GetValidatedHolidayEncashments();
  }

  timedetails:any;
  count:any;
  currentUrl:any;
  term:any;
  p: any = 1;
  count1: any = 10;

  public GetValidatedHolidayEncashments() {
    debugger
    this.DigiofficeService.GetValidatedHolidayEncashments()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data;

          this.count = this.timedetails.length
        }, error: (err) => {
          Swal.fire('Issue in Getting Staff Over Time Details');
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
