import { createReducer,on } from "@ngrx/store";
import { Todo } from "../models/todo";
import { addTodo, deleteTodo, updateTodo } from "./todo.action";
const todosString=localStorage.getItem("todos")
const initialState:Todo[]=todosString?JSON.parse(todosString):[]
export const todoReducer=createReducer(
    initialState,
    on(addTodo,(state,payload)=>{
        console.log("Todo Action fired")
        console.log(payload);
        return [...state,payload]
    }),
    on(deleteTodo,(state,payload)=>{
        console.log("Deleting Todos...");
        
      const newTodos=  state.filter(todo=>todo.id!=payload.todoId)
      return newTodos
    }),
    on(updateTodo,(state,payload)=>{
      console.log("Updating Todo...");
      
     const newTodolist= state.map(todo=>{
        if(todo.id==payload.todoId){
          // update and return
          // todo.title=payload.todo.title
          // todo.content=payload.todo.content
          // todo.status=payload.todo.status
          // todo.addedDate=payload.todo.addedDate
          return new Todo(payload.todo.id,payload.todo.title,payload.todo.content,payload.todo.status,payload.todo.addedDate)
        }
        else{
          return todo
        }
      })
      return newTodolist
    })
    )