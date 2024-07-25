import React, { useState } from "react";
//import TodoItem from "./Todo Item";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const initialData = [''];

const StatusIcon = ({ completed }) => {
  return completed ? (
    <DoneIcon className="status-icon completed" />
  ) : (
    <RadioButtonUncheckedIcon className="status-icon" />
  );
};

const ToDoItem = ({ item, handleStatus, handleRemove }) => {
  const { title, completed } = item;
  return (
    <div className="todo">
      <button
        className="todo-item"
        style={{
          textDecoration: completed ? `line-through` : `none`
        }}
        onClick={handleStatus}
      >
       <StatusIcon completed={completed} />
        {title}
      </button>
      <button className="btn-delete" onClick={handleRemove}>
      <DeleteForeverIcon className="delete-icon" />
      </button>
    </div>
  );
};

const FilterButton = ({ activeFilter, filter, onClick }) => {
  return (
    <button
      className={`filter ${activeFilter === filter && `active`}`}
      onClick={onClick}
    >
      {filter}
    </button>
  );
};

const TodoList = () => {
  const [addTodo, setAddTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(initialData);

  const handleStatus = (item) => {
    const itemIndex = todos.findIndex((elem) => elem.id === item.id);
    const updatedTodo = todos[itemIndex];
    const newTodos = [...todos];
    newTodos.splice(itemIndex, 1, {
      ...updatedTodo,
      completed: !updatedTodo.completed
    });
    setTodos(newTodos);
  };

  const handleRemove = (item) => {
    const itemIndex = todos.findIndex((elem) => elem.id === item.id);
    const newTodos = [...todos];
    newTodos.splice(itemIndex, 1);
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos.push({ title: addTodo, completed: false, id: Date.now() });
    setTodos(updatedTodos);
    setAddTodo("");
  };

  const filterTodos = () => {
    if (filter === "complete") {
      return todos.filter((item) => item.completed === true);
    } else if (filter === "incomplete") {
      return todos.filter((item) => item.completed === false);
    } else {
      return todos;
    }
  };

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const visibleTodos = filterTodos();
  const doneCount = todos.filter((item) => item.completed).length;

  return (
    <div>
      <div className="field">
        <input type="text" value={addTodo} onChange={handleChange} placeholder="Enter Task..." />
        <button
          className="btn btn--add"
          onClick={handleAddTodo}
          disabled={addTodo.length < 1}
        >
          Add
        </button>
      </div>
      <div className="filter-wrapper">
        <div className="filter-tabs">
          <FilterButton
            activeFilter={filter}
            filter="all"
            onClick={() => setFilter("all")}
          />
          <FilterButton
            activeFilter={filter}
            filter="complete"
            onClick={() => setFilter("complete")}
          />
          <FilterButton
            activeFilter={filter}
            filter="incomplete"
            onClick={() => setFilter("incomplete")}
          />
        </div>
        <p style={{ lineHeight: 1.2 }}>
          {doneCount === todos.length
            ? `🎉 ${doneCount}/${todos.length} all of your task complete!`
            : `${doneCount}/${todos.length} of your task complete`}
        </p>
      </div>
      {visibleTodos.length === 0 && (
        <p style={{ paddingLeft: "1rem" }}>No task to display here, 📝 hooray...</p>
      )}
      {visibleTodos.length > 0 &&
        visibleTodos.map((item, idx) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              handleStatus={() => handleStatus(item)}
              handleRemove={() => handleRemove(item)}
            />
          );
        })}
    </div>
  );
};




export default TodoList;
