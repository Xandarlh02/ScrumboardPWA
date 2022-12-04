import { Assignment } from './../models/assignment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:7182/api/Users/"

  constructor(private http: HttpClient) { }

  GetAllUsers(){
    return this.http.get<User>(this.url)
  }
}
