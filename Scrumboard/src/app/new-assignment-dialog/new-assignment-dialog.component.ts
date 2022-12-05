import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assignment } from 'src/models/assignment';
import { AssignmentService } from 'src/services/assignment.service';

@Component({
  selector: 'app-new-assignment-dialog',
  templateUrl: './new-assignment-dialog.component.html',
  styleUrls: ['./new-assignment-dialog.component.css']
})
export class NewAssignmentDialogComponent implements OnInit {
  
  title:any
  description:any
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }

  AddAssignment(title:string, description:string, columnId:number){
    //Creating new assignment based on the values from the user
    let assignment = new Assignment()
    assignment.title = title, assignment.description = description, assignment.columnId = columnId
    this.assignmentService.PostAssignmentToColumn(assignment).subscribe( e => {
    })
  }
}
