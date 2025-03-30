//explore page - search recipes
import React, { useEffect, useContext } from "react";
import { RecipeContext } from "../context/recipeContext";
import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import "../styles/explore.scss";

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
            <SearchBar />
                {loading ? <p>⟳</p>: <RecipeList recipes={recipes}/>}
        </div>
    );
};

export default Explore;