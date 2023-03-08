import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';   
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-component-mapping-form',
  templateUrl: './component-mapping-form.component.html',
  styleUrls: ['./component-mapping-form.component.css']
})
export class ComponentMappingFormComponent implements OnInit {

  submit: any;
  id: any;
  PayrollComponentType: any;
  Code: any;
  ComponentName: any;
  TaxFlag: any;
  TaxExemption: any;
  Affects: any;
  PayrollPeriod: any;
  EffectiveDate: any;
  Enable: any;
  PrintOnPaySlip: any;
  Formula: any;
  NinetyThousandTaxExemption: any;
  Affects1: any;
  Affects2: any;
  staffID: any;
  stafflist: any;
  staffdropdownSettings1: any;
  public restdaysarray1: any = [];
  Affectslist:any;
  EndDate:any;
  type:any;
  Amount:any;
  componentmaster:any;
  Backend: any;
  PayPeriodSettingList:any;
  PaycodeID:any;
  constructor(
    public DigiPVTService: DigiPVTService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ComponentName="0";
    this.PayrollPeriod = '';
    this.PayrollComponentType = '0';
    this.ActivatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      debugger;
      if (this.id != undefined) {
        this.GetStaff1();
        this.submit = 'Update';
      } else {
        this.submit = 'Submit';
      }
    });

   

    this.staffdropdownSettings1 = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.Affectslist = [
      { id: 1, name: 'SSS' },
      { id: 2, name: 'Pagibig ' },
      { id: 3, name: 'MPF' },
    ];

   
    this.DigiPVTService.GetPayPeriodSetting().subscribe(data => {
      debugger
      this.PayPeriodSettingList = data;
      console.log(this.PayPeriodSettingList)
   
    });

    this.GetComponentMaster();

  }

  // L1Manager(item: any) {
  //   debugger;
  //   console.log(item);
  //   this.L1Manager = item.id;
  //   this.staffID = item.id;
  // }
  List:any;
  public GetStartdate(){
    debugger;
   this.List= this.PayPeriodSettingList.filter((x: { id: any; })=>x.id==this.PaycodeID);
   this.EffectiveDate=this.List[0].payrollStartDate,
   this.EndDate = this.List[0].payrollEndDate
  }


  GetStaff1() {
    debugger;
    this.DigiPVTService.GetComponentMapping().subscribe((data) => {
      debugger;
      let temp = data.filter((x) => x.id == this.id);

      this.DigiPVTService.GetComponentMaster().subscribe(data => {
        debugger
        this.componentmaster = data.filter(x=>x.name==temp[0].componentName);
        console.log("componentmaster", this.componentmaster);
        (this.ComponentName = this.componentmaster[0].name)
      });
  

      (this.PayrollComponentType = temp[0].payrollComponentType),
        (this.Code = temp[0].code),
        
        (this.TaxFlag = temp[0].taxFlag),
        (this.TaxExemption = temp[0].ninetyThousandTaxExemption),
        (this.Affects = temp[0].effects),
        (this.PayrollPeriod = temp[0].payrollPeriod),
        (this.EffectiveDate = temp[0].effeactivedate),
        (this.Enable = temp[0].enable),
        (this.PrintOnPaySlip = temp[0].printOnPaySlip),
        (this.Formula = temp[0].formula);
        this.Amount=temp[0].amount,
        this.type=temp[0].type2,
        this.EndDate=temp[0].endDate,
        this.Backend=temp[0].backend
       

    });
  }

  public post() {
    debugger;
    if (this.id != undefined) {
      this.Update();
    } else {
      this.insert();
    }
  }

  public insert() {
    debugger;
   
    if (
      this.PayrollComponentType != undefined &&
      this.PayrollComponentType != '' &&
      this.Code != undefined &&
      this.Code != '' &&
      this.ComponentName != undefined &&
      this.ComponentName != '' &&
      // this.TaxFlag != undefined &&
      // this.TaxFlag != '' &&
      // this.TaxExemption != undefined &&
      // this.TaxExemption != '' &&
      this.Affects != undefined &&
      this.Affects != '' &&
      this.PayrollPeriod != undefined &&
      this.PayrollPeriod != '' &&
      // this.EffectiveDate != undefined &&
      // this.EffectiveDate != '' &&
      // this.Enable != undefined &&
      // this.Enable != '' &&
      // this.PrintOnPaySlip != undefined &&
      // this.PrintOnPaySlip != '' &&
      this.Formula != undefined &&
      this.Formula != ''
    ) {
      this.Affects1 = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Affects1 = this.Affects1 + this.restdaysarray1[i].name + ','
      }
      debugger;
      var entity = {
        PayrollComponentType: this.PayrollComponentType,
        Code: this.Code,
        ComponentName: this.ComponentName,
        TaxFlag:this.TaxFlag == undefined ? 0 : this.TaxFlag,
        NinetyThousandTaxExemption:this.TaxExemption == undefined ? 0 : this.TaxExemption,
        Effects: this.Affects1,
        PayrollPeriod: this.PayrollPeriod,
        Effeactivedate:  '1993-07-22 00:00:00.000',
        EndDate: '1993-07-22 00:00:00.000',
        Enable: this.Enable == undefined ? 0 : this.Enable,
        PrintOnPaySlip:this.PrintOnPaySlip == undefined ? 0 : this.PrintOnPaySlip,
        Formula: this.Formula,
        Amount:this.Amount,
        Type2:this.type,
        PaycodeID : this.PaycodeID
      };
      this.DigiPVTService.InsertComponentMapping(entity).subscribe(
        (data) => {
          Swal.fire('Saved Successfully');
          location.href = "#/PayrollProcessor/ComponentMappingDashboard";
        }
      );
    } else {
      Swal.fire('Please Fill the Mandatory Fileds');
    }
  }

  public Update() {
    if (
      this.PayrollComponentType != undefined ||
      this.PayrollComponentType != '' ||
      this.Code != undefined ||
      this.Code != '' ||
      this.ComponentName != undefined ||
      this.ComponentName != '' ||
      // this.TaxFlag != undefined ||
      // this.TaxFlag != '' ||
      // this.TaxExemption != undefined ||
      // this.TaxExemption != '' ||
      this.Affects != undefined ||
      this.Affects != '' ||
      this.PayrollPeriod != undefined ||
      this.PayrollPeriod != '' ||
      this.EffectiveDate != undefined ||
      this.EffectiveDate != '' ||
      // this.Enable != undefined ||
      // this.Enable != '' ||
      // this.PrintOnPaySlip != undefined ||
      // this.PrintOnPaySlip != '' ||
      this.Formula != undefined ||
      this.Formula != ''
    ) {
      this.Affects1 = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Affects1 = this.Affects1 + this.restdaysarray1[i].name + ','
      }
      debugger;
      var entity = {
        id: this.id,
        PayrollComponentType: this.PayrollComponentType,
        Code: this.Code,
        ComponentName: this.ComponentName,
        TaxFlag:this.TaxFlag == undefined ? 0 : this.TaxFlag,
        NinetyThousandTaxExemption:this.TaxExemption == undefined ? 0 : this.TaxExemption,
        Effects: this.Affects1,
        PayrollPeriod: this.PayrollPeriod,
        Effeactivedate: this.EffectiveDate,
        EndDate: this.EndDate,
        Enable: this.Enable == undefined ? 0 : this.Enable,
        PrintOnPaySlip:this.PrintOnPaySlip == undefined ? 0 : this.PrintOnPaySlip,
        Formula: this.Formula,
        Amount:this.Amount,
        Type2:this.type,
        PaycodeID : this.PaycodeID
      };

      this.DigiPVTService.UpdateComponentMapping(entity).subscribe(
        (data) => {
          Swal.fire('Update Successfully');
          location.href = "#/PayrollProcessor/ComponentMappingDashboard";
        }
      );
    } else {
      Swal.fire('Please Fill the Mandatory Fileds');
    }
  }

  onItemSelect2(item: any) {
    debugger
    console.log(item);
    this.restdaysarray1.push(item)
  }
  componentmappingmaster:any;
  
  public GetComponentMaster(){
    debugger
   
    this.DigiPVTService.GetComponentMasterNotInComponentMapping().subscribe(data => {
      debugger
      this.componentmappingmaster = data;
      console.log("componentmaster", this.componentmaster);
    });
  }
}
