function TasksFilter({filter, onChangeFilter}) {
    return(
        <ul className="filters">
            <li>
                <button 
                    className={filter === 'all' ? 'selected' : ''} 
                    onClick={() => onChangeFilter('all')}
                >
                    All
                </button>
            </li>
            <li>
                <button 
                    className={filter === 'active' ? 'selected' : ''} 
                    onClick={() => onChangeFilter('active')}
                >
                    Active
                </button>
            </li>
            <li>
                <button 
                    className={filter === 'completed' ? 'selected' : ''} 
                    onClick={() => onChangeFilter('completed')}
                >
                    Completed
                </button>
            </li>
        </ul>
    )
}

export default TasksFilter;