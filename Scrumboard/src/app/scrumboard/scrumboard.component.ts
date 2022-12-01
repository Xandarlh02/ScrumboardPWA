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

  constructor(private boardService: BoardService) { }

  public board = new Board();

  idsArray:string[] = []

  ngOnInit(): void {
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
    console.log(droppedToColumnId)
    console.log()
    console.log(event)
    console.log("" + event.previousContainer.id)

    console.log("Prev index in array: " + event.previousIndex)

    console.log(event.container.data[event.previousIndex].title)
  }

}
