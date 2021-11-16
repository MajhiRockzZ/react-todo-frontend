import { useState, Fragment } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodosHandler = () => {
    fetch("http://127.0.0.1:8000/apis/v1/")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setTodos(responseData);
      });
  };

  return (
    <Fragment>
      <button onClick={fetchTodosHandler}>Fetch Todos</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default App;
