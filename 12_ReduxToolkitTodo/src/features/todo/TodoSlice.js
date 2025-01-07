import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo: (state,action) => {
            const todo = {
                id:nanoid(), 
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeToDo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            state.todos = state.todos.map((todo)=>todo.id === action.payload?{...todo,text:action.payload.text}:todo)
        }
    }
})

export const {addToDo,removeToDo,updateTodo} = todoSlice.actions

export default todoSlice.reducer