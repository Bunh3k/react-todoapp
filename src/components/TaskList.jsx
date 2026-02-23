import Task from './Task';
import {useState} from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        {id: 1, text: "Completed task", status: "completed"},
        {id: 2, text: "Editing task", status: "editing", isEditing: true},
        {id: 3, text: "Active task", status: "active"}
    ]);

    const toggleTaskStatus = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                const newStatus = task.status === 'active' ? 'completed' : 'active';
                return {...task, status: newStatus};
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const completeEditing = (id, newText) => {
        const editTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, text: newText, status: 'editing', isEditing: !(task.isEditing)};
            }
            return task;
        })
        setTasks(editTasks);
    }

    const handleKeyDown = (event, id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id && event.key === 'Enter'){
                return {...task, text: event.target.value, status: 'active', isEditing: !(task.isEditing)};
             }
            return task;
        })
        setTasks(updatedTasks);
    }

    return(
        <ul className="todo-list">
            {tasks.map(task => 
                <Task
                    key={task.id}
                    text={task.text}
                    status={task.status}
                    isEditing={task.isEditing}
                    onToggleTaskStatus={()=> toggleTaskStatus(task.id)}
                    onDeleteTask={()=> deleteTask(task.id)}
                    onEdit={()=> completeEditing(task.id, task.text)}
                    onEnter={(event) => handleKeyDown(event, task.id)}
                />
            )}
        </ul>
    )
}

export default TaskList;