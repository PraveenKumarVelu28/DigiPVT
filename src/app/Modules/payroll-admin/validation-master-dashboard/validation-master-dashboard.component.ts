import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-master-dashboard',
  templateUrl: './validation-master-dashboard.component.html',
  styleUrls: ['./validation-master-dashboard.component.css']
})
export class ValidationMasterDashboardComponent implements OnInit {

  constructor(public DigiPVTService: DigiPVTService, public router: Router ) { }
  validation : any
  term : any
  p:any=1;
  count1 : any=10	
  ngOnInit(): void {
    this.GetValidationMaster()

  }
  public GetValidationMaster(){
    this.DigiPVTService.GetValidationMaster().subscribe(data => {
      debugger
      this.validation = data;
      console.log("validation", this.validation);
    });
  }

  edit(ID : any){
    location.href='#/PayrollAdmin/ValidationMasterForm'
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
        this.DigiPVTService.DeleteValidationMaster(ID)
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
