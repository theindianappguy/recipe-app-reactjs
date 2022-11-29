import React, {useState, useEffect} from 'react';
import '../../CSS/search.css';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';

function Search (props) {
    // const [query, setQuery] = useState("");
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getSearchedRecipes = async (search) => {
        const resp = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&query=${search}`
        );
        const data = await resp.json();
    
        return data.results;
    };

    const handleChangeSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const onClickToSearch = () => {
        getSearchedRecipes(searchTerm).then((data) => {
            setSearchedRecipes(data);
        });
    }


    useEffect(() => {
        getSearchedRecipes(searchTerm).then((data) => {
          setSearchedRecipes(data);
        });
    });


    return (
        <div className="search-container">
            {/* <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1> */}
            {/* <div>
               <input type="text" placeholder="Search.." className="search"/>
            </div> */}
            <div className="form-select">
                <label htmlFor="order-select">Order by:</label>
                <select className="orderBy" id="orderBy-select">
                    <option value="none">--None--</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="vote">Vote</option>
                    <option value="view">View</option>
                </select>
                <label htmlFor="price-select">Price:</label>
                <select className="price" id="price-select">
                    <option value="default">--Default--</option>
                    <option value="">0 - $1.99</option>
                    <option value="">$2 - $5</option>
                    <option value="">$5 - $10</option>
                </select>
                <label htmlFor="pet-select">Search:</label>
                {/* <FaSearch /> */}
                <input type="text" placeholder="Search.." className="search" onChange={(e) => handleChangeSearch(e)}/>
            </div>
            <div className="form-check">
                <p>Ingredient</p>
                <div>
                    <div>
                        <label className="container-checkbox">Rice
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container-checkbox">Chicken
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div>
                        <label className="container-checkbox">Orange
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="container-checkbox">Cheery
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <span className="more">More...</span>
                </div>
            </div>
            <div className="btn-search">
                <button className="button-4" onClick={onClickToSearch}>Search</button>
                <button className="button-4">Clear</button>
            </div>
            <div className="recipes-card">
                <Grid>
                {searchedRecipes.map(({ title, id, image }) => (
                    <Card key={id}>
                    <Link to={`/recipe/${id}`}>
                        <img src={image} alt={title} />
                        <h5>{title}</h5>
                    </Link>
                    </Card>
                ))}
                </Grid>
            </div>

        </div>
    );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  text-align: center;
  gap: 2rem;
`;

const Card = styled.div`
  img {
    width: min(320px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h5 {
    text-align: center;
    padding: 1rem;
    color: #ec875b;
    
  }
`;

export default Search;