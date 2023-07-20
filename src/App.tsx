import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {

  const myTodos = [
    new Todo('item1'),
    new Todo('item2')
  ];

  return (
    <div className="App">
      <Todos items={myTodos}/>
      <NewTodo />
    </div>
  );
}

export default App;
