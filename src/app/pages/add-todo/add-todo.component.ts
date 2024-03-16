import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
       todo=new Todo()
       store:Todo[]=[]
       FormSubmitted(event:SubmitEvent){
        this.todo.id=uuidv4();
           event.preventDefault()
           console.log(this.todo);
           this.store.push(this.todo)
       }
}

