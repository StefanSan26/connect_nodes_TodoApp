import React from "react";
import AppContext from "../context/AppContext";
import Todo from "./Todo";
// import useInitialState from '../hooks/useInitialState';

const TodoList = () => {
  const { todos , getData, newTodo} = React.useContext(AppContext);
  console.log(todos);

	React.useEffect( () => {
	 getData();
		console.log('getData')
		// return () => {
		// }
	},[newTodo])
  
  return (
    <div className="TodoList">
      <h2>TODOS</h2>
      <ul>
        {todos &&
          todos.map((todo) => (
            <Todo todo = {todo}/>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
