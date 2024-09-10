import React from 'react'
import { useState } from 'react'

let initialTodos = [
    { id: 1, title: "learn html", completed: true },
    { id: 2, title: "learn css", completed: false },
    { id: 3, title: "learn javascript", completed: false }
]

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('');


    const addTodo = (title) => {
        setTodos([...todos, { id: Date.now(), title, completed: false }]);
        setNewTodo('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo))
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo)
    }



    return (
        <div>
            <div>
                <h1>Add New Todo</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='title'
                        value={newTodo}
                        onChange={handleChange}
                        placeholder='Enter your Todo here'
                    />

                    <button type="submit">Save todo</button>
                </form>
            </div>
            <br />
            <div>
                <h1>Todo List</h1>
                {
                    todos.map(todo => (
                        <div key={todo.id}>
                            <p style={{ color: todo.completed ? 'red' : '' }}>{todo.title} </p>
                            <button onClick={e => {
                                e.stopPropagation();
                                toggleTodo(todo.id)
                            }
                            }>
                                completed
                            </button>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(todo.id)
                            }
                            }>
                                delete
                            </button>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}
export default TodoList;

