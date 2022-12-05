import React, { useState, useEffect } from 'react';
import '../../CSS/search.css';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Search(props) {
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
        // getSearchedRecipes(searchTerm).then((data) => {
        //     setSearchedRecipes(data);
        // });
    }


    useEffect(() => {
        getSearchedRecipes(searchTerm).then((data) => {
            setSearchedRecipes(data);
        });
    });

    const mockup_ingredents = [{id: 1, name: "Rice"}, 
    {id: 2, name: "Chicken"}, {id: 3, name: "Spice"}, {id: 4, name: "Orange"}, {id: 5, name: "Cucumber"}, {id: 6, name: "Leaf"}, 
    {id: 7, name: "Juice"}, {id: 8, name: "Beef"}, {id: 9, name: "Wine"}]

    const convertMatrix = (one_dimensional_array, n) => {
        let result = [];
        while (one_dimensional_array.length) result.push(one_dimensional_array.splice(0, n));
        return result;
    }


    const mockup_converteds = convertMatrix(mockup_ingredents, 3)
    const show_up_ingredents = mockup_converteds.slice(0, 2)
    const hiddent_ingredents = mockup_converteds.slice(0, 9)

    const [moreClicked, setMore] = useState(false) 
    const [checkedList, setCheckedList] = useState({});

    const handlecheck = (isCheck, id) => {
        const checkedListClone = {...checkedList}
        checkedListClone[id] = isCheck
        setCheckedList(checkedListClone)
        // convert end call api here
        const filter_item_ids = Object.keys(checkedListClone).filter(key => checkedListClone[key] === true)
        // console.log(filter_item_ids);
        // Receive and setSearchedRecipes here
        
    }

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
                <input type="text" placeholder="Search.." className="search" onChange={(e) => handleChangeSearch(e)} />
            </div>
            <div className="form-check">
                <p>Ingredient</p>
                <div>
                {
                    (moreClicked? hiddent_ingredents : show_up_ingredents)?.map(item => (
                        <div key={item.id}>
                            {item?.map((ingredent) => (

                                <label key={ingredent.id} className="container-checkbox">{ingredent.name}
                                    <input type="checkbox" onChange={(event) => handlecheck(event.currentTarget.checked, ingredent.id)} />
                                    <span className="checkmark"></span>
                                </label>
                            ))}
                        </div>
                    ))
                }

                {
                    moreClicked? <></> : <span className="more" onClick={() => setMore(true)}>More...</span>
                }
                    
                </div>
            </div>
            <div className="btn-search">
                <button className="button-4" onClick={onClickToSearch}>Search</button>
                <button className="button-4">Clear</button>
            </div>
            <div className="recipes-card">
                <Grid>
                    {searchedRecipes?.map(({ title, id, image }) => (
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