import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [todo, setTodo] = useState(null)
useEffect(() => {
  console.log('callback in useEffect called')
  fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => setTodo(json))
}, [])

 console.log('app render')
 console.log(todo)


  return (
    <div className="App">
     {todo && 
     <>
      <h1>{todo.id}</h1>
      <h2>{todo.title} - {todo.completed}</h2>
     </>
     }
    </div>
  );
}

export default App;


