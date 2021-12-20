import React from "react";
const API = 'https://connect-nodes-backend.herokuapp.com/api/todos'
// const API = 'http://localhost:6969/api/todos'

const useInitialState = () =>{
	const [todos, setTodos] = React.useState([])
	const [newTodo, setNewTodo] = React.useState(false)


	// React.useEffect(() => {
		const getData = async () => {
			const response = await fetch(API);
			const ans = await response.json()
			const tds = ans.data
			setTodos(tds);
		};
	// }, []);

	
 const addTodo =  async (data) => {
		const response = await fetch(API, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json'
			},			
			body: JSON.stringify({content:data}) // body data type must match "Content-Type" header
		});

		return response.json(); // parses JSON response into native JavaScript objects
	}
 const deleteTodo =  async (id) => {
		const response = await fetch(`${API}/${id}`, {
			method: 'DELETE', 
		});

		return response.json(); 
	}
	
 const editTodo =  async (id,data) => {
		const response = await fetch(`${API}/${id}`, {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json'
			},			
			body: JSON.stringify({content:data}) // body data type must match "Content-Type" header
		});

		return response.json(); 
	}
	


	return {todos, addTodo, getData,deleteTodo,editTodo, newTodo, setNewTodo}
}


export default useInitialState