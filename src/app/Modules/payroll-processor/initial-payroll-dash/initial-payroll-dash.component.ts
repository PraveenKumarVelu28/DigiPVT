import { Component, OnInit } from '@angular/core';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-initial-payroll-dash',
  templateUrl: './initial-payroll-dash.component.html',
  styleUrls: ['./initial-payroll-dash.component.css']
})
export class InitialPayrollDashComponent implements OnInit {

  viewMode = 'tab1';

  constructor(public DigiofficeService: DigiPVTService, public router: Router) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  stafflist: any;
  term: any;
  value: any;
  Month:any;
  year:any;
  PayrollType:any;
  employeelist:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  employeelist1:any;
  uniquelist:any;
  Search:any;
  Duration:any;
  PayDate:any;
  public todaydate: any;
  public firstdayofcurrentyear: any;
  public firstdayofcurrentweek: any;
  public lastdayofcurrentweek: any;
  public firstdayofpreviousmonth: any;
  public lastdayofpreviousmonth: any;
  public firstdayofpreviousyear: any;
  public lastdayofpreviousyear: any;
  finalist:any;
  loader:any;
  firstDayofcurrentmonth:any;
  filtereddate1:any;
  employeelistCopy:any;
  thirteenthlist:any;
  result:any;
  ComputationBasic:any;
  p: any = 1;
  month:any;
  count1: any = 10;
  ComputationDeminimis:any;
  Departmentlist:any;
  ngOnInit(): void {
    this.loader=true;
    this.Department="";
    this.Duration="";
    this.month=new Date().getMonth();
    this.selectrun=1
    debugger

    this.DigiofficeService.GetDepartment().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });


    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null && x.resignationDate==null);
    });


    this.DigiofficeService.GetThirteenthMonthSalary().subscribe(data => {
      debugger
      this.thirteenthlist = data;
    });


    // this.DigiofficeService.GetCompany_PayrollComputation().subscribe(
    //   data => {
    //     debugger
    // this.result = data;
		
    // this.ComputationBasic =this.result[0].computationBasic ,
    // this.ComputationDeminimis =this.result[0].computationDeminimis 

		
    //   }
    // )

   

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
     var curr = new Date;
        this.filtereddate1 = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate1;
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    this.firstdayofcurrentweek = new Date(curr.setDate(first)).toUTCString();
    this.lastdayofcurrentweek = new Date(curr.setDate(last)).toUTCString();

    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);

   
    this.firstdayofcurrentweek = formatDate(this.firstdayofcurrentweek, format, locale);
    this.lastdayofcurrentweek = formatDate(this.lastdayofcurrentweek, format, locale);

    this.DigiofficeService.GetPreliminarySalary().subscribe(data => {
      debugger
      this.employeelist = data;
      this.employeelistCopy=this.employeelist;

      this.totalamount = 0;

      for (let i = 0; i < this.employeelist.length; i++) {
        this.totalamount += parseFloat(this.employeelist[i].netMonthSalary);
      }

      const key = 'startdate';
      const key1 = 'StaffID'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]) , item])).values()]
   
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
     
      this.loader=false;

    });

    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist1 = data.filter(x=>x.resignationDate!=null);
    });
    


    this.DigiofficeService.GetEmployeeFinalSalary().subscribe(data => {
      debugger
      this.finalist = data;
    });

  }
  selectrun:any;
  finalpayroll:any;
  thirteenthrunpayroll2:any;
  public runpayroll(){
    this.selectrun=1
     this.thirteenthrunpayroll2=0
     this.finalpayroll=0
  }

  public thirteenthrunpayroll(){
    this.thirteenthrunpayroll2=1
    this.selectrun=0
    this.finalpayroll=0
  }

  public FinalPayroll(){
    this.thirteenthrunpayroll2=0
    this.selectrun=0
    this.finalpayroll=1
  }

  enddate: any;
  public getdate(event: any) {
    debugger
    this.enddate = event.target.value;

  }



  // exportexcel() {
  //   debugger;
  //   var ExportData = [];
  //   for (let i = 0; i < this.employeelist.length; i++) {
  //     debugger;
  //     let singleData = {
  //       EmployeeID : String,
  //       StartDate: String,
  //       EndDate:String,
  //       EmployeeName: String,
  //       Department: String,
  //       GrossSalary: String,
  //       GrossSalaryForPeriod: String,
  //       SSSRate: String,
  //       PagIBIGRate: String,
  //       PhilHealthContribution: String,
  //       Tax: String,
  //       LopDays: String,
  //       LopAmount:String,
  //       LoanPayout:String,
  //       OTAmount: String,
  //       NetPay : String,


       
  //     }
      
  //     singleData.EmployeeID  = this.employeelist[i].employeeid1;
  //     singleData.StartDate  = this.employeelist[i].startdate;
  //     singleData.EndDate = this.employeelist[i].enddate;
  //     singleData.EmployeeName = this.employeelist[i].staffname;
  //     singleData.Department = this.employeelist[i].department_name;
  //     singleData.GrossSalary = this.employeelist[i].grossSalary;
  //     singleData.GrossSalaryForPeriod = this.employeelist[i].monthlysalaryperperiod;
  //     singleData.SSSRate = this.employeelist[i].contribution;
  //     singleData.PagIBIGRate = this.employeelist[i].pagBig;
  //     singleData.PhilHealthContribution = this.employeelist[i].philHealthContribution;
  //     singleData.Tax = this.employeelist[i].tax;
  //     singleData.LopDays = this.employeelist[i].lopdays;
  //     singleData.LopAmount = this.employeelist[i].lopamount;
  //     singleData.LoanPayout = this.employeelist[i].loanpayout;
  //     singleData.OTAmount = this.employeelist[i].loanpayout;
  //     singleData.NetPay = this.employeelist[i].netMonthSalary;
     


  //     ExportData.push(singleData);
  //     debugger
  //   }
  //   const Export_to_excel_options = {
  //     fieldSeparator: ',',
  //     quoteStrings: '"',
  //     decimalSeparator: '.',
  //     showLabels: true,
  //     showTitle: true,
  //     title:  'Payroll Report.xlsx',
  //     useTextFile: false,
  //     useBom: true,
  //     useKeysAsHeaders: true,
  //     filename:  'Payroll Report.xlsx'
  //   };
  //   const csvExporter = new ExportToCsv(Export_to_excel_options);
  //   debugger
  //   csvExporter.generateCsv(ExportData);
  // }












  // fileName = 'Payroll Report.xlsx';
  // exportexcel(): void {
  //   /* table id is passed over here */
  //   let element = document.getElementById('lvs');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);

  // }
  showpayroll:any;
  employeelist456:any;
  public filteremployee(){
    this.DigiofficeService.GetPreliminarySalary().subscribe(data => {
      debugger
      this.employeelist456 = data.filter(x=>x.startdate1<=this.PayDate && x.enddate1>=this.PayDate );
      this.employeelistCopy = this.employeelist456;
      this.totalamount = 0;

      if(this.employeelist456.length==0){
        Swal.fire('No Records Found for this Paydate')
      }
      for (let i = 0; i < this.employeelist456.length; i++) {
        this.totalamount += parseFloat(this.employeelist456[i].netMonthSalary)
      }
      
    });
   
  }


   seleconebtn: any;
  public getCheckbocdetails(evn: any,event:any) {
    debugger
  
    let temp: any = evn;
    this.temp = Object.entries(temp);
    debugger
    if (event.target.checked == true) {
      debugger;

      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      this.ID.push(evn.id);
      this.seleconebtn=true;
      this.selectallbtn=false;
    
    }
    else {
      debugger;

      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = false;
      this.ID.pop(evn.id);
      this.seleconebtn=true;
      this.selectallbtn=false;

    

    }


  }

  public Filterjobs() {
    debugger
    let searchCopy = this.Search.toLowerCase();
    // this.employeelist = this.employeelistCopy.filter((x: { jobRefernceID: string,jobTitle: string; }) => x.jobRefernceID.toString().includes(searchCopy)||x.jobTitle.toLowerCase().includes(searchCopy));
    this.employeelist = this.employeelistCopy.filter((x: { staffname: string,grossSalary:Number,netMonthSalary:Number }) => 
    x.staffname.toLowerCase().includes(searchCopy)||
    x.grossSalary.toString().includes(searchCopy)||
    x.netMonthSalary.toString().includes(searchCopy));
    this.totalamount = 0;

    for (let i = 0; i < this.employeelist.length; i++) {
      this.totalamount += parseFloat(this.employeelist[i].netMonthSalary);
    }
  

  }

  public Filterstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.employeelist = this.employeelistCopy.filter((x: { fullname: string; employeID: string }) =>
    ( x.fullname.toLowerCase().includes(searchCopy) || x.employeID.includes(searchCopy) ));
    this.loader=false;
  }


  Department:any;

