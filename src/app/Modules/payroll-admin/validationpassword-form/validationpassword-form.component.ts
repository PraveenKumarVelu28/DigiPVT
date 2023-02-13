import { Component, OnInit } from '@angular/core';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-validationpassword-form',
  templateUrl: './validationpassword-form.component.html',
  styleUrls: ['./validationpassword-form.component.css']
})
export class ValidationpasswordFormComponent implements OnInit {

  constructor( public DigiPVTService: DigiPVTService,private ActivatedRoute: ActivatedRoute ) { }
  MenuName : any
  Password : any
  id : any
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params: { [x: string]: any; }) => {
      debugger;
     this.id = params['id'];
      debugger;
      if (this.id != undefined) {
       this.GetValidationPassword1();
      } 
    });
   
  }

  public GetValidationPassword1(){
    debugger;
    this.DigiPVTService.GetValidationPassword().subscribe(data=>{
      let temp= data.filter(x=>x.id==this.id)
      this.MenuName=temp[0].menuName,
      this.Password= temp[0].password
    })
  }
  save (){
    var eb= {
      'MenuName': this.MenuName,
      'Password' : this.Password
    }
    this.DigiPVTService.InsertValidationPassword(eb).subscribe(data=>{
      Swal.fire('Saved Successfully')
      location.href = "#/PayrollAdmin/ValidationpasswordDashboard";
    })

  }

 
  update(){
    var eb= {
      'ID' :this.id,
      'MenuName': this.MenuName,
      'Password' : this.Password
    }
    this.DigiPVTService.UpdateValidationPassword(eb).subscribe(data=>{
      Swal.fire('Saved Successfully')
      location.href = "#/PayrollAdmin/ValidationpasswordDashboard";
    })


  }

}
