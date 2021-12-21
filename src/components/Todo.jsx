import React from "react";
import TodoActions from "./TodoActions";
import AppContext from "../context/AppContext";

const Todo = ({todo}) => {
	const {editTodo,getData} = React.useContext(AppContext)
	const [completed, setCompleted] = React.useState(todo.status) 
	const [onEdit, setOnEdit] = React.useState(false)
	const [newTodoValue, setNewTodoValue] = React.useState(todo.content)
	
	const saveTodo = async()=>{
		await editTodo({id:todo._id,content:newTodoValue})
		getData()
		setOnEdit(false)
	}
	const onChange=(event)=>{
		setNewTodoValue(event.target.value)
	}
	const completeTodo = async () => {
		setCompleted(!completed)
		await editTodo({id:todo._id,status:!completed})
	};
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
				completeTodo={completeTodo}
				id={todo._id}
				/>
			</li>
		}
		</>
  );
};

export default Todo;
