
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import Swal from 'sweetalert2';
 import { jsPDF } from "jspdf";
 import html2canvas from 'html2canvas';
 import * as JSZip from 'jszip';
// import Swal from 'sweetalert2';
 import * as XLSX from 'xlsx';
declare var JSZipUtils: any;
@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  
  constructor(public AliprojectService: DigiPVTService, public router: Router) { }

  stafflist: any;
  term: any;
  p: any = 1;
  count1: any = 10;
  employeeid: any;
  ename: any;
  dob: any;
  TINNo: any;
  Gender: any;
  EmailID: any;
  mobile: any;
  Address: any;
  AddressLine1: any;
  department_name: any;
  Role: any;
  doh: any;
  BaseSal: any;
  dependentdetails: any;
  stafflistCopy: any;
  count: any;
  Departmentlist: any;
  level: any;
  Department: any;
  RoleType: any;
  RoleTypeList: any;
  loader:any;
  currentUrl:any;
  Designationlist:any;
  grouplist:any;
  Divisionlist:any;
  leveltypeList:any;
  DepartmentdropdownSetting : any
  PositiondropdownSetting : any
  Band123:any;
  Countrylist:any;
  Citylist:any;
  Provincelist:any;
  costcenterlist:any;
  ngOnInit(): void 
  {
    debugger
    this.loader=true;
    this.currentUrl = window.location.href;
    this.AliprojectService.GetDesignationMaster().subscribe(data => {
      debugger
      this.Designationlist = data;
    });
    this.GetCountryType();
    this.GetCostCentersMaster();
    this.getstate();
    this.getcity();
    this.GetLevelType();
   
      // this.AliprojectService.GetDivisionMaster().subscribe(data => {
      //   debugger
      //   this.Divisionlist = data;
      // });
    
   
      // this.AliprojectService.GetGroupMaster().subscribe(data => {
      //   debugger
      //   this.grouplist = data;
      // });
    this.showbtn = false;
    this.AssignedCompany = 0;
    this.Department = 0;
    this.level = 0;
    this.RoleType = 0;


    this.AliprojectService.GetAllStaffNew().
    subscribe({
      next: data => {
        debugger
        this.stafflist = data;
        this.stafflistCopy = this.stafflist
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting All Staff');
        this.loader=false;
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
    
  

    this.AliprojectService.GetDepartment().
    subscribe({
      next: data => {
        debugger
        this.Departmentlist = data;
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting Department');
        this.loader=false;
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
    this.DepartmentdropdownSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'department_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.PositiondropdownSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.AliprojectService.GetRoleType().
    subscribe({
      next: data => {
        debugger
        this.RoleTypeList = data;
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting Department');
        this.loader=false;
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }


  public GetCountryType() {
    this.AliprojectService.GetCountryType().subscribe(data => {
      debugger
      this.Countrylist = data
      this.loader=false;
    })
  }


  public GetCostCentersMaster() {
    this.AliprojectService.GetCostCentersMaster().subscribe(data => {
      debugger
      this.costcenterlist = data;
      this.loader=false;
    });
  }


  Provincelist1:any;
  getstate() {
    this.AliprojectService.GetStateType().subscribe(data => {
      debugger
      this.Provincelist = data;
      this.loader=false;
    })
  }

  public getcity() {
    this.AliprojectService.GetCityType().subscribe(data => {
      debugger
      // this.Citylist = data.filter(x => x.stateID == this.StateID);
      this.Citylist = data;
      this.loader=false;
    })
  }



    


  public Filterstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.stafflist = this.stafflistCopy.filter((x: { fullname: string; OfficialEmail: string }) =>
      x.fullname.toLowerCase().includes(searchCopy));
    this.count = this.stafflist.length;
    this.loader=false;
  }

  public GetStaffDetails(list: any) {
    debugger
    this.AliprojectService.GetMyDetails().
    subscribe({
      next: data => {
        debugger
        this.loader=false;
        let temp: any = data.filter(x => x.id == list.id);
        this.employeeid = temp[0].id;
        this.ename = temp[0].fullname;
        this.dob = temp[0].dob;
        this.TINNo = temp[0].dob.tINNo;
        this.Gender = temp[0].gender;
        this.EmailID = temp[0].emailID;
        this.mobile = temp[0].mobile;
        this.department_name = temp[0].department_name;
        this.Role = temp[0].role;
        this.doh = temp[0].filterdate;
        this.BaseSal = temp[0].baseSal;
      }, error: (err) => {
        Swal.fire('Issue in Getting Staff Data');
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })   
    this.AliprojectService.GetMyAddressDetails().
    subscribe({
      next: data => {
        debugger
        this.loader=false;
        let temp: any = data.filter(x => x.staffId == list.id);
      }, error: (err) => {
        Swal.fire('Issue in Getting Address Details');
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
    this.AliprojectService.GetDependentDetails().
    subscribe({
      next: data => {
        debugger
        this.loader=false;
        this.dependentdetails = data.filter(x => x.staffId == list.id);
        this.convetToPDF20()
      }, error: (err) => {
        Swal.fire('Issue in Getting Depandent Details');
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }
    
    
   
    
    
    
    
   
  public attachments01: any = [];

  public convetToPDF20() {
    debugger
    var data: any = document.getElementById('contentToConvert456');
    html2canvas(data, { useCORS: true }).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;

      while (heightLeft >= 0) {
        const contentDataURL = canvas.toDataURL('image/png')
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;

      }
      pdf.deletePage(1)
      var pdf1 = pdf.output('blob');
      var file = new File([pdf1], "Employee201FileReport.pdf");
      pdf.save("Employee201FileReport.pdf");
      this.attachments01.push(file);
      // this.AliprojectService.ProjectAttachmentsbyuserid(this.attachments01, this.depoid).subscribe(res => {
      //   debugger
      //   this.attachmentsur101 = [];
      //   this.attachmentsur101.push(res);
      //   console.log(res);
      //   this.loader = false;
      //   this.UpdateDepositLetter1()
      // });
      let body = new FormData();
      debugger
      body.append('Employee201FileReport', file);
      console.log('pdf', pdf1)

      // var file = new File([pdf1], "ProgressReportDetails" + Math.floor(Math.random() * 90 + 10) + ".pdf"



    }).then(() => {

    });;
  }


  public DeleteStaff(list: any) {
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
        this.AliprojectService.DeleteBuildingStaff(list.id)
        .subscribe({
          next: data => {
            debugger
            Swal.fire('Deleted Successfully!')
            this.ngOnInit();
            this.loader=false;
          }, error: (err) => {
            Swal.fire('Issue in Deleting Staff');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.AliprojectService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )}
        })
      }
    })
  }

  
  public DisableStaff(list: any) {
    debugger
    this.staffid=list.id
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Disable it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Disable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        var entity = {
          StaffID : this.staffid,
          EnableDisable:1

        }
        this.AliprojectService.UpdateStaffEnableDisable(entity)
        .subscribe({
          next: data => {
            debugger
            Swal.fire('Disabled Successfully')
            this.ngOnInit();
            this.loader=false;
          }, error: (err) => {
            Swal.fire('Issue in Disabling Staff');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.AliprojectService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )}
        })
      }
    })
  }
  staffid:any;

  public EnableStaff(list: any) {
    this.staffid=list.id
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Enable it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Enable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {

        var entity = {
          StaffID : this.staffid,
          EnableDisable:0

        }
        this.AliprojectService.UpdateStaffEnableDisable(entity)
        .subscribe({
          next: data => {
            debugger
            this.loader=false;
            Swal.fire('Enabled Successfully')
            this.ngOnInit();
          }, error: (err) => {
            Swal.fire('Issue in Enabling Staff');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.AliprojectService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )}
        })
      }
    })
  }





  public urls: any = [];


  public downloadzip(application: any) {
    debugger

    this.urls = [];
    this.AliprojectService.GetEmployeeDocuments().
    subscribe({
      next: data => {
        debugger
        let filearray: any = data.filter(x => x.staffId == application.id);
        //this.urls.push(filearray[0].lease_control_sheet);
        if (filearray[0].employee_Application_form != null) {
          this.urls.push(filearray[0].employee_Application_form);
        }
        if (filearray[0].offer_letter != null) {
          this.urls.push(filearray[0].offer_letter)
        }
        if (filearray[0].resume != null) {
          this.urls.push(filearray[0].resume)
        }
        if (filearray[0].certificates_From_Previous_Employer != null) {
          this.urls.push(filearray[0].certificates_From_Previous_Employer)
        }
        if (filearray[0].medical_Examination_Report != null) {
          this.urls.push(filearray[0].medical_Examination_Report)
        }
  
        if (filearray[0].birth_Certificates != null) {
          this.urls.push(filearray[0].birth_Certificates)
        }
        if (filearray[0].marriage_Certificates != null) {
          this.urls.push(filearray[0].marriage_Certificates)
        }
        if (filearray[0].sss_e1Form != null) {
          this.urls.push(filearray[0].sss_e1Form)
        }
        if (filearray[0].sss_loanvoucher != null) {
          this.urls.push(filearray[0].sss_loanvoucher)
        }
        if (filearray[0].hdmf_form != null) {
          this.urls.push(filearray[0].hdmf_form)
        }
  
        if (filearray[0].hdmf_loanvoucher != null) {
          this.urls.push(filearray[0].hdmf_loanvoucher)
        }
  
  
        if (filearray[0].phic_reg != null) {
          this.urls.push(filearray[0].phic_reg)
        }
        if (filearray[0].bir_form_1902 != null) {
          this.urls.push(filearray[0].bir_form_1902)
        }
        if (filearray[0].bir_form_2305 != null) {
          this.urls.push(filearray[0].bir_form_2305)
        }
        if (filearray[0].bir_form_2316 != null) {
          this.urls.push(filearray[0].bir_form_2316)
        }
        if (filearray[0].bir_form_1905 != null) {
          this.urls.push(filearray[0].bir_form_1905)
        }
        if (filearray[0].dependts_birth_certificates != null) {
          this.urls.push(filearray[0].dependts_birth_certificates)
        }
        if (filearray[0].attendance_sheet_dtr != null) {
          this.urls.push(filearray[0].attendance_sheet_dtr)
        }
  
  
        if (filearray[0].promotion_doc != null) {
          this.urls.push(filearray[0].promotion_doc)
        }
        if (filearray[0].incident_report != null) {
          this.urls.push(filearray[0].incident_report)
        }
        if (filearray[0].clearnce_form != null) {
          this.urls.push(filearray[0].clearnce_form)
        }
        if (filearray[0].resignation_form != null) {
          this.urls.push(filearray[0].resignation_form)
        }
        if (filearray[0].employee_201report != null) {
          this.urls.push(filearray[0].employee_201report)
        }
        this.createzip();
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting Depandent Details');
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }





  clikedid: any;
  public showbttn(item: any) {
    if (this.showbtn == true) {
      this.showbtn = false;
      this.loader=false;
    } else {
      this.showbtn = true;
      this.loader=false;
    }

    this.clikedid = item.id;
  }
  public Edit() {
    this.router.navigate(['/Employee/StaffDetailsWizard', this.clikedid]);
    this.loader=false;
  } 

  public Upload() {
    this.router.navigate(['/HR/UploadEmployeeDocumets', this.clikedid]);
    this.loader=false;
  }

  showbtn: any;
  public createzip() {
    debugger

    let count = 0;
    const zip = new JSZip();

    this.urls.forEach((url: any) => {
      const filename = url.split('/')[url.split('/').length - 1].split('/')[0].split('/')[0].slice(41);
      //url.split('/')[url.split('/').length - 1]
      //url.split('/')[url.split('/').length-1].split('/')[0].split('/')[0];
      //url.split('/')[url.split('/').length-1].split('/')[0].split('/')[0].slice(41)
      JSZipUtils.getBinaryContent(url, (err: any, data: string | number[] | Uint8Array | ArrayBuffer | Blob | NodeJS.ReadableStream | Promise<string | number[] | Uint8Array | ArrayBuffer | Blob | NodeJS.ReadableStream>) => {
        if (err) {
          throw err;
        }

        zip.file(filename, data, { binary: true });
        count++;

        if (count == this.urls.length) {
          zip.generateAsync({ type: 'blob' }).then((content) => {
            const objectUrl: string = URL.createObjectURL(content);
            const link: any = document.createElement('a');

            link.download = 'Employee201Report.zip';
            link.href = objectUrl;
            link.click();

          });
        }
      });
    })

  }



  fromlogin: any;
  exceldata: any;
  arrayBuffer: any;
  filetype: any;
  file: any;

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

  i:any
  StaffID:any;
  roletypeid:any;
  RoleTypeList2:any;
  // public Upload_file() {
  //   debugger
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
  //     for (this.i = 0; this.i < this.exceldata.length; this.i++) {
  //       // if (typeof this.exceldata[this.i].PositionTitle == 'string'){
  //       //   this.RoleTypeList2=this.RoleTypeList.filter((x: { short: any; })=>x.short==this.exceldata[this.i].PositionTitle)
  //       //   this.roletypeid = this.RoleTypeList2[0].id
  //       // }
  //       // else{
  //       //   this.roletypeid=this.exceldata[this.i].PositionTitle
  //       // }
  //       var Enitity =
  //       {

  //         'BuildingID': 56,
  //         'Name': this.exceldata[this.i].DummyName,
  //         'EmployeeID': this.exceldata[this.i].Emp_No,
  //         'PhoneNo': this.exceldata[this.i].ContactNumber,
  //         'EmailID': this.exceldata[this.i].Email,
  //         'TypeID':  this.exceldata[this.i].PositionTitle,
  //         'Address': this.exceldata[this.i].Address,
  //         'Supervisor': this.exceldata[this.i].Supervisor,
  //         'JoiningDate': this.exceldata[this.i].Dob.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[this.i].Dob.slice(1, -1),
  //         'Gender': this.exceldata[this.i].Gender,
  //         'CurrentBMS' : this.exceldata[this.i].CurrentBMS,
  //         'DOB': this.exceldata[this.i].Dob.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[this.i].Dob.slice(1, -1),
  //         'ResignationDate': "1990-01-01 00:00:00.000",
  //         'Date_Of_Marriage': this.exceldata[this.i].Dob.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[this.i].Dob.slice(1, -1),
  //         'Original BMS': this.exceldata[this.i].OriginalBMS,
  //         'PreviousEffectivityBMSDate': this.exceldata[this.i].Dob.slice(1, -1) ,
  //         'PreviousBMS': this.exceldata[this.i].PreviousBMS,
  //         'CurrentEffectivityBMSDate':  this.exceldata[this.i].Dob.slice(1, -1) ,
  //         'COLA': this.exceldata[this.i].COLA,
  //         'IncentiveLeave': this.exceldata[this.i].IncentiveLeave,
  //         'HMOInsurance': this.exceldata[this.i].HMOInsurance,
  //         'MeritInsurance': this.exceldata[this.i].MeritInsurance,
  //         'DailerLicense': this.exceldata[this.i].DailerLicense,
  //         'Incrementals': this.exceldata[this.i].Incrementals,
  //         'TaxStatus': this.exceldata[this.i].TaxStatus,
  //         'GCashNumber': this.exceldata[this.i].GCashNumber,
  //         'TalentSegment': this.exceldata[this.i].TalentSegment,
  //         'CostCentre': this.exceldata[this.i].CostCentre,
  //         'TranspoAllowance': this.exceldata[this.i].TranspoAllowance,
  //         'CommAllowance': this.exceldata[this.i].CommAllowance,
  //         'MealAllowance': this.exceldata[this.i].MealAllowance,
  //         'RiceAllowance': this.exceldata[this.i].RiceAllowance,
  //         'MedicineAllowance': this.exceldata[this.i].MedicineAllowance,
  //         'MaintenanceDepreciationAllowance': this.exceldata[this.i].MaintenanceDepreciationAllowance,
  //         'EffectivityofAllowance': this.exceldata[this.i].EffectivityofAllowance,
  //         'Status': this.exceldata[this.i].Status,
  //         'Age': this.exceldata[this.i].Age,
  //         'PlaceO_f_Birth': this.exceldata[this.i].BirthPlace,
  //         'Religion': this.exceldata[this.i].Religion == undefined ? null : this.exceldata[this.i].Religion,
  //         // 'Paygroup': this.Paygroup,
  //         'PagiBig_ID': this.exceldata[this.i].PAGIBIG,
  //         'PagiBigAccountNo': this.exceldata[this.i].PAGIBIG,
  //         // 'PagibigMembership': this.PagibigMembership,
  //         // 'PagibigRemarks': this.PagibigRemarks,
  //         'EMPLOYEE_TIN': this.exceldata[this.i].TIN,
  //         'PHILHEALTH_NO': this.exceldata[this.i].PHILHEALTH,
  //         'SSSNO':this.exceldata[this.i].SSS,
  //         'Blood_Group': this.exceldata[this.i].BloodType,
        



  //       };
  //       //apiarray.push(Enitity)
  //       debugger
  //       this.AliprojectService.InsertMyDetails(Enitity).subscribe(
  //         data => {
  //           debugger
  //           this.StaffID=data;
  //           // // this.SavePositionDetails();
  //           // var eb = {
  //           //   'EmergencyContactName': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactName,
  //           //   'EmergencyContactRelationship': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactRelationship,
  //           //   'EmergencyContactMobileNumber': this.exceldata[this.i-(this.exceldata.length)].EmergencyContactMobileNumber,
  //           //   'StaffID':  this.StaffID
  //           // }
  //           // this.i++;
  //           // this.AliprojectService.InsertMyAddressDetails(eb).subscribe(
              
  //           //   data => {
  //           //     debugger
  //           //     Swal.fire('Staffs Added Successfully');
  //           //     // this.router.navigate(['/EmployeeDashboard']);
      
  //           //   },
  //           // )
           
           
           
            
           
  //         }, error => {
  //         }
  //       )
  //     }
  //   }


  // }



  


  ExtensionEndDate:any;
  ProbationEndDate:any;
  ProbationStartDate:any;
  StaffID1:any;
  stafflist2:any;
  // public Upload_file() {
  //   debugger
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
    
  //   for (let i = 0; i < this.exceldata.length; i++) {
     
        
      
  //      var eb1 = {
             
  //             'EmployeeID' : this.exceldata[i].EmployeeID,
  //             'BuildingID': 56,
  //             'Name': this.exceldata[i].FirstName,
  //             'PhoneNo': 87889897,
  //             // 'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
  //             'EmailID': this.exceldata[i].Personal_Email,
  //             'TypeID': 3,
  //             // 'Type': Number(this.RoleType),
  //             'Address': this.Address,
  //             'Attachment': this.exceldata[i].Attachment == " " ? null : this.exceldata[i].Attachment,
  //             'JoiningDate':  "1990-01-01 00:00:00.000",
  //             'Salary':this.exceldata[i].CurrentBMS,
  //             'LeavesPerMonth': this.exceldata[i].LeavesPerMonth,
  //             'WorkTimings': this.exceldata[i].WorkTimings,
  //             'ContactNumber': this.exceldata[i].ContactNumber,
  //             'Supervisor': 20459,
              
  //             'ResignationDate':"1990-01-01 00:00:00.000",
  //             'ChaildTotal': 10,
  //             'MedicalLeaveEntitlement': 10,
  //             'MaternitityLeaveEntitlement': 105,
  //             'PaternitityLeaveEntitlement': 7,
  //             'CompassionateLeaveEntitlement': 10,
  //             'Leavesfrompreviousyear': 10,
  //             'ExtendedChildcareLeaveEntitlement': 10,
  //             'MarriageLeaveEntitlement': 10,
  //             'Title': this.exceldata[i].Title,
  //             'Middle_Name': this.exceldata[i].MiddleName,
  //             'Last_Name': this.exceldata[i].LastName,
  //             'PlaceO_f_Birth':this.exceldata[i].BirthPlace,
  //             'Country_Of_Birth':this.exceldata[i].CountryofBirth,
  //             'Age': this.exceldata[i].NickName,
  //             'Gender': this.exceldata[i].Gender,
  //             'Status': this.exceldata[i].MaritalStatus,
  //             // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),
      
  //             'Date_Of_Marriage': "1990-01-01 00:00:00.000",
  //             // 'Date_Of_Marriage': this.Date_Of_Marriage,
  //             'Religion': 'NA',
  //             'Citizen_Ship': this.exceldata[i].Citizenship == undefined ? null :this.exceldata[i].Citizenship,
  //             'Ethnicity': this.exceldata[i].Ethnicity == undefined ? null :this.exceldata[i].Ethnicity,
  //             'Nationality': this.exceldata[i].Nationality,
  //             'Is_Disabled': this.exceldata[i].Is_Disabled == " " ? 0 : this.exceldata[i].Is_Disabled,
  //             'Blood_Group': this.exceldata[i].BloodType,
  //             'Height': this.exceldata[i].Height == " " ? 0 : this.exceldata[i].Height,
  //             'Weight':this.exceldata[i].Weight == " " ? 0 : this.exceldata[i].Weight,
  //             'MajorIllness': this.exceldata[i].MajorIllness,
  //             'IS_Night_Blind': this.exceldata[i].IS_Night_Blind == " " ? 0 :this.exceldata[i].IS_Night_Blind,
  //             'Is_Color_Blind': this.exceldata[i].Is_Color_Blind == " " ? 0 : this.exceldata[i].Is_Color_Blind,
  //             'DOB': this.exceldata[i].DateofBirth.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[i].DateofBirth.slice(1, -1),
  //             'Signature': 'na',
  //             'Paygroup': this.exceldata[i].Paygroup,
  //             'PagiBig_ID': this.exceldata[i].PagiBig_ID,
  //             'PagiBigAccountNo': this.exceldata[i].PagiBigAccountNo,
  //             'PagibigMembership': this.exceldata[i].agibigMembership,
  //             'PagibigRemarks': this.exceldata[i].PagibigRemarks,
  //             'EMPLOYEE_TIN':this.exceldata[i].EMPLOYEE_TIN,
  //             'PHILHEALTH_NO':this.exceldata[i].PHILHEALTH_NO,
  //             'SSSNO': this.exceldata[i].SSSNO,
      
  //             'department': this.Department,
  //             'Level': this.level,
  //             'ParentCompany': this.exceldata[i].ParentCompany,
  //             'AssignedCompany': this.AssignedCompany,
  //             'ShiftID': 0,
  //             'Restdays':this.exceldata[i].Restdays,
  //             'Is_Solo_Parent': this.exceldata[i].Is_Solo_Parent == undefined ? 0 : this.exceldata[i].Is_Solo_Parent,
  //             'OrginalBms': this.exceldata[i].OrginalBms,
  //             'PreviousEffectivityBMSDate': this.exceldata[i].DateofBirth.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[i].DateofBirth.slice(1, -1),
  //             'PreviousBMS': this.exceldata[i].PreviousBMS,
  //             'CurrentEffectivityBMSDate': this.exceldata[i].DateofBirth.slice(1, -1) == " " ? "1990-01-01 00:00:00.000" : this.exceldata[i].DateofBirth.slice(1, -1),
  //             'CurrentBMS': this.exceldata[i].CurrentBMS,
  //             'COLA': this.exceldata[i].COLA,
  //             'IncentiveLeave': this.exceldata[i].IncentiveLeave,
  //             'HMOInsurance': this.exceldata[i].HMOInsurance,
  //             'MeritInsurance':this.exceldata[i].MeritInsurance,
  //             'DailerLicense': this.exceldata[i].DailerLicense,
  //             'Incrementals': this.exceldata[i].Incrementals,
  //             'TaxStatus':this.exceldata[i].TaxStatus,
  //             'GCashNumber': this.exceldata[i].GCashNumber,
  //             'TalentSegment':this.exceldata[i].TalentSegment,
  //             'CostCentre': this.exceldata[i].CostCentre,
      
  //             'TranspoAllowance':this.exceldata[i].TranspoAllowance,
  //             'CommAllowance': this.exceldata[i].CommAllowance,
  //             'MealAllowance': this.exceldata[i].MealAllowance,
  //             'RiceAllowance':this.exceldata[i].RiceAllowance,
  //             'MedicineAllowance': this.exceldata[i].MedicineAllowance,
  //             'MaintenanceDepreciationAllowance':this.exceldata[i].MaintenanceDepreciationAllowance,
  //             'EffectivityofAllowance':this.exceldata[i].EffectivityofAllowance,
  //             'MotherMaidenName': this.exceldata[i].MotherMaidenName,
  //             'FatherMaidenName':this.exceldata[i].FatherMaidenName,
  //             'PleaseSpecify': this.exceldata[i].PleaseSpecify,
  //             'SpokenLanguage': this.exceldata[i].LanguageSpoken


  //           }
           
  //           this.AliprojectService.InsertMyDetails(eb1).subscribe(

  //             data => {
  //               if (data == 0) {
  //                 debugger

  //                 Swal.fire('User Already Exists')
  //                 this.loader = false;
  //               }
  //               else {
  //                 this.StaffID = data;
      
  //                 Swal.fire('Saved Successfully')
  //                 this.loader = false;
  //               }
      
      
  //               // this.SaveDependantDetails();
  //               // this.SaveNomination();
  //               // this.SaveEmployment();
  //               // this.SaveEducation();
  //               // this.SaveIdDetails();
  //               // this.SaveBankDetails();
  //               // this.SaveVisaDetails();
      
  //               //  this.SaveSalaryDetails();
      
  //               // this.SaveAddressDetails();
  //               // this.SavePositionDetails();
      
      
  //             },
      
  //           )
  //     }
  //   }
  // }

  dept2list:any;
  stafflistcopy:any;
  deptid:any;
  Manager:any;
  // stafflist2:any;
  NextLevelManager:any;
  stafflist3:any;
  HRManager:any;
  stafflist4:any;
  GroupHead:any;
  design1:any;
  Designation:any;
  stafflistcopy123:any;
  design2:any;
  Band:any;
  design3:any;
  design4:any;
  Group:any;
  Division:any;
  design5:any;
  design6:any;
  design7:any;
  City:any;
  Province:any;
  Country:any;
  HiredDate:any;
  // public Upload_file(){
  //   debugger;
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
    
  //   for (let i = 0; i < this.exceldata.length; i++) {
     

  //     this.RoleTypeList2=this.RoleTypeList.filter((x: { short: any; })=>x.short==this.exceldata[i].PositionTitle,


  //            )
    
  //            if(this.RoleTypeList2.length!=0){
  //             this.roletypeid = this.RoleTypeList2[0].id
  //            }
  //            else{
  //             this.roletypeid = 0
  //            }
    
    
  //            this.dept2list=this.Departmentlist.filter((x: { department_name: any; })=>x.department_name==this.exceldata[i].Department

  //            )
  //            if(this.dept2list.length!=0){
  //             this.deptid = this.dept2list[0].id
  //            }
  //            else{
  //             this.deptid = 0
  //            }


  //            this.stafflistcopy=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].ImmediateManager
  //            )
  //            if(this.stafflistcopy.length!=0){
  //             this.Manager = this.stafflistcopy[0].id
  //            }
  //            else{
  //             this.Manager = 0
  //            }


  //            this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
  //            )
  //            if(this.stafflistcopy123.length!=0){
  //             this.StaffID = this.stafflistcopy123[0].id
  //            }
  //            else{
  //             this.StaffID = 0
  //            }


  //            this.stafflist2=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].NextLevelManager
  //            )
  //            if(this.stafflist2.length!=0){
  //             this.NextLevelManager = this.stafflist2[0].id
  //            }
  //            else{
  //             this.NextLevelManager = 0
  //            }


  //            this.stafflist3=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].UnitHRManager
  //            )
  //            if(this.stafflist3.length!=0){
  //             this.HRManager = this.stafflist3[0].id
  //            }
  //            else{
  //             this.HRManager = 0
  //            }

  //            this.stafflist4=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].GroupHead
  //            )
  //            if(this.stafflist4.length!=0){
  //             this.GroupHead = this.stafflist4[0].id
  //            }
  //            else{
  //             this.GroupHead = 0
  //            }

             
  //            this.design1=this.Designationlist.filter((x: { short: any; })=>x.short==this.exceldata[i].Designation
  //            )
  //            if(this.design1.length!=0){
  //             this.Designation = this.design1[0].id
  //            }
  //            else{
  //             this.Designation = 0
  //            }
             
  //            this.design2=this.Designationlist.filter((x: { short: any; })=>x.short==this.exceldata[i].Band
  //            )
  //            if(this.design2.length!=0){
  //             this.Band = this.design1[0].id
  //            }
  //            else{
  //             this.Band = 0
  //            }
             
  //            this.design3=this.grouplist.filter((x: { short: any; })=>x.short==this.exceldata[i].Group
  //            )
  //            if(this.design3.length!=0){
  //             this.Group = this.design1[0].id
  //            }
  //            else{
  //             this.Group = 0
  //            }
             
  //           //  this.design4=this.Divisionlist.filter((x: { sort: any; })=>x.sort==this.exceldata[i].Division
  //           //  )
  //           //  if(this.design4.length!=0){
  //           //   this.Division = this.design4[0].id
  //           //  }
  //           //  else{
  //           //   this.Division = 0
  //           //  }
             
  //            this.design5=this.Countrylist.filter((x: { short: any; })=>x.short==this.exceldata[i].Country
  //            )
  //            if(this.design5.length!=0){
  //             this.Country = this.design5[0].id
  //            }
  //            else{
  //             this.Country = 0
  //            }
             
  //            this.design6=this.Provincelist.filter((x: { short: any; })=>x.short==this.exceldata[i].Province
  //            )
  //            if(this.design6.length!=0){
  //             this.Province = this.design6[0].id
  //            }
  //            else{
  //             this.Province = 0
  //            }
             
  //            this.design7=this.Citylist.filter((x: { short: any; })=>x.short==this.exceldata[i].City
  //            )
  //            if(this.design7.length!=0){
  //             this.City = this.design7[0].id
  //            }
  //            else{
  //             this.City = 0
  //            }
             

  //      this.HiredDate=new Date(Date.UTC(0, 0, this.exceldata[i].HiredDate, 0, 0, 0, 0)).toISOString()
        
  //   var eb = {
  //     'EmployeeCode': this.exceldata[i].EmployeeID,
  //     'OfficialEmail': this.exceldata[i].CompanyEmailAddress,
  //     'Band': this.Band,
  //     'Grade': 1,
  //     'JobRole': this.roletypeid,
  //     'Manager': this.Manager,
  //     'EmployeeType': this.exceldata[i].EmployeeType == undefined ? null : this.exceldata[i].EmployeeType,
  //     'EmployeeStatus': this.exceldata[i].EmploymentStatus,
  //     'NoticePeriod': 0,
  //     'ProbationPeriod': 0,
  //     'ConfirmationDueDate': "1990-01-01 00:00:00.000",
  //     'ConfirmationStatus': this.exceldata[i].ConfirmationStatus,
  //     'EmployeeName': 'na',
  //     'StaffID': this.StaffID,
  //     'ExtensionEndDate': "1990-01-01 00:00:00.000",
  //     'ProbationEndDate': "1990-01-01 00:00:00.000",
  //     'ProbationStartDate': "1990-01-01 00:00:00.000",

  //     'StartDate': this.HiredDate  ,
  //     'EndDate': "1990-01-01 00:00:00.000",
  //     'NextLevelManager' : this.NextLevelManager,
  //     'HRManager' : this.HRManager,
  //     'GroupHead' : this.GroupHead,
  //     'EmployementType' : this.exceldata[i].EmploymentType,
  //     'Entity' : 'Ayala Land Inc.',
  //     'Group' : this.Group,
  //     'Division' : 0,
  //     'Department' : this.deptid,
  //     'Section' : this.exceldata[i].Section,
  //     'WorksiteCountry' : this.Country,
  //     'WorksiteCity' : this.City,
  //     'WorksiteProvince' :this.Province,
  //     'WorksiteLocation' : 0,
  //     'CompanyIssuedMobile' : 9890890898,
  //     'SAPVendorNo' : this.exceldata[i].SAPVendorCode ,
  //     'level' : this.exceldata[i].level,
  //     'Designation' : this.Designation,
  //     'CostCentre' : parseInt(this.exceldata[i].CostCenter),
  //     JoiningDate: this.HiredDate,

  //   }
  //   this.AliprojectService.InsertPositionDetails(eb).subscribe(

  //     data => {
  //       debugger

  //       Swal.fire('Saved Succesfully')
  //       this.loader = false
  //     },
  //   )
  //   }
  // }
  // }

  
//   public Upload_file() {
//     debugger
//     if (this.exceldata == undefined) {
//       Swal.fire('Choose a File');
//     } else {
//       let apiarray = [];
    
//     for (let i = 0; i < this.exceldata.length; i++) {

//       this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
//       )
//       if(this.stafflistcopy123.length!=0){
//        this.StaffID = this.stafflistcopy123[0].id
//       }
//       else{
//        this.StaffID = 0
//       }
//     var eb = {

//       'Dependent': this.exceldata[i].BeneficiaryName,
//       // 'Percentage': 100,
//       'NomineeType': this.exceldata[i].NomineeType      ,
//       'GuardianName':'NA',
//       'GuardianRelationship': 'NA',
//       'StaffID': this.StaffID



//     }
//     this.AliprojectService.InsertNomination(eb).subscribe(

//       data => {
//         debugger

//         Swal.fire('Saved Succesfully')

//       },
//     )
//     }
//   }

// }

// public attachments7url: any = [];
// public Upload_file() {
//   debugger
//   this.loader = true

//   if (this.exceldata == undefined) {
//     Swal.fire('Choose a File');
//   } else {
//     let apiarray = [];
  
//   for (let i = 0; i < this.exceldata.length; i++) {

//     this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
//     )
//     if(this.stafflistcopy123.length!=0){
//      this.StaffID = this.stafflistcopy123[0].id
//     }
//     else{
//      this.StaffID = 0
//     }
//     var eb = {
//       EducationType:this.exceldata[i].EducationalAttainment == undefined ? null : this.exceldata[i].EducationalAttainment,
//       // 'Qualification': this.Qualification == undefined ? null : this.Qualification,
//       NameOfQualification:this.exceldata[i].Course == undefined? null: this.exceldata[i].Course,
//       Branch: this.exceldata[i].Major == undefined ? null : this.exceldata[i].Major,
//       InstitutionName:this.exceldata[i].SchoolName== undefined ? null : this.exceldata[i].SchoolName,
//       Country: 246,
//       // 'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
//       grade: this.exceldata[i].EducationGrade == undefined ? 0 : this.exceldata[i].EducationGrade,
//       StartDateMonth:  '1990-01-01 00:00:00.000',
//       StartDateYear:  '1990-01-01 00:00:00.000' ,
//       EndDateMonth:'1990-01-01 00:00:00.000' ,
//       EndDateYear: '1990-01-01 00:00:00.000',
//       StaffID: this.StaffID,
//       AttachmentEdu: 'Attachment',
//       LicenseOrCertification:this.exceldata[i].LicenseOrCertification == undefined? null: this.exceldata[i].LicenseOrCertification,
//     };
//   this.AliprojectService.InsertEducationDetails(eb).subscribe(

//     data => {
//       debugger
//       this.loader = false
//       Swal.fire('Saved Succesfully')
//     },
//   )
// }
//   }
// }

  // public Upload_file() {
  //   debugger
  //   this.loader = true
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];
    
  //   for (let i = 0; i < this.exceldata.length; i++) {
     

  //     this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
  //     )
  //     if(this.stafflistcopy123.length!=0){
  //      this.StaffID = this.stafflistcopy123[0].id
  //     }
  //     else{
  //      this.StaffID = 0
  //     }


  //     var eb = {
  //       NameOfBank: this.exceldata[i].BankName,
  //       AccountHolderName: this.exceldata[i].AccountName,
  //       BankAccountNumber: this.exceldata[i].BankAccountNumber ,
  //       AccountType: this.exceldata[i].AccountType,
  //       BranchName: this.exceldata[i].BranchName,
  //       BranchAddress: this.exceldata[i].BranchAddress,
  //       StaffID: this.StaffID,
  //     };
  //   this.AliprojectService.InsertBankDetails(eb).subscribe(
  
  //     data => {
  //       debugger
  
  //       Swal.fire('Saved Succesfully')
  //       this.loader = false
  //     },
  //   )
  //   }
  // }
  // }
  // ExtensionEndDate:any;
  // ProbationEndDate:any;
  // ProbationStartDate:any;
  // StaffID1:any;
  // stafflist2:any;



  // cb: any;
//   DateofBirth:any;
//   public Upload_file() {
//     debugger
//     this.loader = true

//     if (this.exceldata == undefined) {
//       Swal.fire('Choose a File');
//     } else {
//       let apiarray = [];
    
//     for (let i = 0; i < this.exceldata.length; i++) {
  
//       this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
//       )
//       if(this.stafflistcopy123.length!=0){
//        this.StaffID = this.stafflistcopy123[0].id
//       }
//       else{
//        this.StaffID = 0
//       }

//       this.DateofBirth=   new Date(Date.UTC(0, 0, this.exceldata[i].DateofBirth, 0, 0, 0, 0)).toISOString()
//     var eb = {

//       'DependentName': this.exceldata[i].DependentName,
//       'Relationship': this.exceldata[i].Relationship,
//       'Gender': this.exceldata[i].Gender ,
//       'DateOfBirth': this.DateofBirth,
//       'Address': this.Address == undefined ? null : this.Address,
//       'Mobile': 0,
//       'Is_Dependent': 1,
//       'Id_Number': 0,
//       'Is_Child_Adopted': 0,
//       'Race': 'NA',
//       'CitizenShip': 'Philipines',
//       'Country_Of_Birth': 'Philipines',
//       'Religion': 'Philipines',
//       'Working_Status': 'NA',
//       'Request_Type': 'NA',
//       'StaffID': this.StaffID,
//       'DependentAttachment': 'jsjsjsj',


//     }
    
//     this.AliprojectService.InsertDependentDetails(eb).subscribe(

//       data => {
//         debugger

//         Swal.fire('Saved Succesfully')
//         this.loader = false
//       },
//     )
//   }
// }
// }

  //   }
  // }


  // public Upload_file() {
  //   debugger;
  //   this.loader = true;
  //   for (let i = 0; i < this.exceldata.length; i++) {
   

  //   /*  else if (this.Number != null && this.Number != undefined && this.Number != "") {
  //     var pattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$');
  //     if (this.Number.match(pattern)) {
  //       var eb = {
  //         IDType: this.IDType,
  //         Number: this.Number,
  //         NameOnDocument: this.NameOnDocument,
  //         IssueDate: this.IssueDate,
  //         ExpiryDate: this.ExpiryDate,
  //         IssuingAuthority: this.IssuingAuthority,
  //         PlaceOfIssue: this.PlaceOfIssue,
  //         StaffID: this.StaffID,
  //         IDAttachment: this.attachments4url[0],
  //       };
  //       this.DigiofficeService.InsertID_Details(eb).subscribe((data) => {
  //         debugger;

  //         Swal.fire('Saved Succesfully');
  //         this.loader = false;
  //       });

  //     }
  //     else {
  //       Swal.fire('Please Enter a Valid Account Number');
  //       this.loader = false;
  //     }
  //   } */
    
  //     var eb = {
  //       IDType: this.exceldata[i].IDType,
  //       Number: this.exceldata[i].IDNumber,
  //       NameOnDocument: this.exceldata[i].NameonDocument ,
  //       IssueDate: '1990-01-01 00:00:00.000',
  //       ExpiryDate: '1990-01-01 00:00:00.000',
         
  //       IssuingAuthority: this.exceldata[i].IssuingAuthority,
  //       PlaceOfIssue: this.exceldata[i].PlaceOfIssue,
  //       StaffID: this.StaffID,
  //       IDAttachment: 'abdccf'
  //     };
  //     this.AliprojectService.InsertID_Details(eb).subscribe((data) => {
  //       debugger;

  //       Swal.fire('Saved Succesfully');
  //       this.loader = false;
  //       location.reload()
  //     });
    
  // }
  // }




//   public Upload_file() {
//     debugger
//     this.loader = true
//     if (this.exceldata == undefined) {
//       Swal.fire('Choose a File');
//     } else {
//       let apiarray = [];
    
//     for (let i = 0; i < this.exceldata.length; i++) {
  
//       this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
//       )
//       if(this.stafflistcopy123.length!=0){
//        this.StaffID = this.stafflistcopy123[0].id
//       }
//       else{
//        this.StaffID = 0
//       }

//                  this.design5=this.Countrylist.filter((x: { short: any; })=>x.short==this.exceldata[i].AddressCountry
//              )
//              if(this.design5.length!=0){
//               this.Country = this.design5[0].id
//              }
//              else{
//               this.Country = 0
//              }
             
//              this.design6=this.Provincelist.filter((x: { short: any; })=>x.short==this.exceldata[i].AddressProvince

//              )
//              if(this.design6.length!=0){
//               this.Province = this.design6[0].id
//              }
//              else{
//               this.Province = 0
//              }
             
//              this.design7=this.Citylist.filter((x: { short: any; })=>x.short==this.exceldata[i].AddressCity

//              )
//              if(this.design7.length!=0){
//               this.City = this.design7[0].id
//              }
//              else{
//               this.City = 0
             
//              }
//       var eb = {
//         'AddressType': this.exceldata[i].AddressType,

//         'FindPlace': 'NA',
//         'AddressLine1': this.exceldata[i].Addressline1,
//         'AddressLine2': this.exceldata[i].Addressline2,
//         'AddressLine3': this.exceldata[i].AddressLine3,
//         'AddressLine4': this.exceldata[i].AddressLine4,
//         'District': this.City,
//         'Province': this.Province,
//         'Country': this.Country,
//         'barangay': 0,
//         'subDistrictPostcode': this.exceldata[i].PostalCode,
//         'Mobile': this.exceldata[i].PersonalContactNumber,
//         'LandLineFax': 0,
//         'IsCorrespondance': 0,
//         'RequestType': 0,
//         'EmergencyContactName': this.exceldata[i].EmergencyContactName,
//         'EmergencyContactRelationship': this.exceldata[i].EmergencyContactRelationship,
//         'EmergencyContactMobileNumber': this.exceldata[i].EmergencyContactMobileNumber,
//         'EmergencyContactOfficeNumber': this.exceldata[i].EmergencyContactMobileNumber,
//         'EmergencyContactLandLineNumber': this.exceldata[i].EmergencyContactMobileNumber,
//         'EmergencyContact_EmailID': this.exceldata[i].EmergencyContactMobileNumber,
//         'EmergencyContact_Address': this.exceldata[i].EmergencyContactAddress,
//         'ID': this.StaffID




//       }
//       this.AliprojectService.UpdateMyAddressDetails(eb).subscribe(

//         data => {
//           debugger
//           Swal.fire('Saved Successfully.');
//           // this.router.navigate(['/EmployeeDashboard']);
//           this.loader = false
//         },
//       )
//     }
//   }
// }

  

  // role:any;
  // roleid:any;
  public Upload_file() {
    debugger
    if (this.exceldata == undefined) {
      Swal.fire('Choose a File');
    } else {
      let apiarray = [];

      // for (let i = 0; i < this.exceldata.length; i++) {
      //   this.RoleTypeList2=this.RoleTypeList.filter((x: { short: any; })=>x.short==this.exceldata[i].PositionTitle,


      //        )
    
      //        if(this.RoleTypeList2.length!=0){
      //         this.roletypeid = this.RoleTypeList2[0].id
      //        }
      //        else{
      //         this.roletypeid = 0
      //        }
    
      //         var eb1 = {


          
      //     // 'Short': this.exceldata[i].PositionTitle,
      //     // 'Description': this.exceldata[i].PositionTitle,

      //     'ID':this.exceldata[i].CurrentVacationLeaveBalance,
      //     'Short': this.exceldata[i].EmployeeNo,
      //     'Description': this.exceldata[i].EmployeeNo



      //   }
        // this.AliprojectService.InsertRoleType(eb1)

        var obj={
          attachmenturlforexport:this.exceldata
        }
        this.AliprojectService.UploadEmployeeData(obj)
          .subscribe({
            next: data => {
              debugger
              Swal.fire('Updated Successfully')
              this.loader=false;
              this.ngOnInit();
            }
          })
      }
    // }
  }

  // PayDate:any;
  // public Upload_file() {
  //   debugger
  //   if (this.exceldata == undefined) {
  //     Swal.fire('Choose a File');
  //   } else {
  //     let apiarray = [];

  //      for (let i = 0; i < this.exceldata.length; i++) {
  //     //   this.RoleTypeList2=this.RoleTypeList.filter((x: { short: any; })=>x.short==this.exceldata[i].PositionTitle,

  //     this.PayDate = new Date(Date.UTC(0, 0, this.exceldata[i].EmploymentStartDate-1 ));
  //     //        )
    
  //     this.stafflistcopy123=this.stafflist.filter((x: { employeID: any; })=>x.employeID==this.exceldata[i].EmployeeID
  //     )
  //     if(this.stafflistcopy123.length!=0){
  //      this.StaffID = this.stafflistcopy123[0].id
  //     }
  //     else{
  //      this.StaffID = 0
  //     }

  //     //        if(this.RoleTypeList2.length!=0){
  //     //         this.roletypeid = this.RoleTypeList2[0].id
  //     //        }
  //     //        else{
  //     //         this.roletypeid = 0
  //     //        }
    
  //           var eb1 = {


          
  //         // 'Short': this.exceldata[i].PositionTitle,
  //         // 'Description': this.exceldata[i].PositionTitle,

  //         'ID':this.StaffID,
  //         'Short': this.exceldata[i].Level,
  //         'Description': this.exceldata[i].Level






  //       }
  //       // this.AliprojectService.InsertRoleType(eb1)

  //       //var obj={
  //       //   attachmenturlforexport:this.exceldata
  //       // }
  //       this.AliprojectService.UpdateRoleType(eb1)
  //         .subscribe({
  //           next: data => {
  //             debugger
  //             Swal.fire('Updated Successfully')
  //             this.loader=false;
  //             this.ngOnInit();
  //           }
  //         })
  //     }
  //    }
  // }

  AssignedCompany: any;

  public getDepartment() {

    if (this.Department == 0) {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.loader=false;
          this.stafflistCopy = this.stafflist
        }, error: (err) => {
          Swal.fire('Issue in Getting Data');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    } else {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.department == this.Department);
          this.stafflistCopy = this.stafflist
          this.loader=false;
        }, error: (err) => {
          Swal.fire('Issue in Getting Data');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    }
  }
  
  geLevel() {

    if (this.level == 0 || this.level == null || this.level == 'NULL' || this.level == "") {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.loader=false;
          this.stafflistCopy = this.stafflist
        }, error: (err) => {
          Swal.fire('Issue in Getting My Details');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })

    } else {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.levelid == this.level);
          this.stafflistCopy = this.stafflist
          this.loader=false;
        }, error: (err) => {
          Swal.fire('Issue in Getting My Details');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    }
  }
  getRoleType() {

    if (this.RoleType == 0) {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          debugger
          this.stafflist = data;
          this.loader=false;
          this.stafflistCopy = this.stafflist
        }, error: (err) => {
          Swal.fire('Issue in Getting My Details');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })

    } else {
      this.AliprojectService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.type == this.RoleType);
          this.stafflistCopy = this.stafflist
          this.loader=false;
        }, error: (err) => {
          Swal.fire('Issue in Getting My Details');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.AliprojectService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    }
  }
  DepartmentonItemSelect(item: any) {
    debugger
    console.log(item);
    this.Band = item.id;
    this.AliprojectService.GetAllStaffNew().
    subscribe({
      next: data => {
        debugger
        this.stafflist = data.filter(x=>x.department==this.Band);
        this.stafflistCopy = this.stafflist
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting All Staff');
        this.loader=false;
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }

  PositiononItemSelect(item: any) {
    debugger
    console.log(item);
    this.Band123 = item.id;
    this.AliprojectService.GetAllStaffNew().
    subscribe({
      next: data => {
        debugger
        this.stafflist = data.filter(x=>x.type1==this.Band123);
        this.stafflistCopy = this.stafflist
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting All Staff');
        this.loader=false;
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }
  

  public GetLevelType() {
    debugger
    this.AliprojectService.GetLevelType()
    .subscribe({
      next: data => {
        debugger
        this.leveltypeList = data;
        this.loader=false;
      }, error: (err) => {
        Swal.fire('Issue in Getting Level Type');
        // Insert error in Db Here//
        var obj = {
          'PageName': this.currentUrl,
          'ErrorMessage': err.error.message
        }
        this.AliprojectService.InsertExceptionLogs(obj).subscribe(
          data => {
            debugger
          },
        )
      }
    })
  }



  public DisableAttendance(list: any) {
    debugger
    this.staffid=list.id
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Disable it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Disable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        var entity = {
          'StaffID':this.staffid,
          'AttendanceEnable':0

        }
        this.AliprojectService.UpdateAttendanceEnableDisable(entity)
        .subscribe({
          next: data => {
            debugger
            Swal.fire('Disabled Successfully')
            this.ngOnInit();
            this.loader=false;
          }, error: (err) => {
            Swal.fire('Issue in Disabling Staff');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.AliprojectService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )}
        })
      }
    })
  }


  public EnableAttendance(list: any) {
    this.staffid=list.id
   
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Enable it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Enable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {

        var entity = {
          'StaffID':this.staffid,
          'AttendanceEnable':1

        }
        this.AliprojectService.UpdateAttendanceEnableDisable(entity)
        .subscribe({
          next: data => {
            debugger
            this.loader=false;
            Swal.fire('Enabled Successfully')
            this.ngOnInit();
          }, error: (err) => {
            Swal.fire('Issue in Enabling Staff');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.AliprojectService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )}
        })
      }
    })
  }






  filename:any;
  


  fileName = 'Staff Reports.xlsx';
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



}
