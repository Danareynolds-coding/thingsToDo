// import { useState } from "react";
import todoData from "../todoData";


function ThingsToDo (){

    // const [thingsToDo, setThingsToDo] = useState([])
    
    return (
        
       <div className="row">
            <div className="col-12">
                <h2  >To Do List</h2>
                <hr></hr>
                <ol className="col-12">

                    {todoData.map(list => (
                        <li  key={list.id} style={{ textDecoration: list.done ? 'line-through' : 'none' }}>
                            <h5>{list.name}</h5>
                            <p>{list.description}{" "}--{" "}{list.timeDue}</p>
                            
                        </li>
                    ))}
                </ol>
            </div>
            
        </div>
    );
}
export default ThingsToDo
