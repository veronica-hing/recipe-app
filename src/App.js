import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
//put these in environment variable later
    const APP_ID = "3a92d74c";
    const APP_KEY = "1684b59c9ddc06d5bc247a1f60b47b7b";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch]  = useState('');
    const [query, setQuery] = useState('chicken')

    const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
      getRecipes();
    },[query]);

    const getRecipes = async() =>{
      const res = await fetch(exampleRequest);
      const data = await res.json();
      setRecipes(data.hits);
    }

    const updateSearch = (e) =>{
      setSearch(e.target.value);
    }

    const getSearch = (e) =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return (
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type="text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit">search</button>
      </form>
      <div className= "recipes">
        {recipes.map( recipe => (
          <Recipe
            key = {recipe.recipe.uri} 
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            recipeURL = {recipe.recipe.url}>
          </Recipe>
            
        ))}
      </div>
    </div>
  );
}

export default App;
