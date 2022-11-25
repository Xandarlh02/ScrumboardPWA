import { Column } from './../models/column';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  url = "https://localhost:7182/api/Columns/"

  constructor(private http: HttpClient) { }

  // PostColumnToBoard():Observable<Column>{
  //   return this.http.post<Column>(this.url + )
  // }
}
