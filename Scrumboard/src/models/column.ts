import { Assignment } from './assignment';

export class Column{
  Id:number | undefined
  Title:string | undefined
  Description:string | undefined
  Assignments:Array<Assignment> | undefined
}