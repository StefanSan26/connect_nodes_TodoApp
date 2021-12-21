import React from 'react';
import AppContext from '../context/AppContext';


const NewTodo = () => {

	const [todoValue, setTodoValue] = React.useState('')

	const {addTodo, getData, newTodo, setNewTodo} = React.useContext(AppContext)

	const sendTodo = ()=>{

		addTodo(todoValue)
		.then(data => {
			console.log(data); 
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