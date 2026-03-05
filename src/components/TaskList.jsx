import Task from './Task';
import PropTypes from 'prop-types';

function TaskList({tasks, onToggle, onDelete, onEdit }) {
    
    return(
        <ul className="todo-list">
            {tasks.map(task => 
                <Task
                    key={task.id}
                    text={task.text}
                    status={task.status}
                    isEditing={task.isEditing}
                    onToggleTaskStatus={()=> onToggle(task.id)}
                    onDeleteTask={()=> onDelete(task.id)}
                    onEdit={(event)=> onEdit(event, task.id)}
                    createdAt={task.createdAt}
                    
                />
            )}
        </ul>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};


export default TaskList;