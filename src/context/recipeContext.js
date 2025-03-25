//global context for calling and storing recipes from api

import { createContext, useState, useEffect } from "react";

//create a context for recipes
export const RecipeContext = createContext();

const RecipeProvider =({children}) =>{
    //store fetched recipes
    const [recipes, setRecipes] = useState([]); 
    //track loading state
    const [loading, setLoading] = useState(false);

    const API_KEY = "ce9e413e261747efa6ee42b1d4b356ee";

    //fetch recipes on initial load
    useEffect(() => {
        fetchRecipes();
    },[]);

    //function to fetch recipes based on search term or category
    const fetchRecipes = async (query ="", category="") => {
        //start loading state
        setLoading(true);

        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&addRecipeInformation=true`;

        //if a search term is provided, add it to the url
        if (query) {
            url += `&query=${query}`;
        }

        //if a category is selected, add it as a dietary filter
        if (category) {
            url += `&diet=${category}`;
        }

        try {
            const response = await fetch(url);
            //fetch response in json format
            const data = await response.json();
            //update state with fetched recipes
            setRecipes(data.results || []);
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