import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/UI/Navbar/Navbar";
import { AppRouter } from "./Components/AppRouter.js/AppRouter";
import { AuthContext } from "./context/context";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
