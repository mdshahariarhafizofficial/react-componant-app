import { use } from "react"
import Todo from "./Todo"
export default function Todos({todos}){
    const allTodos = use(todos) 
    return (
        <div style={{border: '3px solid red', padding: '20px', marginBottom: '30px'}}>
            <h1>Todos : {allTodos.length}</h1>

        {
            allTodos.map( todo => <Todo todo = {todo}></Todo> )
        }

        </div>
    )
}