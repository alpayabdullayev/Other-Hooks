import React from 'react';
import UseLocalStorage from '../../Hooks/UseLocalStorage';

function LocalStorage() {
    const [todo, setTodo] = UseLocalStorage("todo");

    function addTodo() {
        setTodo("Salam");
    }

    return (
        <>
            <div>
                <button onClick={addTodo}>+</button>
                <div>
                    {todo.map((x) => (
                        <li>{x}</li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LocalStorage;
