import React from "react";
const API = 'https://connect-nodes-backend.herokuapp.com/api/todos'

const useInitialState = () =>{
	const [todos, setTodos] = React.useState([])
	const [newTodo, setNewTodo] = React.useState(false)


		const getData = async () => {
			const response = await fetch(API);
			const ans = await response.json()
			const tds = ans.data
			setTodos(tds);
		};

 const addTodo =  async (content, status=false ,author="admin") => {
		const response = await fetch(API, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json'
			},			
			body: JSON.stringify({content, status, author}) 
		});

		return response.json(); 
	}


 const deleteTodo =  async (id) => {
		const response = await fetch(`${API}/${id}`, {
			method: 'DELETE', 
		});

		return response.json(); 
	}
	
 const editTodo =  async ({id,content,status=false,author="admin"}) => {
		const response = await fetch(`${API}/${id}`, {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json'
			},			
			body: JSON.stringify({content, status,author}) 
		});

		return response.json(); 
	}
	


	return {todos, addTodo, getData,deleteTodo,editTodo, newTodo, setNewTodo}
}


export default useInitialState