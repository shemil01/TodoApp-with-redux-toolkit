import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTask,removeTask,editTask} from "../feature/todoSlice"
import "./Todo.css";


const AddTodo = () => {
const [addInput,setAddInput]=useState("")
const [editIndex,setEditIndex] = useState(null)
const [editList,setEditList] = useState("")
const dispatch = useDispatch()

const addedList=useSelector((state)=>state.todoApp).todos
console.log(addedList)
const handleAddSubmit = ()=>{
 if(addInput !== ""){
    dispatch(addTask({id:addedList.length,data:addInput}));
    setAddInput("")
 }
}
const handleDelete = (todoId)=>{
  dispatch(removeTask(todoId))
}
const cancelEdit =()=>{
  setEditIndex(null)
  setEditList("")
}
const handleEditSubmit = () => {
  dispatch(editTask({
      todosId: editIndex,
      updatedTask: editList,
  }));
  setEditIndex(null)
};

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
  <button onClick={handleDelete}className='dlt-btn' > delete</button>
  <button onClick={()=>setEditIndex(item.id)} className='edit-btn'>edit</button>
  {editIndex === item.id ? (
    <div>
      <input type="text" onChange={(e)=>setEditList(e.target.value)} />
      <button onClick={handleEditSubmit} className='add-btn' >save</button>
      <button onClick={cancelEdit} className='add-btn' >cancel</button>
    </div>
   
  ):""}
 
   
  
 
  </div>
  );

})}

    </div>
  )
}

export default AddTodo