import { useState, useEffect} from "react";
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({text, status, onToggleTaskStatus, onDeleteTask, onEdit, createdAt }) {

    const [editing, setEditing] = useState(false);

    const [timeAgo, setTimeAgo] = useState(
        formatDistanceToNow(createdAt, { addSuffix: true, includeSeconds: true })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAgo(formatDistanceToNow(createdAt, { addSuffix: true, includeSeconds: true }));
        }, 1000);
        return () => clearInterval(interval);
    }, [createdAt]);

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
                    <span className="created">created {timeAgo}</span>
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

Task.propTypes = {
    text: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    onToggleTaskStatus: PropTypes.func,
    onDeleteTask: PropTypes.func,
    onEdit: PropTypes.func
};

Task.defaultProps = {
    text: "",
    status: "active",
    createdAt: new Date(),
    onToggleTaskStatus: () => {},
    onDeleteTask: () => {},
    onEdit: () => {}
};

export default Task;