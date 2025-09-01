import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBuilding, ISite, IUserModel, User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUserData!: IUserModel;
  siteData!: ISite;
  buildingData!: IBuilding;

  // This to sava data after reload page 
  constructor(private http: HttpClient) { 
  const loggeddata = localStorage.getItem('parkUser');
  if(loggeddata != null){
    this.loggedUserData = JSON.parse(loggeddata)
  }
}

  // URL: "https://api.freeprojectapi.com/api/SmartParking/login"

  loginUser(data:User): Observable<IUserModel> {
    return this.http.post<IUserModel>("https://api.freeprojectapi.com/api/SmartParking/login", data)
  }
}
