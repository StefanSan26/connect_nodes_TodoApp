// import axios from 'axios'
import React from "react";
const API = 'http://localhost:3010/api/todos'
// const API2 = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api'
// const API3 = 'https://young-island-80155.herokuapp.com/products'

const useInitialState = () =>{
	// const [state , setState] = useState(initialState)
	const [todos, setTodos] = React.useState([])
	const [newTodo, setNewTodo] = React.useState(false)


	// React.useEffect(() => {
		const getData = async () => {
			const response = await fetch(API);
			const ans = await response.json()
			// console.log(ans)
			const tds = ans.data
			setTodos(tds);
		};
		// getData()
	// }, []);

	// const addTodo = todo =>{
	// 	const postTodo = async () => {
	// 		const response = await fetch(API,{
	// 			method:"POST",
	// 			body: JSON.stringify({content:todo})
	// 		});
	// 		const ans = await response.json()
	// 		console.log(ans)
	// 	};
	// 	postTodo()
	// }

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
	
	
	// const removeFromCart = payload =>{
	// 				let index = state.cart.indexOf(payload)
	// 				let prod = state.cart.splice(index,1)
	// 				// console.log(payload)
	// 				console.log(prod)

	// 				setState({
	// 								...state,
	// 								// cart:state.cart
	// 								// cart:state.cart.filter(item => item.id !== payload.id)
	// 				})
	// }
	// const addToBuyer=(payload)=>{
	// 				setState({
	// 								...state,
	// 								buyer:[...state.buyer,payload]
	// 				})
	// }
	// const addNewOrder=(payload)=>{
	// 				setState({
	// 								...state,
	// 								order:[...state.orders,payload]
	// 				})
	// }

	return {todos, addTodo, getData, newTodo, setNewTodo}
}


export default useInitialState