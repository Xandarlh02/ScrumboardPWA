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

  constructor(private boardService: BoardService, private assignmentService:AssignmentService) { }

  public board = new Board();

  idsArray:string[] = []

  ngOnInit(): void {
    this.GetBoard();
    
  }

  GetBoard(){
    this.boardService.GetBoard(3).subscribe( e => {
      this.board = e;
      console.log(this.board)

      e.columns.forEach(element => {
        this.idsArray.push(element.id.toString())
      });
      console.log(this.idsArray)

    })
  }

  public drop(event: CdkDragDrop<Assignment[]>, droppedToColumnId:number): void {

    //Id of the column you are moving to
    console.log(droppedToColumnId)

    //The moved object
    let assignment = event.previousContainer.data[event.previousIndex]

    this.assignmentService.MoveAssignment(assignment,droppedToColumnId).subscribe( e => {
      // this.GetBoard();
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
