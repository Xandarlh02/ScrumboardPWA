import { Assignment } from './../models/assignment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  url = "https://localhost:7182/api/Assignments/"

  constructor(private http: HttpClient) { }

  PostAssignmentToColumn(assignment:Assignment, columnId:number){
    assignment.columnId = columnId
    return this.http.post<Assignment>(this.url,assignment )
  }

  MoveAssignment(assignment:Assignment, newColumnId:number){
    assignment.columnId = newColumnId
    return this.http.put<Assignment>(this.url + assignment.id, assignment )
  }
}
