import TasksFilter from "./TasksFilter"

function Footer({activeCount, filter, onChangeFilter, onClearCompleted}) {
    return(
        <footer className="footer">
            <span className="todo-count">
                {activeCount} items left
            </span>
            <TasksFilter 
                filter={filter} 
                onChangeFilter={onChangeFilter} 
            />
            <button 
                className="clear-completed" 
                onClick={onClearCompleted}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default Footer;