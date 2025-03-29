//explore page - search recipes
import React, { useEffect, useContext } from "react";
import { RecipeContext } from "../context/recipeContext";
import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import "../styles/explore.scss";

const Explore =() =>{
    const { recipes, fetchRecipes, loading } = useContext(RecipeContext);

    useEffect(() =>{
        fetchRecipes();
    })
    return (
        <div className="explore-container">
            <h2>Explore Recipes</h2>
            <SearchBar />
                {loading ? <p>⟳</p>: <RecipeList recipes={recipes}/>}
            <RecipeList />
        </div>
    );
};

export default Explore;