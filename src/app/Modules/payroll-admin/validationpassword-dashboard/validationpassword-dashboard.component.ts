import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validationpassword-dashboard',
  templateUrl: './validationpassword-dashboard.component.html',
  styleUrls: ['./validationpassword-dashboard.component.css']
})
export class ValidationpasswordDashboardComponent implements OnInit {
  

  constructor(public DigiPVTService: DigiPVTService, public router: Router ) { }
  validation : any
  ngOnInit(): void {
    this.GetValidationPassword()

  }
  public GetValidationPassword(){
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data;
      console.log("validation", this.validation);
    });
  }

  edit(ID : any){
    location.href='#/PayrollAdmin/ValidationpasswordForm'
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
        this.DigiPVTService.DeleteValidationPassword(ID)
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
