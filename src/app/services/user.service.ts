import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModel, User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // URL: 'https://api.freeprojectapi.com/api/SmartParking/login'

  loginUser(data:User): Observable<IUserModel> {
    return this.http.post<IUserModel>("https://api.freeprojectapi.com/api/SmartParking/login", data)
  }
}
