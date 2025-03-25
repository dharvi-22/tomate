//maps through the recipes state and displays each recipe's image and name.

import {useContext} from "react";
import {RecipeContext} from "../context/recipeContext";

const RecipeList = () =>{
    //get recipes and loading state
    const { recipes, loading} = useContext(RecipeContext);

    return (
        <div className="recipe-grid">
            {/* show loading text while fetching */}
            {loading ? <p>Loading recipes...</p>: recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.title}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;