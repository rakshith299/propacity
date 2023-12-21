import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import store from "./store.js";
import Home from "./components/Home.js";
import { useEffect } from 'react';
import { setTodos } from './slices/todo.js';

function App() {

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
