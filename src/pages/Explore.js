//explore page - search recipes

import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import "../styles/explore.scss";

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