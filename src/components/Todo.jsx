import React from "react";
import TodoActions from "./TodoActions";
import AppContext from "../context/AppContext";

const Todo = ({todo}) => {
	const {editTodo,getData} = React.useContext(AppContext)
	const [completed, setCompleted] = React.useState(false)
	const [onEdit, setOnEdit] = React.useState(false)
	const [newTodoValue, setNewTodoValue] = React.useState(todo.content)
	
	const saveTodo = async()=>{
		await editTodo(todo._id,newTodoValue)
		getData()
		setOnEdit(false)
	}
	const onChange=(event)=>{
		setNewTodoValue(event.target.value)
		console.log(newTodoValue)
	}
	// const completeTodo = (todo) => {
	// 	setCompleted([...completed,todo])
	// 	console.log(completed)
	// };
  return (
		<>
		{onEdit===true ? 
			<li className={`Todo ${completed && "Todo--completed"}`} key={todo._id} >
				<input type="text" value={newTodoValue} onChange={onChange}/>
				<button type='button' className="NewTodo--AddTodo" onClick={saveTodo}>Save</button>
			</li>
				: 			
			<li className={`Todo ${completed && "Todo--completed"}`} key={todo._id} >
				{todo.content}
				<TodoActions 
				setOnEdit={setOnEdit}
				completed={completed}
				setCompleted={setCompleted}
				id={todo._id}
				/>
			</li>
		}
		</>
  );
};

export default Todo;
