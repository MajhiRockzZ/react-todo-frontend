import "./App.css";

function App() {
  fetch("http://127.0.0.1:8000/apis/v1/")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });

  return <h1>React Frontend</h1>;
}

export default App;
