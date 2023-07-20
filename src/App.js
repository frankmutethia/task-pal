import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask} from "./components/ShowTask";
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState([]);
  return (
    <div className= "App">
       <Header/>
       {/* let us pass the tasklist */}
       <AddTask tasklist={tasklist} setTasklist={setTasklist}/> 
       <ShowTask tasklist={tasklist} setTasklist={setTasklist}/>
       {/* only works when you export the react arrow functions */}
     </div>
  );
}

export default App;
