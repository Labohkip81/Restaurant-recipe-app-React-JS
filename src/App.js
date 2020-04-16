import React,{useEffect, useState} from 'react';
import logo from "./logo.svg";
import "./App.css";




function App(){

  const APP_ID = "96d96e26"
  const APP_KEY = "d92d714f7c665ef92c6e260e31db72bf"

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  })
  return(

    <div className="App">
       <form className="search-form">
         <input className="search-bar" type="text" />
         <button className="search-button" >Search</button>
       </form>
       <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>

  );
  
}



export default App;