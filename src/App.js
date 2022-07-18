import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/UI/Navbar/Navbar";
import { AppRouter } from "./Components/AppRouter.js/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
