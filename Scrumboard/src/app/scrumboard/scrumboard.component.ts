import { BoardService } from './../../services/board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.GetBoard().subscribe( e =>{
      console.log(e)
    })
  }

}
