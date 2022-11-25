import { BoardService } from './../../services/board.service';
import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.GetBoard(3).subscribe( e => {
      console.log(e)
    })
    
  }

}
