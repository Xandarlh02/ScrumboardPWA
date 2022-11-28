import { Assignment } from './assignment';

export class Column{
  id:number | undefined
  title:string | undefined
  description:string | undefined
  assignments:Array<Assignment> | undefined
  boardId:number | undefined
}