import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Column } from 'src/models/column';
import { ColumnService } from 'src/services/column.service';


@Component({
  selector: 'app-new-column-dialog',
  templateUrl: './new-column-dialog.component.html',
  styleUrls: ['./new-column-dialog.component.css']
})
export class NewColumnDialogComponent implements OnInit {
  title:any
  description:any

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private columnService:ColumnService) { }

  ngOnInit(): void {
  }

  AddColumn(title:string, description:string, boardId:number){
    let column = new Column()
    column.title = title, column.description = description, column.boardId = boardId
    this.columnService.PostColumnToBoard(column).subscribe( e => {
    })
  }

}
