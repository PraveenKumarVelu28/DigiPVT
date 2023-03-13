import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
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
  term:any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;
  loader : any
  ngOnInit(): void {
    this.loader=false
    this.GetComponentMapping();
    
  }
 
  public GetComponentMapping(){
    this.DigiPVTService.GetComponentMapping().subscribe(data => {
      debugger
      this.componentmapping = data;
      this.loader=false
      
    console.log("ComponentMapping",this.componentmapping);
    });
  }


  
  
  incomingfile(event: any) {
    debugger;
    this.file = event.target.files[0];
    let a = this.file.name;
    var characters = a.substr(a.length - 5);
    debugger;
    if (characters == ".xlsx" || characters == ".XLSX") {
      let fileReader = new FileReader();
      fileReader.onload = e => {
        debugger
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
        this.exceldata = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      };
      fileReader.readAsArrayBuffer(this.file);
    } else {
      Swal.fire("Imported file format not supported.");
    }
  }

  i:any;
  public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];
      for (this.i = 0; this.i < this.exceldata.length; this.i++) {
                   
        
        var entity = {
          PayrollComponentType:  this.exceldata[this.i].ComponentType,
          Code:  this.exceldata[this.i].ComponentCode,
          ComponentName: this.exceldata[this.i].ComponentName,
          TaxFlag:this.exceldata[this.i].Taxed == 'No' ? 0 : 1,
          NinetyThousandTaxExemption:this.exceldata[this.i].TaxExemption == 'No' ? 0 : 1,
          Effects: 'sss',
          PayrollPeriod: this.exceldata[this.i].PayrollPeriod,
          Effeactivedate:  '1993-07-22 00:00:00.000',
          EndDate: '1993-07-22 00:00:00.000',
          Enable: 1,
          PrintOnPaySlip:1,
          Formula: this.exceldata[this.i].Bir2316Mapping ,
          Amount:5666,
          Type2:1,
          PaycodeID : 1
        };

          this.DigiPVTService.InsertComponentMapping(entity).subscribe({

            next: data => {
            debugger
          
              Swal.fire('Saved Successfully')
              this.ngOnInit();
              this.loader=false
            // // this.SavePositionDetails();
            // var eb = {
            //   'EmergencyContactName': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactName,
            //   'EmergencyContactRelationship': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactRelationship,
            //   'EmergencyContactMobileNumber': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactMobileNumber,
            //   'StaffID':  this.StaffID
            // }
            // this.i++;
            // this.AliprojectService.InsertMyAddressDetails(eb).subscribe(
              
            //   data => {
            //     debugger
            //     Swal.fire('Staffs Added Successfully');
            //     // this.router.navigate(['/EmployeeDashboard']);
      
            //   },
            // )
 
          }, error: (err) => {
            Swal.fire('Issue in Inserting Attendance Units');
            // Insert error in Db Here//         
          }
        }
        )
      }
    }
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
              this.loader=false
            }
          })
      }
    })
  }
}
