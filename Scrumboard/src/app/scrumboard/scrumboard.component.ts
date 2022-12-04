import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { AssignmentService } from './../../services/assignment.service';
import { Assignment } from './../../models/assignment';
import { Column } from './../../models/column';
import { BoardService } from './../../services/board.service';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(private boardService: BoardService, private assignmentService:AssignmentService, private userService:UserService) { }

  public board = new Board();
  idsArray:string[] = []
  users:any

  ngOnInit(): void {
    this.GetBoard();
    this.GetUsers();
    
  }

  GetBoard(){
      this.boardService.GetBoard(1).subscribe( e => {
      this.board = e;

      //This adds all the column ids to a list to make it possible to move the assignments withing the columns
      e.columns.forEach(element => {
        this.idsArray.push(element.id.toString())
      });
    },
    error => {
      //Adding a new board if one doesnt already exist
      this.boardService.PostBoard().subscribe( e => {
        location.reload();
      })
    })
  }

  GetUsers(){
    this.userService.GetAllUsers().subscribe(e => {
      this.users = e
    })
  }

  AddAssignment(title:string, description:string, columnId:number){
    //Creating new assignment based on the values from the user
    let assignment = new Assignment()
    assignment.title = title, assignment.description = description, assignment.columnId = columnId
    this.assignmentService.PostAssignmentToColumn(assignment)
  }

  MoveAssignment(event: CdkDragDrop<Assignment[]>, droppedToColumnId:number): void {

    //Id of the column you are moving to
    console.log(droppedToColumnId)

    //The moving assignment
    let assignment = event.previousContainer.data[event.previousIndex]

    this.assignmentService.MoveAssignment(assignment,droppedToColumnId).subscribe( e => {
    });

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
