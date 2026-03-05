import { useState } from "react";

function Task({text, status, onToggleTaskStatus, onDeleteTask, onEdit }) {

    const [editing, setEditing] = useState(false);

    const handleEnter = (event) => {
        if(event.key === 'Enter'){
            onEdit(event);
            setEditing(false);
        }
    }

    const liClass = editing ? "editing" : status;

    return(

        <li className={liClass}>

            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={status === 'completed'} 
                    onChange={onToggleTaskStatus}
                />
                <label>
                    <span className="description">{text}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit" onClick={() => setEditing(true)}></button>
                <button className="icon icon-destroy" onClick={onDeleteTask}></button>
            </div>
            {editing && 
                <input 
                    type="text" 
                    defaultValue={text} 
                    className="edit" 
                    onKeyDown={handleEnter} 
                    autoFocus
                />
            }
        </li>
    )
}

export default Task;