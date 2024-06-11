//?This is a Reduser.
import { createSlice, nanoid } from "@reduxjs/toolkit"; // Importing createSlice and nanoid from @reduxjs/toolkit

const initialState = {
    todos: [{ id: 1, text: "Hello world" }] // Defining the initial state with a sample todo item
}

export const todoSlice = createSlice({
    name: 'todo', // Naming the slice 'todo'
    initialState, // Setting the initial state
    reducers: {
        addTodo: (state, action) => { // Reducer function to add a todo
            if(action.payload === "") {
                alert("empty not allowed")
                return
            }
            const todo = {
                id: nanoid(), // Generating a unique id for the new todo using nanoid
                text: action.payload // Setting the text of the todo from the action payload
            }
            state.todos.push(todo); // Adding the new todo to the state's todos array
        },
        removeTodo: (state, action) => { // Reducer function to remove a todo
            // console.log(action.payload); // Commented out debug statement
            state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Filtering out the todo with the id matching the action payload
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions; // Exporting the addTodo and removeTodo actions

export default todoSlice.reducer; // Exporting the reducer function as the default export