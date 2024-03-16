import { Component } from '@angular/core';
import { HelperService } from './services/helper.service';
import { Store } from '@ngrx/store';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-Manager';
  constructor(private helper:HelperService,private store:Store<{todo:Todo[]}>){
        this.store.select("todo").subscribe({
          next:(todos)=>{
            this.helper.saveTodosToLocalStorage(todos)
          }
        })
  }
}
