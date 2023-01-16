import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payperiod-settings-dash',
  templateUrl: './payperiod-settings-dash.component.html',
  styleUrls: ['./payperiod-settings-dash.component.css']
})
export class PayperiodSettingsDashComponent implements OnInit {
  constructor(public DigiofficeService: DigiPVTService, public router: Router) { }
  PayPeriodSettingList: any
  id : any
  p1: any = 1;
  count2: any = 10;
  term : any


  ngOnInit(): void {
    debugger
    this.GetPayPeriodSetting();
    
  }


  public GetPayPeriodSetting(){
    debugger
    this.DigiofficeService.GetPayPeriodSetting().subscribe(data => {
      debugger
      this.PayPeriodSettingList = data;
      console.log("componentmaster", this.PayPeriodSettingList);
    });
  
  }
 
  
  public delete(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeletePayPeriodSetting(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              location.reload();
            }
          })
      }
    })
  }


  
}
