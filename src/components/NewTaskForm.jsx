function NewTaskForm() {
    return(
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" type="text" placeholder="What needs to be done?" autoFocus/>
        </header>
    )
}

export default NewTaskForm;