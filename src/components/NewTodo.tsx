import {useRef} from 'react';

const NewTodo: React.FC<{addTodo: (text: string) => void}> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;
        
        if(enteredText.trim().length === 0) {
            // thowe an error
            return;
        }

        props.addTodo(enteredText);
    }

    return(
        <form action="#" onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={inputRef}></input>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;