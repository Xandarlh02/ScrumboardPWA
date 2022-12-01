import { Column } from './column';

export class Board{
  id:number | undefined
  title:string | undefined
  columns!: Array<Column>;
  ownerId:number | undefined
}