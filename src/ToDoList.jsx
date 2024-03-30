import React, {useState} from 'react';

function ToDoList(){
  const [Todos, setTodos] = useState([]);
  function addItem(){
    const newItem = document.getElementById("activity").value;
    document.getElementById("activity").value = "";
    setTodos(t => [...t, newItem]);
  }
  function removeItem(index){
    setTodos(Todos.filter((Todo, i) => i != index));
  }

  return(
    <div className='card'>
      <h1>To Do List</h1>
      <label>***<u>Click on completed activities to remove them from your list.</u>***</label>
      <ul className='todo'>
        {Todos.map((Todo, index) => <li key={index} onClick={() => removeItem(index)}>{Todo}</li>)}
      </ul>
      <input type="text" id="activity" placeholder='Enter an activity' className='input'/><br></br>
      <button onClick={addItem} className="button">Add Activity</button>
    </div>
  );
}

export default ToDoList