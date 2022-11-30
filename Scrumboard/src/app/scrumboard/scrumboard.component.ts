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

  ngOnInit(): void {
    this.boardService.GetBoard(1).subscribe( e => {
      this.board = e;
      console.log(this.board)
    })
    
  }
  drop(id:number) {
    console.log('skiftet')
    
  }

}
