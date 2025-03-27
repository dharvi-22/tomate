import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeProvider from './context/recipeContext';

import Home from "./pages/Home";
import Form from "./pages/Form";
import Explore from "./pages/Explore";
import MealMatch from "./pages/MealMatch";
import Header from "./components/header";
import Footer from "./components/footer";

import './styles/main.scss';

function App() {
  return (
    <RecipeProvider>
      <Router>
       <Header />

       <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/form" element={<Form />} />
            <Route path="/meal-match" element={<MealMatch />} />
          </Routes>
        </main>

       <Footer />
      </Router>
    </RecipeProvider>
  );
}

export default App;
