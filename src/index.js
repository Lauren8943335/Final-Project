import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoList from "./Components/Todo List.js";
import "./Components/App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App () {
      return (
        <div>
          <h1 className="container">Note Keeper App 📒</h1>
        <Router>
          <Routes>
            <Route exact path="/" element ={<TodoList />} />
            </Routes>
        </Router>
        </div>
      );
    }
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(rootElement).render(<App />);
