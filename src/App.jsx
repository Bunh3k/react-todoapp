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

    const completeEditing = (event, id) => {
        if(event.key === 'Enter'){
            setTasks(tasks.map(task => {
              return task.id === id ? {...task, text: event.target.value, isEditing: false} : task;
            }))
        } else if (!event || event.type === 'click') {
            setTasks(tasks.map(task => {
                return task.id === id ? {...task, isEditing: true} : task;
            }))
      }
    }

  return (
    <section className="toDoApp">
      <NewTaskForm />
      <section className="main">
        <TaskList 
          tasks={tasks} 
          onDelete={deleteTask} 
          onEdit={completeEditing} 
          onToggle={toggleTaskStatus}
          
          />
        <Footer />
      </section>
    </section>
  );
}

export default App;