import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payroll-triggger',
  templateUrl: './payroll-triggger.component.html',
  styleUrls: ['./payroll-triggger.component.css']
})
export class PayrollTrigggerComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public sanitizer: DomSanitizer, public HttpClient: HttpClient) {
    this.payslip = this.sanitizer.bypassSecurityTrustResourceUrl(this.payslip);
    this.searchUrl(this.payslip);
  }
  Payperiod: any;
  Month: any;
  Year: any;
  loader: boolean = false;
  showpdf: boolean = false;
  filename: any;
  ngOnInit(): void {
    this.payslip = '';
    this.Year = 0;
    this.Month = 0;
    this.Payperiod = 0;
  }


  public getpayperiod() {
    debugger
    this.filename = '01002' + '_ASTI_' + this.Year.substring(2, 4) + this.Month + 15;
    console.log(this.filename);
    this.searchUrl(this.Year + '/' + this.monthName(this.Month) + '/' + this.Payperiod + '/' + this.filename);
    this.getpayslip();
  }
  monthName(mon: number) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];
  }
  fileurl: any


  payslip: any;
  public getpayslip() {
    debugger
    this.DigiofficeService.GetPayslipByMonthandStaffID(this.Year, this.Month, this.Payperiod, this.filename).
      subscribe({
        next: data => {
          //debugger
          this.loader = true;
          this.payslip = this.sanitizer.bypassSecurityTrustResourceUrl(data[0].payslip);


          this.loader = false;
        }, error: (err) => {

        }
      })
    this.loader = false;


  }


  public oniFrameLoad(event: Event) {
    debugger

    var iframe = document.getElementById('id_description_iframe');

  }

  public searchUrl(url: any) {
    debugger


    this.DigiofficeService.CheckFileUrl(url + '.pdf').
      subscribe({
        next: data => {
          //debugger
          let a: any = data;
          console.log('File Exist', data)
          if (a == 1) {
            this.showpdf = true
          } else {
            this.showpdf = false;
          }
          this.loader = false;
        }, error: (err) => {

        }
      })
  }

  public onError() {
    debugger
    Swal.fire('error')
  }

  public PayrollTriggger() {
    Swal.fire('Trigger Completed Successfully');
  }


}
