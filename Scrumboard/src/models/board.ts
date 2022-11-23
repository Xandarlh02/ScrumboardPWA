import { Column } from './column';

export class Board{
  Id:number | undefined
  Title:string | undefined
  Columns:Array<Column> | undefined
  OwnerId:number | undefined
}