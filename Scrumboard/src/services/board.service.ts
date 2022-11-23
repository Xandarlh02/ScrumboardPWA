import { Board } from './../models/board';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  url = "https://localhost:7182/api/"

  constructor(private http: HttpClient) { }


  GetBoard():Observable<Board>{
    return this.http.get<Board>(this.url + 'Boards/3')
  }
}
