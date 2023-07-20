
import Todo from '../models/Todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map((itemData) => <TodoItem key={itemData.id} text={itemData.text}/>)}
        </ul>
    );
}

export default Todos;