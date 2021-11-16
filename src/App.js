import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Layout from "./components/Layout";

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
    <Layout>
      <Button onClick={fetchTodosHandler}>Fetch Todos</Button>
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
    </Layout>
  );
}

export default App;
