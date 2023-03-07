import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})

export class OrgchartComponent implements OnInit {

  constructor(private DigiofficeService: DigiofficecorehrService) { }
  currentUrl: any;
  newaaray: any
  employeedata: any;
  tree: any = [];
  roleid: any;
  levelid: any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.levelid = localStorage.getItem('levelid');
    this.roleid = localStorage.getItem('roledid')
    this.GetMyDetails();
  }

  public GetMyDetails() {
    if (this.roleid == 2) {
      var LTT = require('list-to-tree');
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            let data1 = data.filter(x => (x.id == localStorage.getItem('staffid') || x.levelid < this.levelid) && x.parentID > 0);
            var ltt = new LTT(data1, {
              key_id: 'parentID',
              key_parent: 'parent'
            });
            this.tree = ltt.GetTree();
          }, error: (err) => {
            // Swal.fire('Issue in Getting My Details');
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
    else {
      var LTT = require('list-to-tree');
      this.DigiofficeService.GetMyDetails()
        .subscribe({
          next: data => {
            debugger
            let data1 = data.filter(x => (x.id == localStorage.getItem('staffid') || x.levelid < this.levelid) && x.parentID > 0);
            var ltt = new LTT(data1, {
              key_id: 'parentID',
              key_parent: 'parent'
            });
            this.tree = ltt.GetTree();
          }, error: (err) => {
            // Swal.fire('Issue in Getting My Details');
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

  public generateChild = (arr: any[]) => {
    return arr.reduce((acc, val, ind, array) => {
      const childs: any = [];
      array.forEach((el, i) => {
        if (childs.includes(el.supervisor) || el.supervisor === val.id) {
          var obj = {
            name: el.name,
            cssClass: 'ngx-org-ceo',
            image: 'assets/node.svg',
            title: el.role,
            childs: [
              {
                name: 'David Feinberg',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                childs: []
              },
            ]
          }
          childs.push(obj);
        };
      });
      return acc.concat({ ...val, childs });
    }, []);
  };

}