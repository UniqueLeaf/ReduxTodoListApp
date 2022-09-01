import './App.css';
import { useState } from 'react';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { useDispatch, useSelector } from 'react-redux/es/exports';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter a Todo' style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }} 
          onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 15,
            marginLeft: 20,
          }}>Go</button>
        </form>
        <ul className="allTodos">
          {
            todos && todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "none",
                  color: "white",
                  backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
