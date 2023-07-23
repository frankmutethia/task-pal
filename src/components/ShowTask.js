export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  // const tasks= [
  //   {id:1001, name:"TASK A", time:"11:55:05 AM 16/7/2023"},
  //   {id:1002, name:"TASK B", time:"11:55:05 AM 16/7/2023"},
  //   {id:1003, name:"TASK C", time:"11:55:05 AM 16/7/2023"}
  // ]
  
     const handleEdit = () => {

     }
     const handleDelete = (id) => {
     const updatedTaskList = tasklist.filter(todo => todo.id !== id);
     setTasklist(updatedTaskList);
     }

  return (
   <section className="showTask">
    <div className="head">
      <div>
      <span className="title">Todo</span>
      <span className="count">{tasklist.length}</span>
    </div>
    <button onClick={() => setTasklist([])} className="clearAll" >Clear All</button>
    </div>
    <ul>
    { tasklist.map((todo) => (
      <li key={todo.id}>
        <p>
          <span className="name">{todo.name}</span>
          <span className="time">{todo.time}</span>
        </p>
        <i onClick={() => handleEdit(todo.id)}className="bi bi-pencil-square"></i>
        <i onClick={ ()=> handleDelete(todo.id)}className="bi bi-trash3"></i>
      </li>
    ))}
    
    </ul>
   </section>
  )
}

export default ShowTask
//we will loop all the tasks into a single element