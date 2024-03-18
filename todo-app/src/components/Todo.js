import React from 'react';
import { useSelector } from 'react-redux';

const Todo = () => {
    const todos = useSelector(state => state.todo.todos);

    
    return (
        <>
            <div>Todo</div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.text}</div>
            ))}
        </>
    );
};

export default Todo;