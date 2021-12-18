import React from "react";
import AppContext from "../context/AppContext";
import TodoActions from "./TodoActions";
// import useInitialState from '../hooks/useInitialState';

const TodoList = () => {
  const { todos , getData, newTodo} = React.useContext(AppContext);
	const [completed, setCompleted] = React.useState([])
  // console.log(todos);
	React.useEffect(() => {
		getData();
		console.log('getData')
		// return () => {
		// }
	},[newTodo])
  const completeTodo = (todo) => {
		setCompleted([...completed,todo])
		console.log(completed)
	};
  return (
    <div className="TodoList">
      <h3>Todos</h3>
      <div>
        {todos &&
          todos.map((todo) => (
            <div className="Todo" key={todo._id} onClick={(todo)=>completeTodo(todo)}>
              {todo.content}
              <TodoActions />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
