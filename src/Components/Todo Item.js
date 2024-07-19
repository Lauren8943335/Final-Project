import React from "react";

function TodoItem({ todos, deleteTask, toggleCompleted }) {
    function handleChange() {
     toggleCompleted(todos.id);
     }
     
     return (
     <div className="todo-item">
     <input 
     type="checkbox"
     checked={todos.completed}
     onChange={handleChange}
     />
    <p>{todos.value}</p>
    <button onClick={() => deleteTask(todos.id)}>
     X
     </button>
     </div>
     );
    }
    export default TodoItem;