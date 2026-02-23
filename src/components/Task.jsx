function Task({text, status, isEditing, onToggleTaskStatus, onDeleteTask, onEdit, onEnter}) {

    const liClass = isEditing ? "editing" : status;

    return(

        <li className={liClass}>

            <div className="view">
                <input className="toggle" type="checkbox" checked={status === 'completed'} onClick={onToggleTaskStatus}/>
                <label>
                    <span className="description">{text}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit" onClick={onEdit}></button>
                <button className="icon icon-destroy" onClick={onDeleteTask}></button>
            </div>
            {isEditing && <input type="text" defaultValue={text} className="edit" onKeyDown={onEnter}/>}
        </li>
    )
}

export default Task;





// function Task({text, status, isEditing, onDelete,  onCompleteEditing, handleKeyEnter, onToggleStatus}) {

//     const liClass = isEditing ? "editing" : status;
//     return(
        
//         <li className={liClass}>
            
//             <div className="view">
//                 <input className="toggle" type="checkbox" checked={status === "completed"} onClick={onToggleStatus}/>
//                 <label >
//                     <span className="description">{text}</span>
//                     <span className="created">created 17 seconds ago</span>
//                 </label>
//                 <button className="icon icon-edit" onClick={() => onCompleteEditing(text) }></button>
//                 <button className="icon icon-destroy" onClick={onDelete}></button>
//             </div>
//             {isEditing && <input type="text" className="edit" defaultValue={text} onKeyDown={handleKeyEnter}/>}
//         </li>
//     )
// }

// export default Task;

// import {useState} from "react";
// import Task from "./Task";

// function TaskList(){
//     const [tasks, setTasks] = useState([
//         {id: 1, text: "Completed task", status: "completed"},
//         {id: 2, text: "Editing task", status: "editing", isEditing: true},
//         {id: 3, text: "Active task", status: "active"}
//     ])

//     const deleteTask = (id) => {
//         const updatedTasks = tasks.filter(task => task.id !== id);
//         setTasks(updatedTasks);
//     }


//     const completeEditing = (id, newText) => {
//         const editTasks = tasks.map(task => {
//             if(task.id === id) {
//                 return {...task, text: newText, isEditing: !(task.isEditing)}
//             }
//             return task;
//         })

//         setTasks(editTasks);
//     }

//     const handleKeyDown = (event, id) => {
//         if (event.key === 'Enter') {
//             const newText = event.target.value;
//             completeEditing(id, newText);
//         }
//     }

//     const toggleTaskStatus = (id) => {
//         const updatedTasks = tasks.map(task => {
//             if (task.id === id) {
//                 const newStatus = task.status === "completed" ? "active" : "completed";
//                 return {...task, status: newStatus};
//             }
//             return task;
//         });
//         setTasks(updatedTasks);
//     }


//     return(
//         <ul className="todo-list">
//             {tasks.map(task => 
//                 <Task 
//                     key={task.id} 
//                     text={task.text} 
//                     status={task.status} 
//                     isEditing={task.isEditing}
//                     onDelete={() => deleteTask(task.id)}
//                     onCompleteEditing={(newText) => completeEditing(task.id, newText)}
//                     handleKeyEnter={(event) => handleKeyDown(event, task.id)}
//                     onToggleStatus={() => toggleTaskStatus(task.id)}
//                  />
//             )}
//         </ul>
//     )
// }

// export default TaskList;