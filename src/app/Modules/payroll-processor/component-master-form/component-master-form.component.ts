import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-component-master-form',
  templateUrl: './component-master-form.component.html',
  styleUrls: ['./component-master-form.component.css']
})
export class ComponentMasterFormComponent implements OnInit {
  Name : any
  Description : any
  loader: any;
  id : any
  ID : any
  submit : any
  ActivatedRoute: any;
  constructor(public DigiPVTService: DigiPVTService, public router: Router, public activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      debugger;
     this.id = params['id'];
      debugger;
      if (this.id != undefined) {
        this.GetComponentMaster1();
      } 
    });
  }



  public GetComponentMaster1(){
    debugger;
    this.DigiPVTService.GetComponentMaster().subscribe(data=>{
      let temp= data.filter(x=>x.id==this.id)
      this.Name=temp[0].name,
      this.Description= temp[0].description
    })
  }


public save(){
    var eb= {
      'Name': this.Name,
      'Description' : this.Description
    }
    this.DigiPVTService.InsertComponentMaster(eb).subscribe(data=>{
      Swal.fire('Saved Successfully')
      location.href = "#/PayrollProcessor/ComponentMaster";
    })
  
 
 }

public update(){
  var eb= {
    'ID':this.id,
    'Name': this.Name,
    'Description' : this.Description
  }
  this.DigiPVTService.UpdateComponentMaster(eb).subscribe(data=>{
    Swal.fire('Updated Successfully')
    location.href = "#/PayrollProcessor/ComponentMaster";
  })
}
} 

