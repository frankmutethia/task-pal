import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask} from "./components/ShowTask";
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div className= "App">
       <Header/>
       {/* let us pass the tasklist */}
       <AddTask tasklist={tasklist} 
       setTasklist={setTasklist}
        task = {task}
        setTask = {setTask}

       /> 
       <ShowTask tasklist={tasklist}
        setTasklist={setTasklist}
        task = {task}
        setTask = {setTask}
        />
       {/* only works when you export the react arrow functions */}
     </div>
  );
}

export default App;
