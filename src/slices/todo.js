import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};


const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos =  [...state.todos, action.payload];

        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((each) => each.id !== action.payload);

        },
        editTodo: (state, action) => {
            const {id, title, text} = action.payload;

            const index = state.todos.findIndex((each) => each.id === id);

            if(index !== -1){
                state.todos = [...state.todos.slice(0,index), {...state.todos[index], title:title, text: text}, ...state.todos.slice(index+1)]
            }

        }
    }
})

export const {setTodos, deleteTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;