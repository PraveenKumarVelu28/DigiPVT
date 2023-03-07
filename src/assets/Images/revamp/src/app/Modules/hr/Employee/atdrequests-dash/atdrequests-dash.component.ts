import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-atdrequests-dash',
  templateUrl: './atdrequests-dash.component.html',
  styleUrls: ['./atdrequests-dash.component.css']
})

export class ATDRequestsDashComponent implements OnInit {

  constructor(private DigiofficeService: DigiofficecorehrService) { }
  loader: any
  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  stafflistCopy: any;
  Departmentlist: any;
  RoleTypeList: any;
  RoleType: any;
  Department: any;
  count: any;
  currentUrl: any;
  date: any;

  dropdownRoleList: any
  roleselectedItems: any = [];
  roledropdownSettings: any = {};

  dropdownDeptList: any 
  deptselectedItems: any = [];
  deptdropdownSettings = {};

  ngOnInit(): void {
    this.count1=0;
    this.count=0
    debugger
    this.currentUrl = window.location.href;

    this.Department = "0";
    this.RoleType = "";
    this.GetATDRequests();
    this.GetRoleType();
    this.GetDepartment();
    this.stafflist = [];

   
  }

  public GetATDRequests() {
    this.DigiofficeService.GetATDRequests()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.stafflistCopy = this.stafflist
          console.log("this.stafflistCopy",this.stafflistCopy)
          this.count = this.stafflist.length;
        }, error: (err) => {
          // Swal.fire('Issue in Getting ATD Requests');
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
  public GetDepartment() {
    this.DigiofficeService.GetDepartment().
      subscribe({
        next: data => {
          debugger
          this.dropdownDeptList = data;

          this.deptdropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'department_name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            closeDropDownOnSelection:true
          };

        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
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

  public GetRoleType() {
    this.DigiofficeService.GetRoleType().
      subscribe({
        next: data => {
          debugger
          this.dropdownRoleList = data;
          this.roledropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'short',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            closeDropDownOnSelection:true
          };


        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
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


  roleonItemSelect(item: any) {
    debugger
    console.log(item);
    this.RoleType = item.id;
  this.FilterRoleType();
  }


  // public getRoleType(event: any) {
  //   debugger
  //   this.RoleType = event.target.value;
  // }

  public FilterRoleType() {
    debugger
    if (this.RoleType == "") {
      this.DigiofficeService.GetATDRequests()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data;
            this.stafflistCopy = this.stafflist
            this.count = this.stafflist.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting ATDRequests');
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
    } else {
      this.DigiofficeService.GetATDRequests()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.role == this.RoleType);
            this.count = this.stafflist.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting ATDRequests');
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
  }
 
  deptonItemSelect(item: any) {
    debugger
    console.log(item);
    this.Department = item.id;
    this.filterByDepartment();
  }
  public filterByDepartment() {
    debugger
    if (this.Department == 0) {
      this.DigiofficeService.GetATDRequests()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data;
            this.stafflistCopy = this.stafflist
            this.count = this.stafflist.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting ATDRequests');
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
    } else {
      this.DigiofficeService.GetATDRequests()
        .subscribe({
          next: data => {
            debugger
            this.stafflist = data.filter(x => x.department_name == this.Department);
            this.count = this.stafflist.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting ATDRequests');
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
  }

  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigiofficeService.GetATDRequests()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.filterdate == this.date);
        }, error: (err) => {
          // Swal.fire('Issue in Getting ATDRequests');
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

  public Filterstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.stafflist = this.stafflistCopy.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
    this.count = this.stafflist.length;
  }

}