public filterByDepartment() {
  debugger

  this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.employeelist = data.filter(x=> x.department_name==this.Department);

    this.totalamount = 0;

    for (let i = 0; i < this.employeelist.length; i++) {
      this.totalamount += parseFloat(this.employeelist[i].netMonthSalary);
    }

  });
  
}

public filterByDepartmentFinal() {
  debugger
  
  this.DigiofficeService.GetEmployeeFinalSalary().subscribe(data => {
    debugger
   
    this.finalist = data.filter(x=> x.department_name==this.Department);

   

  });
  
}

  ID1: any = [];
  startdate: any;
  LOPDays: any;
  NoOfDays: any
  public SelectAll() {
    debugger
    var date1 = new Date(this.startdate);
    var date2 = new Date(this.enddate);

    var Time = date2.getTime() - date1.getTime();
    let days: any = Time / (1000 * 3600 * 24);
    this.NoOfDays = days + 1;

    if (this.startdate == undefined || this.enddate == undefined) {
      Swal.fire('Please Select Start Date and End Date')
    }
    else if (this.startdate > this.enddate) {
      Swal.fire('End Date must be greater than start date');
    }
    else if (this.NoOfDays == 15 || this.NoOfDays == 30 || this.NoOfDays == 31 || this.NoOfDays == 28) {

      if (this.NoOfDays == 15) {
        if (this.stafflist.every((val: { checked: boolean; }) => val.checked == true)) {
          this.IntID = false;
          this.ID = [];
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = false });
        }
        else {
          this.ID1 = [];
          debugger
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = true });
          this.IntID = true;
          Swal.fire("Payroll Processing Completed");
          for (let i = 0; i < this.stafflist.length; i++) {
            debugger;
            this.ID1.push(this.stafflist[i].id);
            //this.EmployeeID =
            this.ID1[i];
            this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[i]).subscribe(
              res => {
                debugger;
                if (res.length == 0) {
                  this.LOPDays = 0;
                  this.DigiofficeService.Get_Salary_Splitsfor15days(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )

                } else {
                  this.LOPDays = res[0].noOfDays;
                  if (this.LOPDays <= 2) {
                    this.LOPDays = this.LOPDays;
                  }
                  else {
                    this.LOPDays = this.LOPDays - 2;
                  }
                  this.DigiofficeService.Get_Salary_Splitsfor15days(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )
                }

              }


            )

          }


          // for (let i = 0; i < this.ID1.length; i++) {
          //   debugger;

          // }

        }
        // this.DigiofficeService.DeleteEmployeeSalary(1).subscribe(res => {
        
        // })
      }
      else {
        if (this.stafflist.every((val: { checked: boolean; }) => val.checked == true)) {
          this.IntID = false;
          this.ID = [];
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = false });
        }
        else {
          this.ID1 = [];
          debugger
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = true });
          this.IntID = true;
          Swal.fire("Payroll Processing Completed");
          for (let i = 0; i < this.stafflist.length; i++) {
            debugger;
            this.ID1.push(this.stafflist[i].id);
            //this.EmployeeID =
            this.ID1[i];
            this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[i]).subscribe(
              res => {
                debugger;
                if (res.length == 0) {
                  this.LOPDays = 0;
                  this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )

                } else {
                  this.LOPDays = res[0].noOfDays;
                  if (this.LOPDays <= 2) {
                    this.LOPDays = this.LOPDays;
                  }
                  else {
                    this.LOPDays = this.LOPDays - 2;
                  }
                  this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )
                }

              }


            )

          }


          // for (let i = 0; i < this.ID1.length; i++) {
          //   debugger;

          // }

        }
        // this.DigiofficeService.DeleteEmployeeSalary(1).subscribe(res => {
        
        // })
      }


    }
    else {

      Swal.fire('Range for Payroll either 15 days or 30 days')
    }



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

  //     for (let i = 0; i < this.ID.length; i++) {
  //       debugger;
  //       this.EmployeeID = this.ID[i];
  //       this.DigiofficeService.GetStaffLeavesForPayroll(this.MonthID, 2021, this.EmployeeID).subscribe(
  //         res => {
  //           debugger;
  //           if (res.length == 0) {
  //             this.LOPDays = 0;
  //             this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //               res => {
  //                 debugger;
  //                 this.StaffSalaryReports = res;
  //                 Swal.fire("Payroll Processing Completed");
  //                 this.Payrollvis = true
  //               }
  //             )

  //           } else {

  //             this.LOPDays = res[0].noOfDays;
  //             this.DigiofficeService.GetStaffLeavesForPayroll(this.MonthID, 2021, this.EmployeeID).subscribe(
  //               res1 => {
  //                 debugger;
  //                 this.PrevLOPDays = res1[0].noOfDays;
  //                 if (this.LOPDays > 2) {
  //                   if (this.PrevLOPDays == 0) {
  //                     this.LOPDays = this.LOPDays;
  //                     this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
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
  //                       this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                         res => {
  //                           debugger;
  //                           this.StaffSalaryReports = res;
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
  //                     this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
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
  //     }

  //   }
  // }
  totalamount:any;

  public getbankadvicelist(){
    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.startyear == this.year && x.month == this.Month && x.payrolltype == this.PayrollType );
      const key = 'startdate';

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [item[key], item])).values()];

        this.totalamount = 0;

        for (let i = 0; i < this.uniquelist.length; i++) {
          this.totalamount += this.uniquelist[i].netSalary;
        }
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
    });
  }

  

  
  public convetToPDF1() {
    debugger
   
    var data: any = document.getElementById('downloadaplication');
    html2canvas(data).then(canvas => {
   
      var margin = 5;
      var imgWidth = 208
      // var pageHeight = 295 - 10 * margin;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      while (heightLeft > 0) {

        const contentDataURL = canvas.toDataURL('image/png')
        position = heightLeft - imgHeight;

        doc.addPage();


        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      
        heightLeft -= pageHeight;

      }
      doc.deletePage(1)
      doc.save('Bank Advice List.pdf');
      
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "Application.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }



 public currentmonth() {
  
  
  this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.employeelist = data.filter(x=>x.month==this.month+1);


    this.totalamount = 0;

    for (let i = 0; i < this.employeelist.length; i++) {
      this.totalamount += this.employeelist[i].netMonthSalary;
    }
    // this.employeelist = data.filter(x => x.startdate1 >= this.firstDayofcurrentmonth && x.startdate1 <= this.todaydate)
  })

 
  
 }

 selecallbtn: any;
 selectallbtn:any;
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    
    if (this.employeelist456.every((val: { checked: boolean; }) => val.checked == true)) {
      this.employeelist456.forEach((val: { checked: boolean; }) => { val.checked = false });
      this.selectallbtn=false;
      this.seleconebtn=false;
    }
    else {
      debugger
      this.employeelist456.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.selectallbtn=true;
      this.seleconebtn=false;
    }



 
    

  }


 public DeleteInitialPayroll() {
  debugger
  const format = 'yyyy-MM-dd';
 
  // const locale = 'en-US'
  // this.startdate=formatDate(startdate, format, locale);
  Swal.fire({
    title: 'Are you sure?',
    text: 'You Want to delete it.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, Delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    // if (result.value == true) {
    //   for (let i = 0; i < this.ID.length; i++) {
    //   this.DigiofficeService.DeletePreliminary(this.ID[i])
    //     .subscribe({
    //       next: data => {
    //         debugger;
    //         Swal.fire('Deleted Successfully')
    //         location.reload();
    //       }
    //     })
    //   }
    // }
    if (result.value == true && this.seleconebtn == true) {
       
      for (let i = 0; i < this.ID.length; i++) {
        this.DigiofficeService.DeletePreliminary(this.ID[i])
          .subscribe({
            next: data => {
              debugger;
              Swal.fire('Deleted Successfully')
              location.reload();
            }
          })
        }
  }
  else if (result.value == true && this.selectallbtn == true){
    
    for (let i = 0; i < this.employeelist456.length; i++) {
      this.DigiofficeService.DeletePreliminary(this.employeelist456[i].id)
        .subscribe({
          next: data => {
            debugger;
            Swal.fire('Deleted Successfully')
            
            location.reload();
          }
        })
      }
  }
  })
}



}
