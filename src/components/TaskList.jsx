import Task from './Task';

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
                    
                />
            )}
        </ul>
    )
}

export default TaskList;