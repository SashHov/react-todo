import { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.title) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const removeTodo = id => {
    const newTodos = [...todos].filter(el => el.id !== id);
    setTodos(newTodos);
  }

  const doneTodo = id => {
    let newTodos = todos.map(el => {
      if(el.id === id) el.done = !el.done;
      return el;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      {todos.length ? <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} /> : <p>NO TODOS</p>}
    </div>
  );
}

export default App;
