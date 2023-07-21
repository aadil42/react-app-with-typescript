
import {useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {

  const [myTodos, setMyTodos] = useState<Todo[]>([]);
  // const myTodos = [
    // new Todo('item1'),
    // new Todo('item2')
  // ]; 
  const addTodo = (incomingTodo: string) => {
      setMyTodos((preTodo: Todo[]) => {
        return [...preTodo, new Todo(incomingTodo)];
      }); 
  }
  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <Todos items={myTodos}/>
    </div>
  );
}

export default App;
