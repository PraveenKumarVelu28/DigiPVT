import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profiletabs',
  templateUrl: './my-profiletabs.component.html',
  styleUrls: ['./my-profiletabs.component.css']
})
export class MyProfiletabsComponent implements OnInit {

  constructor() { }

  EmpDetails: any;
  PosDetails: any;
  ConDetails: any;
  EmploymentDetails: any;
  NomDetails: any;
  DepDetails: any;
  BankDetails: any;
  IDDetails: any;
  EduDetails: any;

  ngOnInit(): void {
    this.EmpDetails = true;
    this.PosDetails = false;
    this.ConDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;

  }

  public showED() {
    this.EmpDetails = true;

    this.PosDetails = false;
    this.ConDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showPD() {
    this.PosDetails = true;

    this.EmpDetails = false;
    this.ConDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showCD() {
    this.ConDetails = true;

    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showDD() {
    this.DepDetails = true;

    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showEMD() {
    this.EmploymentDetails = true;

    this.DepDetails = false;
    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showND() {
    this.NomDetails = true;

    this.EmploymentDetails = false;
    this.DepDetails = false;
    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showEduD() {
    this.EduDetails = true;

    this.NomDetails = false;
    this.EmploymentDetails = false;
    this.DepDetails = false;
    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.IDDetails = false;

  }
  public showBD() {
    this.BankDetails = true;

    this.NomDetails = false;
    this.EmploymentDetails = false;
    this.DepDetails = false;
    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.IDDetails = false;
    this.EduDetails = false;
  }
  public showID() {
    this.IDDetails = true;

    this.NomDetails = false;
    this.EmploymentDetails = false;
    this.DepDetails = false;
    this.ConDetails = false;
    this.PosDetails = false;
    this.EmpDetails = false;
    this.EmploymentDetails = false;
    this.NomDetails = false;
    this.DepDetails = false;
    this.BankDetails = false;
    this.EduDetails = false;
  }

// Next tab code
  public gotonextTab() {
    debugger
    if (this.EmpDetails == true) {
      this.PosDetails = true;

      this.EmpDetails = false;
      this.ConDetails = false;
      this.EmploymentDetails = false;
      this.NomDetails = false;
      this.DepDetails = false;
      this.BankDetails = false;
      this.IDDetails = false;
      this.EduDetails = false;
    }

    else if (this.PosDetails == true) {
      this.ConDetails = true;
      this.PosDetails = false;
      this.EmpDetails = false;
      this.EmploymentDetails = false;
      this.NomDetails = false;
      this.DepDetails = false;
      this.BankDetails = false;
      this.IDDetails = false;
      this.EduDetails = false;
    }

    else if (this.ConDetails == true) {
      this.DepDetails = true;

      this.ConDetails = false;
      this.PosDetails = false;
      this.EmpDetails = false;
      this.EmploymentDetails = false;
      this.NomDetails = false;
      this.BankDetails = false;
      this.IDDetails = false;
      this.EduDetails = false;
    }

    else if(this.DepDetails == true){
      this.NomDetails = true;

      this.DepDetails = false;
      this.ConDetails = false;
      this.PosDetails = false;
      this.EmpDetails = false;
    
      this.DepDetails = false;
      this.BankDetails = false;
      this.IDDetails = false;
      this.EduDetails = false;
    }

    // else if(this.NomDetails == true){
    //   this.EduDetails = true;

    //   this.DepDetails = false;
    //   this.ConDetails = false;
    //   this.PosDetails = false;
    //   this.EmpDetails = false;
    //   this.EmploymentDetails = false;
    //   this.DepDetails = false;
    //   this.BankDetails = false;
    //   this.IDDetails = false;
    //   this.EduDetails = false;
    // }
    

    else if( this.NomDetails == true){
      this.EduDetails = true;

      this.NomDetails = false;
      this.EmploymentDetails = false;
      this.DepDetails = false;
      this.ConDetails = false;
      this.PosDetails = false;
      this.EmpDetails = false;
      this.DepDetails = false;
      this.BankDetails = false;
      this.IDDetails = false;
    }
    else if( this.EduDetails == true){
      this.BankDetails = true;
      this.EduDetails=false
      this.NomDetails = false;
      this.EmploymentDetails = false;
      this.DepDetails = false;
      this.ConDetails = false;
      this.PosDetails = false;
      this.EmpDetails = false;
      this.EmploymentDetails = false;
      this.IDDetails = false;
    }

    else {
      this.IDDetails = true;

      this.NomDetails = false;
      this.EmploymentDetails = false;
      this.DepDetails = false;
      this.ConDetails = false;
      this.PosDetails = false;
      this.EmpDetails = false;
      this.EmploymentDetails = false;
      this.NomDetails = false;
      this.DepDetails = false;
      this.BankDetails = false;
      this.EduDetails = false;
    }

   






















  }
}
