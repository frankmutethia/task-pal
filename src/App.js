import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask} from "./components/ShowTask";
import './App.css';

function App() {
  //local storage depends on the tasklist
  //we need to pass the response using JSON, if there is no info added it will remain empty
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  // we initially start by creating the state
  const [task, setTask] = useState({});
  
  useEffect(() => {
  localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <div className= "App">
       <Header/>
       {/* let us pass the tasklist */}
       <AddTask 
       tasklist={tasklist} 
       setTasklist={setTasklist}
        task = {task}
        setTask = {setTask}

       /> 
       <ShowTask 
       tasklist={tasklist}
        setTasklist={setTasklist}
        task = {task}
        setTask = {setTask}
        />
       {/* only works when you export the react arrow functions */}
     </div>
  );
}

export default App;
