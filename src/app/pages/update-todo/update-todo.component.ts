import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { updateTodo } from 'src/app/store/todo.action';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit{
  todo:Todo | undefined=new Todo()
     constructor(private activatedRoute:ActivatedRoute,private store:Store<{todo:Todo[]}>){}
  ngOnInit(): void {
    // todoid from url
   const todoid= this.activatedRoute.snapshot.paramMap.get("todoId");
   this.store.select("todo").subscribe({
    next:data=>{
     let todo= data.find(todo=>todo.id==todoid)
     this.todo=new Todo(todo?.id,todo?.title,todo?.content,todo?.status,todo?.addedDate)
     console.log(this.todo);
     
    }
   })
  }
  updateFormSubmitted(event:SubmitEvent){
    event.preventDefault()
    this.store.dispatch(updateTodo({todoId:this.todo!.id,todo:{
      id:this.todo!.id,
      title:this.todo!.title,
      status:this.todo!.status,
      content:this.todo!.content,
      addedDate:this.todo!.addedDate
    }}))
    alert("Updated Sucessfully")
  }
}

// ! this is not null asssertion operator
