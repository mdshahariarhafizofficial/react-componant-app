export default function Todo({todo}){
    return(
        <div className="card">
            <h4>Title: {todo.title}</h4>
            <h4>Status: {todo.completed ? 'Completed': 'Not Completed'}</h4>
        </div>
    )
}