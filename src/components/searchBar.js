//component to let user search by name or category using the context function

import { useState, useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

const SearchBar = () => {
    //store user input
    const [searchTerm, setSearchTerm] = useState("");
    //store selected category
    const [selectedCategory, setSelectedCategory] = useState("");
    //get the fetched function from context
    const { fetchRecipes } = useContext(RecipeContext);

    //function to trigger search
    const handleSearch = () => {
        fetchRecipes(searchTerm, selectedCategory);
    };
    // Ensure category search works without requiring search term
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        fetchRecipes("", category); // Fetch only by category if no search term
    };

    return (
        <div className ="search-bar">
            {/* input for searching by recipe name */}
            <input type="text" placeholder="I am looking for..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={handleSearch}>🔍</button>

            {/* dropdown for selecting recipe category */}
            <select value={selectedCategory} onChange={(e) => {
                setSelectedCategory(e.target.value);
                //fetch recipes instantly when category is selected
                fetchRecipes("", e.target.value);
            }}>
                <option value="">I know the category...</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="gluten free">Gluten-Free</option>
                <option value="vegan">Vegan</option>
            </select>
        </div>
    );
};

export default SearchBar;