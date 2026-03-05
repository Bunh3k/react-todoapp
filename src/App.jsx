import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
        {id: 1, text: "Completed task", status: "completed"},
        {id: 2, text: "Editing task", status: "active"},
        {id: 3, text: "Active task", status: "active"}
    ]);

  const [filter, setFilter] = useState('all');

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            status: 'active',
            isEditing: false
        }
        setTasks([...tasks, newTask]);
    }

    const toggleTaskStatus = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                const newStatus = task.status === 'active' ?  'completed' : 'active';
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

    const handleEditKey = (event, id) => {
        if(event.key === 'Enter'){
            setTasks(tasks.map(task => {
              return task.id === id ? {...task, text: event.target.value} : task;
            }))
        } 
    }

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    }
    
    const filteredTasks = tasks.filter(task => {
      if(filter === 'active') return task.status === 'active';
      if(filter === 'completed') return task.status === 'completed';
      return true;
    })

  return (
    <section className="toDoApp">
      <NewTaskForm 
        onAddTask={addTask}
      />
      <section className="main">

        <TaskList 
          tasks={filteredTasks} 
          onDelete={deleteTask} 
          onEdit={handleEditKey} 
          onToggle={toggleTaskStatus}
          />

        <Footer 
          activeCount={tasks.filter(t => t.status === 'active').length}
          filter={filter}
          onChangeFilter={changeFilter}
          onClearCompleted={() => setTasks(tasks.filter(t => t.status !== 'completed'))}
        />

      </section>
    </section>
  );
}

export default App;