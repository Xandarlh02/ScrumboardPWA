import { Column } from './column';

export class Board{
  id!:number 
  title!:string 
  columns!: Array<Column>;
  ownerId!:number
}