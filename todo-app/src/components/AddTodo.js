import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={addTodoHandler}>
                <input
                    type='text'
                    className='input'
                    style={{ color: 'black' }}
                    placeholder='Type something'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default AddTodo;