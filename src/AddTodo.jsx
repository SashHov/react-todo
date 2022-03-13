import { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            title: input,
            done: false
        });
        setInput('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <input type='submit' value='ADD TODO' />
        </form>
    )
}

export default AddTodo;