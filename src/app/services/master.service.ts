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

  URL = "https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id=";

  getSitesByClientId(): Observable<ResponseModel>{
    const clientId = this._userS.loggedUserData.extraId;
    return this.http.get<ResponseModel>(this.URL + clientId)
  }
}
