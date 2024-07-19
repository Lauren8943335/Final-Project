import React, {useState} from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


function TodoList() {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")

  function addTodo(value){ 
    const newTodo ={ 
      id: Date.now(),
      value,
      completed:false
    };
    setTodos([...todos, newTodo]);
    setValue('');
  }
  function deleteTask(id) {
    setTodos(todos.filter(todos => todos.id !== id));
  }
  function toggleCompleted(id){ 
    setTodos(todos.map(todos =>{ 
      if (todos.id === id) { 
        return {...todos, completed: !todos.completed} (<CheckCircleOutlineIcon className="status-icon completed" />); 
      } else { 
        return todos(<RadioButtonUncheckedIcon Class="status-icon incomplete"/>); 
      }
    }));
  }
  
    const onChange = (e) => {
      setValue(e.target.value)
    }
    return (
      <div>
        <input type="text" style={{ fontSize: "100%", marginTop: "4px", color:"green", textAlign:'center' }} value={value} onChange={onChange} placeholder="Enter Task..."/> 
        <button onClick={addTodo}>Add</button> 
        <button onClick={() => deleteTask(todos.id)}><i className="#deleteForever"></i>Delete <DeleteForeverIcon className="delete-icon" /></button>
        <ul>
          {todos.map((item, index) => (
              <li key={index}>{item}{deleteTask}{toggleCompleted}</li>
            ))}
        </ul>
      </div>
    );
  };

export default TodoList;