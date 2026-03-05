import { useState } from "react";

function NewTaskForm({onAddTask}) {

    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && inputValue.trim() !== ''){
            onAddTask(inputValue);
            setInputValue('');
        }
    };

    return(
        <header className="header">
            <h1>todos</h1>
            <input 
                className="new-todo" 
                type="text" 
                placeholder="What needs to be done?" 
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </header>
    )
}

export default NewTaskForm;