//explore page - search recipes

import { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";
import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/explore.scss";

const Explore =() =>{
    return (
        <div className="explore-container">
            <Header/>
            <h2>Explore Recipes</h2>
            <SearchBar />
            <RecipeList />
            <Footer/>
        </div>
    );
};

export default Explore;