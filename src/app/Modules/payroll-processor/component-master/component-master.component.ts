import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var JSZipUtils: any;
@Component({
  selector: 'app-component-master',
  templateUrl: './component-master.component.html',
  styleUrls: ['./component-master.component.css']
})
export class ComponentMasterComponent implements OnInit {

 
  constructor(public DigiPVTService: DigiPVTService, public router: Router) { }
  componentmaster: any;
  id : any;
  term:any;
  p1: any = 1;
  count2: any = 10;




  ngOnInit(): void {
    debugger
    this.GetComponentMaster();
    
  }


  public GetComponentMaster(){
    debugger
    this.DigiPVTService.GetComponentMaster().subscribe(data => {
      debugger
      this.componentmaster = data;
      console.log("componentmaster", this.componentmaster);
    });
  
  }
 

  fileName = 'Attendance Report.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

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
        this.DigiPVTService.DeleteComponentMaster(ID)
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
