import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home-Section/Home";
import AllCategory from "./Components/AllCategory";
import Article from "./Components/Article";
import Nav from "./Components/Nav/Nav.js";
import NotFound from "./Components/Home-Section/Not Found/NotFound";

function App() {
  return (
    // <DataBase>
    <Router>
      <div className="App">
        <Nav />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:cat" element={<AllCategory />} />
          <Route path="/article/:cat/:Id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
    // </DataBase>
  );
}

export default App;
