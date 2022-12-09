import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe'

function App() {
  const App_id = "8c0e8cc4"
  const App_Key = "ee467dc11a870c9ad77a048a1a4b356a"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')

  function fetchApi() {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=8c0e8cc4&app_key=ee467dc11a870c9ad77a048a1a4b356a`)
    .then(function (response) {
      // handle success
      console.log(response.data.hits);
      setRecipes(response.data.hits);
      setSearch("")
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  useEffect(() => {
    fetchApi()
  }, [])

  function newSubmit(e) {
    e.preventDefault();
    fetchApi()
  }
  
  return (
    <div className="App">
      <form onSubmit={newSubmit} className='search-form'>
        <input value={search} onChange = {(event) => setSearch(event.target.value)} className='search-bar' type="text" placeholder='Enter your recipe'/>
        <button className='search-button'>Search</button>
      </form>
      <div className='recipes'>
         { recipes.map(recipe =>(
           <Recipe image={recipe.recipe.image} calories={recipe.recipe.calories} title={recipe.recipe.label} ingredients = {recipe.recipe.ingredientLines}/>
        ))}
      </div>
    </div>
  )
}

export default App;
