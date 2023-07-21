import classes from './NewTodo.module.css';

import {useRef, useContext} from 'react';

import {TodoContext} from '../store/TodoContext';

const NewTodo: React.FC = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const ctx = useContext(TodoContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;
        
        if(enteredText.trim().length === 0) {
            // thowe an error
            return;
        }
        ctx.addTodo(enteredText);
    }

    return(
        <form className={classes.form} action="#" onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={inputRef}></input>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;