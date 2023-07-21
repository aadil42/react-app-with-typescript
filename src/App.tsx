
import {useState} from 'react';
import Todos from './components/Todos';
// import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

import TodoContextProvider from './store/TodoContext';

function App() {

  return (
    <TodoContextProvider >
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
