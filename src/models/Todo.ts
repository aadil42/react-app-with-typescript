class Todo{
    text: string;
    id: string;

    constructor(incomingText: string) {
        this.text = incomingText;
        this.id = 'f' + Math.floor(Math.random() * 1000000).toString(); // adding f in front because we'll use it as id on li tag
    }
}

export default Todo;