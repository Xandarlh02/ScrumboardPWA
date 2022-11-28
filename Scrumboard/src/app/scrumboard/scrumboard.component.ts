import { BoardService } from './../../services/board.service';
import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Board } from 'src/models/board';


@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  public board = new Board();

  ngOnInit(): void {
    this.boardService.GetBoard(3).subscribe( e => {
      this.board = e;
      console.log(e)
    })
    
  }

}
