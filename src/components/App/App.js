import Navbar from "./Navbar";
import "../../CSS/app.css";
import { Route, Routes } from "react-router-dom";
import Search from "../Dashboard/Search";
import Author from "../Dashboard/Author";
import Share from "../Dashboard/Share";
import Profile from "../Dashboard/Profile";
import React from "react";
import Login from "../Authentication/Login/Index";
import Register from "../Authentication/Register/Index";
import Dish from "../Dish/Dish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="search" element={<Search />} />
        <Route path="author" element={<Author />} />
        <Route path="share" element={<Share />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dish" element={<Dish />} />
      </Route>
    </Routes>
  );
}

export default App;
