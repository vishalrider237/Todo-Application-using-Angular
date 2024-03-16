import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { addTodo } from 'src/app/store/todo.action';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
       todo=new Todo()
      //  store:Todo[]=[]
      todos:Todo[]=[]
       constructor(private store:Store<{todo:Todo[]}>){}
       FormSubmitted(event:SubmitEvent){
        this.todo.id=uuidv4();
           event.preventDefault()
           console.log(this.todo);
          //  this.store.push(this.todo)
          this.store.dispatch(addTodo(this.todo))
          alert("Added in Store")
          this.todo=new Todo()
       }
       ngOnInit():void{
        this.store.select('todo').subscribe({
          next:data=>{
            this.todos=data
          }
        })
      }
}

