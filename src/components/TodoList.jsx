import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './TodoList.css';
import { BsXLg } from 'react-icons/bs';
TodoList.propTypes = {
    todos: PropTypes.array,
    setTodoList: PropTypes.func
};
TodoList.defaultProps = {
    todo: [],
    settodo: null
};

function TodoList(props) {
    const { todos, setTodoList } = props;
    const handleComplete = todo => {
        todo.completed = !todo.completed;

        const newTodoList = [...todos];

        setTodoList(newTodoList);

        console.log(todo)

    };
    const handleDelete = todo => {
        setTodoList(todos.filter((item) => item.id !== todo.id));

    }
    return (
        <div>

            {todos.map(todo => (
                <div className="todoWarapper">
                    <div
                        onClick={() => handleComplete(todo)} className='todo'>{todo.title}{todo.completed ? '(Completed)' : ''} </div>
                    <button onClick={() => { handleDelete(todo) }} key={todo.id}>
                        <div className='icon'><BsXLg /></div></button></div>
            ))}

        </div>
    );
}

export default TodoList;