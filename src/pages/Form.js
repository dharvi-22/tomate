import React, { useState } from "react";
import {Select, Label, Button, SelectValue, Popover, ListBox, ListBoxItem } from "react-aria-components";

import {ReactComponent as Mushroom } from "../assets/mushroom.svg";
import {ReactComponent as Beet } from "../assets/beet.svg";
import {ReactComponent as Brocoli } from "../assets/brocoli.svg";
import {ReactComponent as Carrot } from "../assets/carrot.svg";
import {ReactComponent as Chili } from "../assets/chili.svg";
import {ReactComponent as Peasnap } from "../assets/peasnap.svg";
import {ReactComponent as Tomato } from "../assets/tomato.svg";

import "../styles/form.scss";

const RecipeForm =() =>{

    const [recipeName, setRecipeName] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    // categories
    const categories = ["Breakfast", "Lunch", "Dinner", "Gluten-free", "Vegan"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipeName || !category){
            setError("Please enter a recipe name and pick a category");
            
        } else {
            setError("");
            alert("Success! We've got your request and we will review it shortly");
            //submission logic 
        }
    };

    return (
        <div className="form-container">
            <h2>Request a Recipe</h2>
            <p>We are actively looking to expand our catalogue! If you have a recipe in mind that you'd like us to adapt, please share it with us. Simply fill out the form below as thoroughly as possible, and we'll do our best to incorporate it into our collection!</p>

            <form onSubmit={handleSubmit} className="form-group">
                <input type= "text" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName (e.target.value)}/>
                
                {/* aria dropdown */}
                <Select className="form-dropdown" onSelectionChange={setCategory}>
                    <Button className="form-button">
                        <SelectValue/>
                        <span aria-hidden="true">Select a Category ▼</span>
                    </Button>
                    <Popover className="form-popover">
                        <ListBox className="listbox">
                            {categories.map((cat) => (
                                <ListBoxItem key={cat} id={cat} className="listbox-item">
                                    {cat}
                                </ListBoxItem>
                            ))}
                        </ListBox>
                    </Popover>
                </Select>

                <input type="text" placeholder="Recipe Link"/>
                <textarea placeholder="Ingredients" rows="4"></textarea>

                {/* Error Message */}
                {error && <p className="error">{error}</p>}

                {/* submit button */}
                <button type="submit" className="red-button">Submit</button>
            </form>
            <div className="form-illustrations">
                <Mushroom className="shaking-svg"/>
                <Chili className="shaking-svg"/>
                <Beet className="shaking-svg"/>
                <Brocoli className="shaking-svg"/>
                <Peasnap className="shaking-svg"/>
                <Carrot className="shaking-svg"/>
                <Tomato className="shaking-svg"/>

            </div>
        </div>
    );
};

export default RecipeForm;