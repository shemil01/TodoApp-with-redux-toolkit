import {createSlice} from "@reduxjs/toolkit"



const initialState={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.todos.push(action.payload)
        },
        removeTask:(state,action)=>{
            state.todos.splice(action.payload,1)
        }, 
      editTask:(state,action)=>{
        const {todosId,updatedTask} =action.payload.datas
        const items = state.todos.find((item) => item.id === todosId);
        if (items) {
          items.data = updatedTask;
        }
      }
    }
})
export const {addTask,removeTask,editTask}= todoSlice.actions
export default todoSlice.reducer