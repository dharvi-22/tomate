import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Explore from "./pages/Explore";
import Header from "./components/header";
import Footer from "./components/footer";
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
