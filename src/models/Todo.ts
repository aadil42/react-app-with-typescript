class Todo{
    text: string;
    id: string;

    constructor(incomingText: string) {
        this.text = incomingText;
        this.id = Math.floor(Math.random() * 1000000).toString();
    }
}

export default Todo;