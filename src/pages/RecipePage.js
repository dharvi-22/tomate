import { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../context/recipeContext";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/recipePage.scss";

const RecipePage = () => {
    //extracts id parameter from url
    const {id} =useParams();

    //access the recipes array from recipe context
    const {recipes} = useContext(RecipeContext);

    //hook to navigate between pages
    const navigate = useNavigate();

    //find the specific recipe from context - matching the id
    const recipe = recipes.find((r) => r.id.toString() === id);

    //state to track the selected serving size, default to 2
    const [selectedServings, setSelectedServings] = useState(2);

    //function to update the selected serving size when toggled
    const handleToggle = (serving) => {
        setSelectedServings(serving);
    };

    return (
        <div className="recipe-page">
            {/* Breadcrumb Back Button */}
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>

            {/* renders if the recipe exist */}
            { recipe ? (
                <>
                    <div className="recipe-header">
                        <h1>{recipe.title}</h1>
                        <img src={recipe.image} alt={recipe.title}/>
                    </div>

                    {/* cook time details */}
                    <div></div>

                    <div className="recipe-details">
                        <div className="serving-size">
                            <h3>Servings</h3>
                            <div className="toggle">
                                {[1,2,3,4].map((num) => (
                                    <button key={num} className={selectedServings === num ? "selected":""}
                                        onClick={() => handleToggle(num)}>
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ingredients checkbox list */}
                        <div></div>

                        {/* directions */}
                        <div></div> 
                    </div>

                    {/* scrollable recipe carousel */}
                    <h2>You may also like...</h2>
                    <div className="recipe-carousel">
                        {recipes
                            .filter((r) => r.id !== recipe.id)
                            .slice(0,6)
                            .map((r) => (
                                <div key ={r.id} className="carousel-item">
                                    <img src={r.image} alt={r.title}/>
                                    <p>{r.title}</p>
                                </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Recipe not found.</p>
            )}
        </div>
    );
};

export default RecipePage;