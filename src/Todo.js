import React from 'react';

function Todo(props) {
    return (
        <div className={`todo ${props.todo.favorite ? 'selected' : ''}`}>
            <div className="favorite">
                <button onClick={() => props.makeFavorite(props.index)}>*</button>
            </div>
            <div className="todo-text">
                {props.todo.text}
            </div>
            <div className="actions">
                <button onClick={() => props.deleteTodo(props.index)}>X</button>
            </div>
        </div>
    );
}

export default Todo;