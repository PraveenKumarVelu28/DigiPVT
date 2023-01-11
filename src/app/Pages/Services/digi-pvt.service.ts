import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigiPVTService {

  constructor(private http: HttpClient) { }

  private url: string = '';
  public host = sessionStorage.getItem('digiofficeapiurl');
  

  public GetNotification(UserID: any) {
    return this.http.get<any[]>(
      this.host + "/User/GetNotification?UserID=" + UserID
    );
  }

  public UpdateNotificationSeen(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateNotificationSeen';
    return this.http.post(this.url, data);
  }

  public ClearNotificationByID(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/ClearNotificationByID?ID=" + ID);
  }

  public GetMyDetailsByStaffID(StaffID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetMyDetailsByStaffID?ID=" + StaffID
    );
  }

  public GetMyDetailsForLogin(username:any,password:any,count:any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetMyDetailsByStaffID?ID=" 
    );
  }

  public GetCompanyID(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/ClearNotificationByID?ID=" + ID);
  }
  
}
