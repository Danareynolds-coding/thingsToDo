import { useState } from "react";
import todoData from "../todoData";


function ThingsToDo (){
const [thingsToDo, setThingsToDo] = useState(todoData);
    const [newThingsToDoName, setNewThingsToDoName] = useState("");
    const [newThingsToDoDiscription, setNewThingsToDoDiscription] = useState("");
    const [newThingsToDoTimeDue, setNewThingsToDoTimeDue] = useState("");
    const [newThingsToDoDone, setNewThingsToDoDone] = useState(false);

    function handleNameChange(event) {
        setNewThingsToDoName(event.target.value);
    }   
    
    function handleDescriptionChange(event) {
        setNewThingsToDoDiscription(event.target.value);
    }

    function handleTimeDueChange(event) {
        setNewThingsToDoTimeDue(event.target.value);
    }
    
    function addTask() {
        if (
            newThingsToDoName.trim() !== "" ||
            newThingsToDoDiscription.trim() !== "" ||
            newThingsToDoTimeDue.trim() !== "" ||
            newThingsToDoDone === true
        ) {
            setThingsToDo(t => [
                ...t,
                {
                    id: Date.now(),
                    name: newThingsToDoName,
                    description: newThingsToDoDiscription,
                    timeDue: newThingsToDoTimeDue,
                    done: newThingsToDoDone
            }
            ]);
            setNewThingsToDoName("");
            setNewThingsToDoDiscription("");
            setNewThingsToDoTimeDue("");
            setNewThingsToDoDone(false);
        }
    }
    function handleMarkAsDone(index) {
        setThingsToDo(tasks =>
            tasks.map((task, i) =>
                i === index ? { ...task, done: true } : task
            )
        );
    }
    function deleteTask(index) {
        const updatedTasks = thingsToDo.filter((_, i) => i !== index);
        setThingsToDo(updatedTasks);
    }
    function moveup(index){
        if (index > 0) {
            setThingsToDo(tasks => {
                const newTasks = [...tasks];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }
    function movedown(index){
        setThingsToDo(tasks => {
            if (index < tasks.length - 1) {
                const newTasks = [...tasks];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                return newTasks;
            }
            return tasks;
        });
    }

    return(
       <div className="row">
        <h1>To Do List</h1>
        <hr></hr><hr></hr>
        <button className="add-button" onClick={addTask}>
            Add New Task
        </button>
       
        <hr></hr>
        <input
            className="col-12 box"
            type="text"
            placeholder="Enter a new Task."
            value={newThingsToDoName}
            onChange={handleNameChange}
        />
        <input
            className="col-12 box"
            type="text"
            placeholder="Enter a description."
            value={newThingsToDoDiscription}
            onChange={handleDescriptionChange}
        />
        <input
            className="col-12 box"
            type="text"
            placeholder="Enter Time Due" 
            value={newThingsToDoTimeDue}
            onChange={handleTimeDueChange}
        />

        <ul className="col-12 card">
        {thingsToDo.map((item, index) => (
                    <li key={item.id}
                    style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                    <h4>{item.name}</h4>
                    <p>
                    {item.description}{" "}--{" "}{item.timeDue}
                    </p>
                    <button className="mark" onClick={() => handleMarkAsDone(index)}>
                        Mark as Complete
                    </button>
                    <button className="delete" onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                     <button className="priority" onClick={() => moveup(index)}>
                       High Priority:∆
                    </button>
                     <button className="priority" onClick={() => movedown(index)}>
                      Low Priority: ∇                  
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ThingsToDo;
   
    
    