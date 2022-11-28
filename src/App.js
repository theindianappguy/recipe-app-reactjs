import { useState } from "react";
import "./app.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Search from "./components/Search/Search";
import Login from "./components/Authentication/Login/Index";
import Register from "./components/Authentication/Register/Index";
function App() {
  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
