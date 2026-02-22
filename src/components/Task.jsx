function Task({text, status, isEditing}) {

    const liClass = isEditing ? "editing" : status;
    return(
        
        <li className={liClass}>
            
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label >
                    <span className="description">{text}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {isEditing && <input type="text" className="edit" defaultValue={text} />}
        </li>
    )
}

export default Task;