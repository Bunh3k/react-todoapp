import TasksFilter from "./TasksFilter"
import PropTypes from 'prop-types';

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

Footer.propTypes = {
    activeCount: PropTypes.number,
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func,
    onClearCompleted: PropTypes.func
};

export default Footer;