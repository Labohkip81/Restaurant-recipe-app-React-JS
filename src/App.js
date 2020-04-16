import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe"
import logo from "./logo.svg";
import "./App.css";
import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd';





function App(){

  const APP_ID = "96d96e26"
  const APP_KEY = "d92d714f7c665ef92c6e260e31db72bf"
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  

  useEffect( () => {

    getRecipes();
    
  }, [query]);



  const getRecipes = async () => {
       
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await  response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  }

  const updateSearch = e => {
       setSearch(e.target.value);
       console.log(search);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(

    <div className="App">
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <Button type="primary" icon={<SearchOutlined />} >Search</Button>
       </form>
       {recipes.map(recipe => (
         <Recipe
          label={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}
           />
       ))}
    </div>

  );
  
}



export default App;