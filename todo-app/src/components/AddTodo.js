import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {addTask,removeTask,editTask} from "../feature/todoSlice"
import "./Todo.css";
import { current } from '@reduxjs/toolkit';

const AddTodo = () => {
const [addInput,setAddInput]=useState("")
const [editIndex,setEditIndex] = useState(null)
const [editList,setEditList] = useState("")
const dispatch = useDispatch()
useSelector((state)=>state.todoApp.todo)
const addedList=useSelector((state)=>state.todoApp).todos

const handleAddSubmit = ()=>{
 if(addInput !== ""){
    dispatch(addTask({id:addedList.length,data:addInput}));
    setAddInput("")
 }
}
const handleDelete = (todoId)=>{
  dispatch(removeTask(todoId))
}

const selectEdit=(index,currentTask)=>{
  setEditIndex(index)
  setEditList(currentTask)
}
const cancelEdit =()=>{
  setEditIndex(null)
  setEditList(" ")
}
const handleEditSubmit=(index)=>{
  dispatch(editTask({
todoId:index,
updatedList:editList,
  }))
}

  return (
    <div>
        <h1>TodoApp</h1>
        <form className='input-container' >
            <input  type='text'   placeholder='type some thing' className='input'value={addInput} onChange={(e)=>setAddInput(e.target.value)}  />
            <button className='add-btn' type='button' onClick={handleAddSubmit} >add</button>
            
            
           
        </form>
        {addedList.map((item) => {
  return (
  <div className='input-container'>
  <h1 style={{color:"white"}}>{item.data}</h1>
  <button onClick={handleDelete}> delete</button>
  <button onClick={()=>setEditIndex(item.id)}>edit</button>
  {editIndex === item.id ? (
    <div>
      <input type="text"  />
      <button onClick={handleEditSubmit}>save</button>
    </div>
   
  ):""}
 
   
  
 
  </div>
  );

})}

    </div>
  )
}

export default AddTodo