import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
// import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Search from "./components/tracks/Search";
import Tracks from "./components/tracks/Tracks"

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
          <Navbar />
          <Routes>
          <Route  path="/" element={<Search />} exact />
          <Route  path="/lyrics/track/:id" element={<Lyrics />} exact />
          </Routes>
          <Tracks />
      </Router>
    </ContextController>
  );
};

export default App;