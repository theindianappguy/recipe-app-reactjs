import Navbar from "./Navbar";
import '../../CSS/app.css'
import {Route, Routes} from "react-router-dom";
import Search from "../Dashboard/Search";
import Author from "../Dashboard/Author";
import Share from "../Dashboard/Share";
import Profile from "../Dashboard/Profile";
import React from "react";

function App() {
    return (
        <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="search" element={<Search/>}/>
                    <Route path="author" element={<Author/>}/>
                    <Route path="share" element={<Share/>}/>
                    <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
  );
}

export default App;
