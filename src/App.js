import React from 'react';

function Food({fav,picture}) {
	return <div>
		<h2>I like {fav} </h2>
		<img src={picture}/>
		</div>
}

const foodlike = []

function renderFood(dish){
	console.log(dish);
}

function App() {
  return (
    <div>
    <h1>Hello</h1>
	 {foodlike.map(renderFood)} 
	  </div>
  );
}

export default App;
