import React from "react";
import "../styles/mealMatch.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { RecipeContext } from "../context/recipeContext"; 
 


const MealMatch = () => {
    const { recipes, fetchRecipes } = useContext(RecipeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGame, setShowGame] = useState(false);
    const navigate = useNavigate();

    //function to start the game
    const startGame = () => {
        fetchRecipes();
        setShowGame(true);
        setCurrentIndex(0);
    }

    //move to the next recipe card
    const nextRecipe = () =>{
        if (recipes.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
        }
    };

    //navigate to recipe details
    const viewRecipe = () => {
        if (recipes.length > 0) {
            navigate(`/recipe/${recipes[currentIndex].id}`);
        }
    };

    return (
    <div className="match-container">
        <h1>Meal Match</h1>
        <p>Browse quickly through our recipes catalogue to find the meal that matches your taste buds and mood! Simply swipe left for more or right to view the recipe in more detail.</p>
        <button className="red-button" onClick={startGame}>Play Meal Match</button>

        {/* condition if te recipes are greater than 0*/}
        {showGame && recipes.length > 0 && (
            <div>
                <img src={recipes[currentIndex].image} alt={recipes[currentIndex].title}/>
                <div>
                    <h3>{recipes[currentIndex].title}</h3>
                    <p>Total Cook Time: 20 minutes</p>
                    <p>Total Ingredients: 8</p>
                </div>
                <button onClick={nextRecipe}>☚</button>
                <button onClick={viewRecipe}>⬆︎</button>
            </div>
        )}
    </div>
    );
};
  
export default MealMatch;