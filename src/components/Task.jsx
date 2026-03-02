function Task({text, status, isEditing, onToggleTaskStatus, onDeleteTask, onEdit, }) {

    const liClass =isEditing ? 'editing' : status;

    return(

        <li className={liClass}>

            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={status === 'completed'} 
                    onClick={onToggleTaskStatus}
                />
                <label>
                    <span className="description">{text}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit" onClick={onEdit}></button>
                <button className="icon icon-destroy" onClick={onDeleteTask}></button>
            </div>
            {isEditing && <input type="text" defaultValue={text} className="edit" onKeyDown={onEdit} autoFocus/>}
        </li>
    )
}

export default Task;