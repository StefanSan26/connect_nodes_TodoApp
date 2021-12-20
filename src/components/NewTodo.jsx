import React from 'react';
import AppContext from '../context/AppContext';


const NewTodo = () => {
	// const [newTodo, setNewTodo] = React.useState(false)

	const [todoValue, setTodoValue] = React.useState('')

	// const {addTodo} = React.useContext(AppContext)
	const {addTodo, getData, newTodo, setNewTodo} = React.useContext(AppContext)
	// const API = 'http://localhost:3010/api/todos'

	const sendTodo = ()=>{
		// addTodo(todoValue)

		addTodo(todoValue)
		.then(data => {
			console.log(data); // JSON data parsed by `data.json()` call
		});
		getData()
		setNewTodo(!newTodo)
		setTodoValue('')
	}
	return (
		<>
		<button className='NewTodo' type='button' onClick={()=>setNewTodo(!newTodo)}>
			+
		</button>
		{newTodo && 
			<div className='NewTodo--create'>
				<input type="text" onChange={event => setTodoValue(event.target.value)}/>
				<button type='button' className="NewTodo--AddTodo" onClick={sendTodo}>Add Todo</button>
			</div>
		}
		</>
	);
};

export default NewTodo;