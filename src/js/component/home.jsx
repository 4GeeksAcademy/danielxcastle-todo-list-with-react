import React, { useState} from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [ inputValue,setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])




	return (
		<div className="container">
			<h1>My todos</h1>
			<ul>
				<li>
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
					<li key="">
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
			<div>
				{todos.length} tasks left	
			</div>
		</div>
	);
};

export default Home;
