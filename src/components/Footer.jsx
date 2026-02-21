import TasksFilter from "./TasksFilter"

function Footer(){
    return(
        <footer className="footer">
            <span className="todo-count">3 items left</span>
            <TasksFilter />
        </footer>
    )
}

export default Footer;