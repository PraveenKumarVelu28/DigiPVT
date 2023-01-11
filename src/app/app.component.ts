import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiPVT';

  company_name: any;
  temp:any
  ngOnInit() {
    this.temp=sessionStorage.getItem('temp')
    this.company_name = localStorage.getItem("company_name");
  }
}
