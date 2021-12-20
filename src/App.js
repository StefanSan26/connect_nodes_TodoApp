import './App.css';
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
	const initialState = useInitialState();

  return (
		<AppContext.Provider value={initialState}>

			<div className="App">
				<header className="App-header">
					<h1>Todo List Challenge</h1>
				</header>
				<main>
					<TodoList />
					<NewTodo/>
				</main>
			</div>

		</AppContext.Provider>
  );
}

export default App;
