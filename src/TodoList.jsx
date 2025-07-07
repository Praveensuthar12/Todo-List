import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "smaple-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }


    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };


    let MarkAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    };


    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                        // task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let UpperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };



    return (
        <div>

            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br /><br />
            <button onClick={addNewTask} disabled={newTodo === ""} >Add Task</button>
            <br /><br /><br />

            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={MarkAllDone}>Mark All as Done</button>
        </div>
    )
}