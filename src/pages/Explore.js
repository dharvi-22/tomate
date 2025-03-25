//explore page - search recipes

import { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";
import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";

const Explore =() =>{
    return (
        <div className="explore-container">
            <h2>Explore Recipes</h2>
            <SearchBar />
            <RecipeList />
        </div>
    );
};

export default Explore;