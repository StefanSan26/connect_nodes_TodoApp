import React from 'react';
import AppContext from "../context/AppContext";


const TodoActions = ({completeTodo,setOnEdit,id}) => {
	const {deleteTodo, getData} = React.useContext(AppContext)

	const removeTodo = async (id) =>{
		await deleteTodo(id)
		getData()
	}
	
	return (
		<div className="TodoActions">

			<button className="TodoActions--complete" onClick={completeTodo}>
				Complete
			</button>
			<button className="TodoActions--delete" onClick={()=>removeTodo(id)}>
				X
			</button>
			<button className="TodoActions--edit" onClick={()=> setOnEdit(true)}>
				Edit
			</button>
		</div>
	);
};

export default TodoActions;