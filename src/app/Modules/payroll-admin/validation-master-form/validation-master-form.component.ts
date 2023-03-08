import { Component, OnInit } from '@angular/core';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-validation-master-form',
  templateUrl: './validation-master-form.component.html',
  styleUrls: ['./validation-master-form.component.css']
})
export class ValidationMasterFormComponent implements OnInit {

  constructor( public DigiPVTService: DigiPVTService,private ActivatedRoute: ActivatedRoute ) { }
  Short : any ;
  Description : any ;
  id : any ;
  companyid : any ;
  ngOnInit(): void {
    this.Short = 0;
    this.companyid = sessionStorage.getItem('companyid');
    this.ActivatedRoute.params.subscribe((params: { [x: string]: any; }) => {
      debugger;
     this.id = params['id'];
      debugger;
      if (this.id != undefined) {
       this.GetValidationMaster1();
      } 
    });
   
  }

  public GetValidationMaster1(){
    debugger;
    this.DigiPVTService.GetValidationMaster().subscribe(data=>{
      let temp= data.filter(x=>x.id==this.id)
      this.Short=temp[0].short,
      this.Description= temp[0].description
    })
  }
  save (){
    debugger
    var eb= {
      'Short': this.Short,
      'Description' : this.Description
    }
    this.DigiPVTService.InsertValidationMaster(eb).subscribe(data=>{
      Swal.fire('Saved Successfully')
      location.href = "#/PayrollAdmin/ValidationMasterDashboard";
    })
  }

 
  update(){
    debugger
    var eb= {
      'ID' :this.id,
      'Short': this.Short,
      'Description' : this.Description
    }
    this.DigiPVTService.UpdateValidationMaster(eb).subscribe(data=>{
      Swal.fire('Updated Successfully')
      location.href = "#/PayrollAdmin/ValidationMasterDashboard";
    })


  }
  validation : any
  public GetValidationMaster(){
    this.DigiPVTService.GetValidationMaster().subscribe(data => {
      debugger
      this.validation = data;
      console.log("validation", this.validation);
    });
  }

}
