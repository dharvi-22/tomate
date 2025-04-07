//global context for calling and storing recipes from api

import { createContext, useState } from "react";

//create a context for recipes
export const RecipeContext = createContext();

const RecipeProvider =({children}) => {
    //load recipes from local storage on initial render
    const [recipes, setRecipes] = useState(() => {
        const storedRecipes = localStorage.getItem("recipes");
        return storedRecipes ? JSON.parse(storedRecipes) : [];
    }); 
    //track loading state
    const [loading, setLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;


    //function to fetch recipes based on search term or category
    const fetchRecipes = async (query ="", category="") => {
        //if recipes already exist in state, do not fetch again
        //if (recipes.length > 0) return;

        //start loading state
        setLoading(true);

        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=20&addRecipeInformation=true`;

        //if a search term is provided, add it to the url
        if (query) {
            url += `&query=${query}`;
        }

        //if a category is selected, add it as a dietary filter
        if (category) {
            url += `&type=${category}`;
        }

        try {
            const response = await fetch(url);
            //fetch response in json format
            const data = await response.json();
            //update state with fetched recipes
            setRecipes(data.results || []);

            //store the fetched recipes in local storage so they persist after refresh
            localStorage.setItem("recipes", JSON.stringify(data.results || []));
        } catch (error){
            console.error("Error fetching recipes:", error);
        }
        //stop loading state 
        setLoading(false);
    };
    return (
        <RecipeContext.Provider value = {{ recipes, fetchRecipes, loading}}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;