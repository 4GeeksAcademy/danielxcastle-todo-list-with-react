import React, { useState} from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [ inputValue,setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])




	return (
		<div className="container">
			<h1>My Wife Told Me To Do:</h1>
			<ul>
				<li className="input-todo">
					<button className="btn btn-primary" type="button" id="button-addon1"
						onClick={(e) => {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						}}
						>Add</button>
					<input 
						type="text" 
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") { 
							  setTodos(todos.concat(inputValue)); 
							  setInputValue("");
						}
						}}
					placeholder="What do you need to do">
						
					</input>
				</li>	
				{todos.map((item, index) => (
					<li key="" className="todo-item">
						{index + 1})  
						{item} 
						<i 
							className="fa-solid fa-trash" 
							onClick={() => 
							setTodos(
								todos.filter(
									(t, currentIndex) => 
									index != currentIndex
									)
									)
									}></i>
					</li>
				))}		

			</ul>
			<div className="todo-tasks">
				{todos.length} tasks left	
			</div>
		</div>
	);
};

export default Home;
