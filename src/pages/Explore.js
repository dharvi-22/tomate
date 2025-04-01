//explore page - search recipes
import React, { useEffect, useContext } from "react";
import { RecipeContext } from "../context/recipeContext";
import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import "../styles/explore.scss";
import "../styles/recipePage.scss";

const Explore =() =>{
    const { recipes, fetchRecipes, loading } = useContext(RecipeContext);

    useEffect(() =>{
        if (recipes.length === 0){  //prevents duplicate fetches 
            fetchRecipes();
        }
    }, []);
    return (
        <div className="explore-container">
            <h2>Explore Recipes</h2>
            <div className="ingredients">
                    <div role="group" aria-labelledby="ingredients-list">
                        {["1 Egg", "1 Avocado", "4 slices of bread", "1 tbsp mayonnaise", "Basil leaves"].map((item, index) => (
                        <label key={index}>
                             <input type="checkbox" />
                                {item}
                            </label>
                            ))}
                        </div>
             </div>
            <SearchBar />
                {loading ? <p>⟳</p>: <RecipeList recipes={recipes}/>}
        </div>
    );
};

export default Explore;