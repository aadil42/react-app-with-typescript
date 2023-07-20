import Todo from '../models/Todo';

const TodoItem: React.FC<{text: string}> = (props) => {
    return <li>{props.text}</li>;
}

export default TodoItem;