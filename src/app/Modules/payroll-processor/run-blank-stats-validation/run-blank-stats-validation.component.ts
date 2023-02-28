import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import * as XLSX from 'xlsx';
import { ExportToCsv } from 'export-to-csv';
import { DatePipe, formatDate } from '@angular/common';
declare var JSZipUtils: any;

@Component({
  selector: 'app-run-blank-stats-validation',
  templateUrl: './run-blank-stats-validation.component.html',
  styleUrls: ['./run-blank-stats-validation.component.css']
})
export class RunBlankStatsValidationComponent implements OnInit {

  viewMode = 'tab1';

  constructor(public DigiofficeService: DigiPVTService, public router: Router, private datePipe: DatePipe) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  loader:any;
  Role: any;
  stafflist: any;
  term: any;
  RoleTypeList: any;
  value: any;
  result: any;
  employeelist: any;
  Payrollvis: any;
  Showpayroll: any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  p: any = 1;
  count1: any = 10;
  latestdate:any;
  cutofflist:any;
  PaycodeID:any;
  PayPeriodSettingList:any;
  ngOnInit(): void {
    this.PaycodeID = "";
    this.myDate = new Date();
    this.latestdate= this.datePipe.transform( this.myDate , 'yyyy-MM-dd');
    debugger

    this.DigiofficeService.GetPayPeriodSetting().subscribe(data => {
      debugger
      this.PayPeriodSettingList = data;
      console.log(this.PayPeriodSettingList)
   
    });


    this.DigiofficeService.GetPayrollCutOffDate().subscribe(data => {
      debugger
      this.cutofflist = data.filter(x=>x.filterdate==this.latestdate);

     
    });

    this.Role = "Select"
    this.department_name = "Select"
    this.GetDepartment();


    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
     
    });


    this.DigiofficeService.GetRoleType().subscribe(data => {
      debugger
      this.RoleTypeList = data;
    });


  }
  enddate: any;
  public getdate(event: any) {
    debugger
    this.enddate = event.target.value;

  }

 
  List:any;
  public GetStartdate(){
    debugger;
   this.List= this.PayPeriodSettingList.filter((x: { id: any; })=>x.id==this.PaycodeID);
   this.startdate=this.List[0].payrollStartDate,
   this.enddate = this.List[0].payrollEndDate
  }


  public GetDepartment() {
    debugger
    this.DigiofficeService.GetDepartment().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }



  department_name: any;
  public Departmentfilter() {
    if (this.startdate == undefined || this.enddate == undefined) {
      Swal.fire('Please Select Start Date and End Date')
    }
    else {
      this.DigiofficeService.Get_Employees_For_Payroll(this.startdate, this.enddate).subscribe(data => {
        debugger
        this.stafflist = data.filter(x => x.department_name == this.department_name && x.daysworked > 0);
        // this.stafflist = data.filter(x => x.department_name == this.department_name);

        const key = 'id';
        const key1 = 'month'

        this.uniquelist = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
          [(item[key]), item])).values()]



         

        //  this.uniquelist = [...new Set(data.map(item => item))];



      });
    }
  }



  totalamount:any;

  public Rolefilter() {
    if (this.startdate == undefined || this.enddate == undefined) {
      Swal.fire('Please Select Start Date and End Date')
    }
    else {
      this.DigiofficeService.Get_Employees_For_Payroll(this.startdate, this.enddate).subscribe(data => {
        debugger
        this.stafflist = data.filter(x => x.role == this.Role && x.daysworked > 0);

        const key = 'id';
        const key1 = 'month'

        this.uniquelist = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
          [(item[key]), item])).values()]

          this.totalamount = 0;

          for (let i = 0; i < this.uniquelist.length; i++) {
            this.totalamount += this.uniquelist[i].netMonthSalary;
          }

        //  this.uniquelist = [...new Set(data.map(item => item))];



      });
    }
  }


  
  public selectALL1(event:any) { // pass true or false to check or uncheck all
    debugger;
    this.selecallbtn = true;
    
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = event.currentTarget.checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
    
  }

  employeelistCopy: any;

  public FilterPayroll() {

    this.DigiofficeService.Get_Employees_For_Payroll(this.startdate, this.enddate).subscribe(data => {
      debugger
      this.stafflist = data;

      const key = 'id';
      const key1 = 'month'

      this.uniquelist = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
      this.employeelistCopy = this.uniquelist
      //  this.uniquelist = [...new Set(data.map(item => item))];


      let searchCopy = this.Search.toLowerCase();
      // this.employeelist = this.employeelistCopy.filter((x: { jobRefernceID: string,jobTitle: string; }) => x.jobRefernceID.toString().includes(searchCopy)||x.jobTitle.toLowerCase().includes(searchCopy));
      this.uniquelist = this.employeelistCopy.filter((x: { name: string }) => (x.name.toLowerCase().includes(searchCopy)));

    });



  }


  thirteenthmonthpayroll:any;
  uniquelist: any;
  Search: any;
  public getemployeedetails() {
   
    if (this.startdate == undefined || this.enddate == undefined) {
     
      Swal.fire('Please Select Start Date and End Date')
    }
    else {
      if(this.startdate>this.enddate){
        Swal.fire('End Date Must Be Greater Than Start Date')
      }
      else{
        this.loader=true
        this.DigiofficeService.Get_Employees_For_Payroll(this.startdate, this.enddate ).subscribe(data => {
          debugger
  
          this.stafflist = data;
  
          const key = 'id';
          const key1 = 'month'
  
          this.uniquelist = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
            [(item[key]), item])).values()]
            this.loader=false
          //  this.uniquelist = [...new Set(data.map(item => item))];
  
  
  
        });
      }
     
    }
  
  }




  
  ID1: any = [];
 
  LOPDays: any;
  NoOfDays: any
  public SelectAll() {
    this.seleconebtn=0
    debugger;
   
// if( this.cutofflist.length!=0){
  var date1 = new Date(this.startdate);
  var date2 = new Date(this.enddate);

  var Time = date2.getTime() - date1.getTime();
  let days: any = Time / (1000 * 3600 * 24);
  if (days >= 15) {
    this.NoOfDays = days;
  }
  else {
    this.NoOfDays = days + 1;
  }


  if (this.startdate == undefined || this.enddate == undefined) {
    Swal.fire('Please Select Start Date and End Date')
  }
  else if (this.startdate > this.enddate) {
    Swal.fire('End Date must be greater than start date');
  }
  Swal.fire({
    title: 'Are you sure?',
    text: 'To Run Payroll For This Period!',
    showCancelButton: true,
    confirmButtonText: 'Yes, Accept it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value==true) {
      // if (this.NoOfDays == 15 || this.NoOfDays == 30 || this.NoOfDays == 31 || this.NoOfDays == 28) {

      //   if (this.NoOfDays == 15) {

          if (this.uniquelist.every((val: { checked: boolean; }) => val.checked == true)) {
            this.IntID = false;
            this.ID = [];
            this.uniquelist.forEach((val: { checked: boolean; }) => { val.checked == false });
          }
          else {
            this.ID1 = [];
            debugger
            this.uniquelist.forEach((val: { checked: boolean; }) => { val.checked == true });
            this.IntID = true;
            Swal.fire("Payroll Processing Completed");
            this.InsertNotification();
            for (let i = 0; i < this.uniquelist.length; i++) {
              debugger;
              this.ID1.push(this.uniquelist[i].id);
              //this.EmployeeID =
              this.ID1[i];

              const format = 'yyyy-MM-dd';
      const myDate = this.startdate;
        const locale = 'en-US';
  this.startdate = formatDate(myDate, format, locale);
                
                  debugger;
                 
                    this.LOPDays = 0;
                    this.DigiofficeService.GetRunBlankStatsValidation(this.ID1[i],  this.startdate, this.enddate).subscribe(
                      res => {
                        debugger;
                        this.StaffSalaryReports = res;
                        this.ID1 = [];
                        location.href = '#/PayrollProcessor/ValidatedPayrollSummaryReport'
                      }
                    )

                  

                


              

            }


            // for (let i = 0; i < this.ID1.length; i++) {
            //   debugger;

            // }

          }

        
      //   else {

      //     if (this.uniquelist.every((val: { checked: boolean; }) => val.checked == true)) {
      //       this.IntID = false;
      //       this.ID = [];
      //       this.uniquelist.forEach((val: { checked: boolean; }) => { val.checked == false });
      //     }
      //     else {
      //       this.ID1 = [];
      //       debugger
      //       this.uniquelist.forEach((val: { checked: boolean; }) => { val.checked == true });
      //       this.IntID = true;
      //       Swal.fire("Payroll Processing Completed");
      //       this.InsertNotification();
      //       for (let i = 0; i < this.uniquelist.length; i++) {
      //         debugger;
      //         this.ID1.push(this.uniquelist[i].id);
      //         //this.EmployeeID =
      //         this.ID1[i];
      //         this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[i]).subscribe(
      //           res => {
      //             debugger;
      //             if (res.length == 0) {
      //               this.LOPDays = 0;
      //               this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
      //                 res => {
      //                   debugger;
      //                   this.StaffSalaryReports = res;
      //                   this.ID1 = [];
      //                   location.href = '#/PayRoll'
      //                 }
      //               )

      //             } else {
      //               this.LOPDays = res[0].noOfDays;
      //               if (this.LOPDays <= 2) {
      //                 this.LOPDays = this.LOPDays;
      //               }
      //               else {
      //                 this.LOPDays = this.LOPDays - 2;
      //               }
      //               this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
      //                 res => {
      //                   debugger;
      //                   this.StaffSalaryReports = res;
      //                   this.ID1 = [];
      //                   location.href = '#/PayRoll'
      //                 }
      //               )
      //             }

      //           }


      //         )

      //       }


      //       // for (let i = 0; i < this.ID1.length; i++) {
      //       //   debugger;

      //       // }

      //     }

      //   }


      // }
      // else {

      //   Swal.fire('Range for Payroll either 15 days or 30 days')
      // }
    }
  
  })

  

