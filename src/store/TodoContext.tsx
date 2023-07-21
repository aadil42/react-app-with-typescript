import React, {useState} from 'react';
import Todo from "../models/Todo";

type TodoContextType = {
    items: Todo[],
    addTodo: (incomingTodo: string) => void,
    removeTodo: (incomingTodoId: string) => void
}

export const TodoContext = React.createContext<TodoContextType>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {}
});

const TodoContextProvider: React.FC = (props) => {

    const [myTodos, setMyTodos] = useState<Todo[]>([]);
    
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

    const TodoContextData: TodoContextType = {
        items: myTodos,
        addTodo,
        removeTodo
    }

    return (
        <TodoContext.Provider value={TodoContextData}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;
