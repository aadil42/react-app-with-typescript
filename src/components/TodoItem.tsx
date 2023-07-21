import classes from './TodoItem.module.css';
import Todo from '../models/Todo';
import {useContext} from 'react';

import {TodoContext} from '../store/TodoContext';

const TodoItem: React.FC<{data: Todo}> = (props) => {

    const ctx = useContext(TodoContext);

    const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
        ctx.removeTodo(event.currentTarget.id);
    }
    return <li onClick={clickHandler} id={props.data.id} className={classes.item}>{props.data.text}</li>;
}

export default TodoItem;