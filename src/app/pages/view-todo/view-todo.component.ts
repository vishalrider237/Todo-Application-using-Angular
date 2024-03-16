import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { deleteTodo } from 'src/app/store/todo.action';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
 
  todo: Todo | undefined;
    constructor(private activatedRoute:ActivatedRoute,private store:Store<{todo:Todo[]}>){

    }
  ngOnInit(): void {
   const todoId= this.activatedRoute.snapshot.paramMap.get("todoId")
   this.store.select("todo").subscribe({
    next:(todos)=>{
       this.todo=  todos.find(todo=>todo.id==todoId)
    }
   })
  }
 
}
