import { Assignment } from './assignment';

export class Column{
  id!:number
  title:string | undefined
  description:string | undefined
  assignments!:Array<Assignment>
  boardId:number | undefined
}