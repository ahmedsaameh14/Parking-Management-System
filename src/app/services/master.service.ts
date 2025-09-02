import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient , private _userS:UserService) { }

  getSitesByClientId(): Observable<ResponseModel>{
    const clientId = this._userS.loggedUserData.extraId;
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id="+ clientId)
  }

  getBuildingBySiteId(siteId:number): Observable<ResponseModel>{
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetBuildingBySiteId?id="+ siteId)
  }

  GetFloorsByBuildingId(buildingId:number): Observable<ResponseModel>{
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetFloorsByBuildingId?id="+ buildingId)
  }

  bookSpot(obj:any): Observable<ResponseModel> {
    return this.http.post<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/AddParking" , obj)
  }

  GetAllParkingByFloor(floorId:number): Observable<ResponseModel>{
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetAllParkingByFloor?id="+ floorId)
  }

  releaseSpot(obj:any): Observable<ResponseModel> {
    return this.http.post<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/MarExit" , obj)
  }

}
