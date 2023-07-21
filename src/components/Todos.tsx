import classes from './Todos.module.css';
import {useContext} from 'react';

import {TodoContext} from '../store/TodoContext';

import Todo from '../models/Todo';
import TodoItem from './TodoItem';


const Todos: React.FC = () => {

    const ctx = useContext(TodoContext);
    
    return (
        <ul className={classes.todos}>
            {ctx.items.map((itemData) => <TodoItem data={itemData}/>)}
        </ul>
    );
}

export default Todos;