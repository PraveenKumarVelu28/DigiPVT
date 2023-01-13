import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-component-mapping-dashboard',
  templateUrl: './component-mapping-dashboard.component.html',
  styleUrls: ['./component-mapping-dashboard.component.css']
})
export class ComponentMappingDashboardComponent implements OnInit {

  componentmapping:any;
  constructor(private DigiPVTService: DigiPVTService,private router: Router) { }
  p1: any = 1;
  count2: any = 10;

  ngOnInit(): void {
    this.GetComponentMapping();
   
  }
  term:any;
  public GetComponentMapping(){
    this.DigiPVTService.GetComponentMapping().subscribe(data => {
      debugger
      this.componentmapping = data;
      
    console.log("ComponentMapping",this.componentmapping);
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
        this.DigiPVTService.DeleteComponentMapping(ID)
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
