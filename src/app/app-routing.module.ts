import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
     path:'',
     redirectTo:'home',
     pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home- Todo Manager'
  },
  {
    path:'add-todo',
    component:AddTodoComponent,
    title:'Add- Todo Manager'
  },
  {
    path:'todos',
    component:ViewTodosComponent,
    title:'View- Todos Manager'
  },
  {
    path:'todo',
    component:ViewTodoComponent,
    title:'Todo Manager- Todo Manager'
  },
  {
    path:'update-todo',
    component:UpdateTodoComponent,
    title:'Uppdate Todo- Todo Manager'
  },
  {
    path:'about',
    component:AboutComponent,
    title:'About- Todo Manager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
