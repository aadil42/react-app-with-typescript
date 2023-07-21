import classes from './Todos.module.css';

import Todo from '../models/Todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{items: Todo[], removeTodo: (id: string) => void}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((itemData) => <TodoItem removeTodo={props.removeTodo} data={itemData}/>)}
        </ul>
    );
}

export default Todos;