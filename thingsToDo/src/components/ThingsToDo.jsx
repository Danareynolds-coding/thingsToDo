import { useState } from "react";
import todoData from "../todoData";
import './index.css';
console.log(todoData);

function ThingsToDo (){

    const [thingsToDo, setThingsToDo] = useState([])
    
    return (
        
       <div className="row">
            <div className="col-12">
                <h1>To Do List</h1>
                <ol>
                    {todoData.map(list => (
                        <li key={list.id} style={{ textDecoration: list.done ? 'line-through' : 'none' }}>
                            {list.name}
                            {list.description} 
                            {list.timeDue}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default ThingsToDo
