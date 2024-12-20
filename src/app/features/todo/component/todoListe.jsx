import { useState } from "react";
import { createContext } from "react"
import TodoForm from "./todoForm";

const TodosContext = createContext();

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    async function addTodo() {
    }
    return (
        <TodosContext.Provider value={{ addTodo, todos }}>
            <TodoForm />
            Todos
        </TodosContext.Provider>
    )
}