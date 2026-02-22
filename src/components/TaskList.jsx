import Task from "./Task";

function TaskList(){
    return(
        <ul className="todo-list">
            <Task text="Completed task" status="completed"/>
            <Task text="Editing task" status="editing" isEditing={true}/>
            <Task text="Active task" status=""/>
        </ul>
    )
}

export default TaskList;