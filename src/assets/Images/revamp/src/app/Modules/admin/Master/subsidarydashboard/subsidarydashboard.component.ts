import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subsidarydashboard',
  templateUrl: './subsidarydashboard.component.html',
  styleUrls: ['./subsidarydashboard.component.css']
})

export class SubsidarydashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  subsidiarylist: any;
  term: any;
  SubsidaryList: any;
  ID: any;
  Name: any;
  Description: any;
  loader:any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.GetSubsidaryMaster();
  }

  public GetSubsidaryMaster() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetSubsidaryMaster()
      .subscribe({
        next: data => {
          debugger
          this.SubsidaryList = data;
          this.loader=false;
          this.subsidiarylist = data.filter(x => x.id == this.ID);
          this.Name = this.subsidiarylist[0].short
          this.Description = this.subsidiarylist[0].description
        }, error: (err) => {
          // Swal.fire('Issue in Getting Subsidary Master');
          // this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public DeleteSubsidaryMaster(ID: any) {
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: "Are you sure you want to delete? You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      debugger
      if (result.value == true) {
        this.DigiofficeService.DeleteSubsidaryMaster(ID)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Deleted Successfully')
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting SubsidaryMaster');
              // this.loader = false;
              // Insert error in Db Here//
              var obj = {
                'PageName': this.currentUrl,
                'ErrorMessage': err.error.message
              }
              this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                data => {
                  debugger
                },
              )
            }
          })
      }
    })
  }

}