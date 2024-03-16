import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  saveTodosToLocalStorage(todo:Todo[]){
     localStorage.setItem("todos",JSON.stringify(todo))
  }
  getTodosFromLocalStorage(){
    const todosString=localStorage.getItem("todos")
   return todosString?JSON.parse(todosString):null
  }
}
