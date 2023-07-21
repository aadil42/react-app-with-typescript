
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

  const removeTodo = (incomingTodoId: string) => {
    setMyTodos((preTodo: Todo[]) => {
      return preTodo.filter((todo) => {        
        return todo.id !== incomingTodoId;
      });
    })
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <Todos removeTodo={removeTodo} items={myTodos}/>
    </div>
  );
}

export default App;
