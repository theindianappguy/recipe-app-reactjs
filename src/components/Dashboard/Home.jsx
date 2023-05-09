import React from 'react';
import Popular from "../App/Popular";
import Veggie from "../App/Veggie";

function Home(props) {
    return (
        <div className='home-page-container'>
            <Popular/>
            <Veggie/>
        </div>
    );
}

export default Home;