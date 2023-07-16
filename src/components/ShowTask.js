export const ShowTask = () => {
  const tasks= [
    {id:1001, name:"TASK A", time:"11:55:05 AM 16/7/2023"},
    {id:1002, name:"TASK B", time:"11:55:05 AM 16/7/2023"},
    {id:1003, name:"TASK C", time:"11:55:05 AM 16/7/2023"}
  ]
  


  return (
   <section className="showTask">
    <div className="head">
      <div>
      <span className="title">Todo</span>
      <span className="count">0</span>
    </div>
    <button className="clearAll">Clear All</button>
    </div>
    <ul>
    { tasks.map((task) => (
      <li>
        <p>
          <span className="name">{task.name}</span>
          <span className="time">{task.time}</span>
        </p>
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash3"></i>
      </li>
    ))}
    
    </ul>
   </section>
  )
}

export default ShowTask
//we will loop all the tasks into a single element