// }
// else{
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'You Have Missed The Payroll CutOff Date!',
//     footer: 'Please Changed The Configuration To Run Payroll'
//   })
// }

   


  }



  public InsertNotification() {
    debugger

    var entity = {
      'Date': new Date(),
      'Event': 'Payroll Run',
      'FromUser': 'Admin',
      'ToUser': 'Admin',
      'Message': 'Payroll Ran Successfully from ' + this.startdate + 'to' + this.enddate,
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': sessionStorage.getItem('staffid'),
      'NotificationTypeID': 16,
      'VendorID': 0


    }
    this.DigiofficeService.InsertNotification(entity).subscribe(data => {

    })
  }


  EmployeeID: any
  temp: any;
  IntID: any
  PrevLOPDays: any;
  StaffSalaryReports: any;
  public ID: any = [];


  // public getCheckbocdetails(evn: any) {
  //   debugger
  //   let temp: any = evn;
  //   this.temp = Object.entries(temp);
  //   debugger
  //   if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
  //     this.IntID = false;
  //     this.ID = [];
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
  //     this.IntID = false;
  //   }
  //   else {
  //     debugger;

  //     //  this.ID = [];
  //     debugger
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
  //     this.IntID = true;
  //     this.ID.push(evn.id);


  //       debugger;
  //       this.EmployeeID = this.ID[0];
  //       this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID[0]).subscribe(
  //         res => {
  //           debugger;
  //           if (res.length == 0) {
  //             this.LOPDays = 0;
  //             this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
  //               res => {
  //                 debugger;
  //                 this.StaffSalaryReports = res;
  //                    this.getempdetails(evn)
  //                 Swal.fire("Payroll Processing Completed");
  //                 this.Payrollvis = true
  //               }
  //             )

  //           } else {

  //             this.LOPDays = res[0].noOfDays;
  //             this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[0]).subscribe(
  //               res1 => {
  //                 debugger;
  //                 this.PrevLOPDays = res1[0].noOfDays;
  //                 if (this.LOPDays > 2) {
  //                   if (this.PrevLOPDays == 0) {
  //                     this.LOPDays = this.LOPDays;
  //                     this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
  //                         this.getempdetails(evn)
  //                         Swal.fire("Payroll Processing Completed");

  //                         this.ID = [];
  //                         this.Payrollvis = true;
  //                       }
  //                     )
  //                   }
  //                   else if (this.PrevLOPDays != 0) {
  //                     let ActualLOPDays = Number(this.LOPDays) + Number(this.PrevLOPDays);
  //                     if (ActualLOPDays > 4) {
  //                       this.LOPDays = Number(ActualLOPDays) - 4;
  //                       this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
  //                         res => {
  //                           debugger;
  //                           this.StaffSalaryReports = res;
  //                              this.getempdetails(evn)
  //                           Swal.fire("Payroll Processing Completed");
  //                           this.ID = [];
  //                           this.Payrollvis = true;
  //                         }
  //                       )
  //                     }
  //                   }
  //                 }

  //                 else {
  //                   if (this.LOPDays <= 2 || this.PrevLOPDays == 0) {
  //                     this.LOPDays = 0;
  //                     this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
  //                         this.getempdetails(evn)
  //                         Swal.fire("Payroll Processing Completed");
  //                         this.ID = [];
  //                         this.Payrollvis = true
  //                       }
  //                     )
  //                   }
  //                 }

  //               }
  //             )

  //           }

  //         }

  //       )


  //   }

  // }

  sssrate: any;
  ss_ec: any;
  ss_er: any;
  startmonth: any;
  endmonth: any;
  startyear: any;
  endyear: any;
  myDate: any;
  companylist: any;
  companyname: any;
  Address: any;

  paginigec: any;
  dob: any;
  PhilHealthEC: any;
  joiningdate: any;

  public getempdetails(evn: any) {
    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x => x.id == evn.id && x.startdate1 == this.startdate && x.enddate1 == this.enddate);
      this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
      this.sssrate = this.employeelist[0].contribution,
        this.ss_ec = this.employeelist[0].ss_ec,
        this.ss_er = this.employeelist[0].ss_er,
        this.startmonth = this.employeelist[0].startmonth,
        this.endmonth = this.employeelist[0].endmonth,
        this.startyear = this.employeelist[0].startyear,
        this.endyear = this.employeelist[0].endyear,
        this.paginigec = this.employeelist[0].pagBig / 2,
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
        this.dob = this.employeelist[0].dob,
        this.joiningdate = this.employeelist[0].joiningDate,
        this.PhilHealth = this.employeelist[0].philHealth,
        this.PhilHealthEC = this.employeelist[0].philHealthContribution / 2,
        this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyname = this.companylist[0].companyName,
            this.Address = this.companylist[0].address



        })

    });
  }







  seleconebtn: any;
  public getCheckbocdetails(evn: any) {
    debugger
    this.seleconebtn = true;
    let temp: any = evn;
    this.temp = Object.entries(temp);
    debugger
    if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
      this.IntID = false;
      this.ID = [];
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
      this.IntID = false;
    }
    else {
      debugger;

      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      this.ID.push(evn.id);



    }


  }


  public Accept() {
 debugger;

    // if(this.cutofflist.length!=0){
      for (let i = 0; i < this.ID.length; i++) {
        debugger;
        this.EmployeeID = this.ID[i];
        this.DigiofficeService.GetRoleType().subscribe(data => {
          debugger
          this.employeelist = data.filter(x => x.id == this.ID[i] && x.startdate1 == this.startdate && x.enddate1 == this.enddate);
          if (this.employeelist.length != 0) {
            Swal.fire({
              title: 'Are you sure?',
              text: 'Validation Was Alreay Run For This Period Do You Want To Overwrite',
             
              showCancelButton: true,
              confirmButtonText: 'Yes, Accept it!',
              cancelButtonText: 'No, keep it'
            }).then((result) => {
              if (result.value==true) {
                Swal.fire({
                  title: 'Are you sure?',
                  text: 'To Run Lwop Validation In This Period',
                 
                  showCancelButton: true,
                  confirmButtonText: 'Yes, Accept it!',
                  cancelButtonText: 'No, keep it'
                }).then((result) => {
                  if (result.value==true) {
                    debugger
                    for (let i = 0; i < this.ID.length; i++) {
                      debugger;
                      this.EmployeeID = this.ID[i];
             
                          debugger;
                         
                            this.LOPDays = 0;
                            this.DigiofficeService.GetRunBlankStatsValidation(this.ID[i],  this.startdate, this.enddate).subscribe(
                              res => {
                                debugger;
                                this.StaffSalaryReports = res;
                                Swal.fire(
                                  'Validation Ran Successfully!',
                                  'Validation  has been Completed',
                                  'success'
                                )
                                this.Payrollvis = true
                                this.InsertNotification();
                                location.href = '#/PayrollProcessor/ValidatedBasicPayValues'
                              }
                            )
  
                          
                        
                    }
  
  
  
  
  
  
                    // For more information about handling dismissals please visit
                    // https://sweetalert2.github.io/#handling-dismissals
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                      'Cancelled',
                      'Your imaginary file is safe :)',
                      'error'
                    )
                  }
                })
  
  
              }
            })
          }
          else{
           
              Swal.fire({
                title: 'Are you sure?',
                text: 'To Run Lwop Validation In This Period',
               
                showCancelButton: true,
                confirmButtonText: 'Yes, Accept it!',
                cancelButtonText: 'No, keep it'
              }).then((result) => {
                if (result.value==true) {
                  debugger
                  for (let i = 0; i < this.ID.length; i++) {
                    debugger;
                    this.EmployeeID = this.ID[i];
           
                        debugger;
                       
                          this.LOPDays = 0;
                          this.DigiofficeService.GetRunBlankStatsValidation(this.ID[i],  this.startdate, this.enddate).subscribe(
                            res => {
                              debugger;
                              this.StaffSalaryReports = res;
                              Swal.fire(
                                'Validation Ran Successfully!',
                                'Validation run has been Completed',
                                'success'
                              )
                              this.Payrollvis = true
                              this.InsertNotification();
                              location.href = '#/PayrollProcessor/ValidatedBasicPayValues'
                            }
                          )

                        
                      
                  }






                  // For more information about handling dismissals please visit
                  // https://sweetalert2.github.io/#handling-dismissals
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })


            
          }
      
  
        })
  
      }
    // }
    // else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'You Have Missed The Payroll CutOff Date!',
    //     footer: 'Please Changed The Configuration To Re Run Payroll'
    //   })
    // }
    




  }


 






  selecallbtn: any;
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }


  }

  fullname: any;
  payrolldate: any;
  datecovered: any;
  department: any;
  role: any;
  tin: any;
  PhilHealth: any;
  SSS: any;
  hdmf: any;
  deminimisamount: any;
  BaseSalary: any;
  lopamount: any;
  sssamount: any;
  philHealthContribution: any;
  pagBig: any;
  tax: any;
  netMonthSalary: any;
  deductions: any;
  startdate: any;

  id: any;
  GrossSalary: any;
  deniminimis_amount: any;
  semimonthly: any;
  basicday: any;
  basichour: any;
  employeelist2: any;
  companyloan: any;
  ssssalaryloan: any;
  ssscalamity: any;
  hdmfcalamityloan: any;
  hdmfsalaryloan: any;
  benefits: any;
 

}
