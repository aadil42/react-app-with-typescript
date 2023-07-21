import classes from './TodoItem.module.css';
import Todo from '../models/Todo';

const TodoItem: React.FC<{data: Todo, removeTodo: (id: string) => void}> = (props) => {
    const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
        props.removeTodo(event.currentTarget.id);
    }
    return <li onClick={clickHandler} id={props.data.id} className={classes.item}>{props.data.text}</li>;
}

export default TodoItem;