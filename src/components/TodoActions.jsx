import React from 'react';
import AppContext from "../context/AppContext";


const TodoActions = ({completed, setCompleted,setOnEdit,id}) => {
	const {deleteTodo, getData} = React.useContext(AppContext)

	const removeTodo = async (id) =>{
		await deleteTodo(id)
		getData()
	}
	
	return (
		<div className="TodoActions">

			<button className="TodoActions--complete" onClick={() => setCompleted(!completed)}>
				C
			</button>
			<button className="TodoActions--delete" onClick={()=>removeTodo(id)}>
				-
			</button>
			<button className="TodoActions--edit" onClick={()=> setOnEdit(true)}>
				edit
			</button>
		</div>
	);
};

export default TodoActions;