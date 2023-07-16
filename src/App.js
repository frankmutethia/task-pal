import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask} from "./components/ShowTask";
import './App.css';

function App() {
  return (
    <div className= "App">
       <Header/>
       <AddTask/> 
       <ShowTask/>
       {/* only works when you export the react arrow functions */}
     </div>
  );
}

export default App;
