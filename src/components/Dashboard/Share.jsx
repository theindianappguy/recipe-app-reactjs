import React, { useEffect, useState } from 'react';
import '../../CSS/share.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai'
import { RiAddCircleFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';

function Share(props) {

    const [count, setCount] = useState(1);
    const [inputList, setInputList] = useState([count]);
    const user = useSelector(state => state.auth.login.currentUser);
    const token = localStorage.getItem('access_token');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [formula, setFormula] = useState('');
    const [note, setNote] = useState('');
    const creator = user?.id;
    const [price, setPrice] = useState(0);
    const [vote, setVote] = useState(0);
    const [views, setViews] = useState(0);
    // const navigate = useNavigate();

    const recipe = {
        name: name,
        description: description,
        image: JSON.stringify(image),
        formula: formula,
        note: note,
        creator: creator,
        price: price,
        vote: vote,
        views: views
    }

    const handleCreateRecipe = () => {
        const baseUrl = 'http://localhost:3000/recipe';
        axios.post(baseUrl, recipe)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
                toast.error('Sharing failed');
            })
    }

    const handleChangeImage = (e) => {
        console.log('handleChangeImage');
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log('image: ', file);
        setImage(file);
    };


    const handleChangeForm = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'formula':
                setFormula(e.target.value);
                break;
            case 'note':
                setNote(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            default:
                console.log("handleChange...");
        }
    };

    // useEffect(() => {
    //     const recipe = {
    //         name: name, 
    //         description: description, 
    //         image: image?.preview, 
    //         formula: formula, 
    //         note: note, 
    //         creator: creator, 
    //         price: price, 
    //         views: views
    //     }

    //     console.log(recipe);
    // });

    // const handleCreateRecipeRawMaterial = (body) => {
    //     const baseUrl = 'http://localhost:3000/recipematerial';
    //     axios.post(baseUrl, body)
    //         .then(response => {
    //             console.log(response.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }


    const addInput = () => {
        const newCount = count + 1;
        setCount(newCount);
        const newInputList = [...inputList, newCount];
        setInputList(newInputList);
    }

    const deleteInput = (index) => {
        const newInputList = inputList.filter((item, i) => i !== index);
        setInputList(newInputList);
    }

    const mockup_ingredents = [
        {value: "1", label: "Rice"}, {value: "2", label: "Chicken"}, {value: "3", label: "Spice"},
        {value: "4", label: "Orange"}, {value: "5", label: "Cucumber"}, {value: "6", label: "Leaf"},
        {value: "7", label: "Juice"}, {value: "8", label: "Beef"}, {value: "9", label: "Wine"}
    ]

    return (

        <>
            {
                token ? <>
                    <form onSubmit={handleCreateRecipe} className='form-container-input'>
                        <h2>Share Your Recipes 🍔</h2>
                        <div className="share-container">
                            <div className="recipe-form-1">
                                <div className="add-image">
                                    {
                                        image ?
                                            <>
                                                <img src={image.preview} alt=""
                                                    style={{
                                                        width: '400px',
                                                        height: '400px',
                                                        borderRadius: '10px',
                                                    }}
                                                />
                                            </> :
                                            <>
                                                <label htmlFor="image">
                                                    <AddAPhotoIcon />
                                                    Choose a Photo
                                                </label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    className="recipe-image"
                                                    value={image}
                                                    // style={{display:"none"}}
                                                    accept="image/*"
                                                    onChange={handleChangeImage}
                                                />
                                            </>
                                    }
                                </div>
                                <div className="add-text">
                                    <div className="recipe-name-add">
                                        <p className="recipe-name-add-item">Recipe name </p>
                                        <input type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            className="recipe-name-add-input"
                                            onChange={handleChangeForm}
                                            placeholder="recipe name"
                                        />
                                    </div>

                                    <div className="recipe-name-add">
                                        <p className="recipe-name-add-item">Price </p>
                                        <input type="number"
                                            id="price"
                                            name="price"
                                            value={price}
                                            className="recipe-name-add-input"
                                            onChange={handleChangeForm}
                                        />
                                    </div>
                                    <div className="ingredient-add">
                                        <p>Ingredient </p>
                                        {inputList.map((item, index) => (
                                            <div key={index} className="ingredient-add-item">
                                                <div className='ingredient-add-item-name'>
                                                    <label>Name:</label>
                                                    <Select
                                                        options={mockup_ingredents}
                                                        onChange={(e) => console.log(e)} // Handle here
                                                    />
                                                </div>
                                                <div className='ingredient-add-item-amount'>
                                                    <label>Amount:</label>
                                                    <input type="number" />
                                                </div>
                                                <MdDelete size={26} className='delete-item-ingredient-add-item' onClick={() => deleteInput(index)} />
                                            </div>
                                        ))}
                                        {/* <button type="button" onClick={addInput}> */}
                                        <RiAddCircleFill size={26} className='btn-add-ingredient' onClick={addInput} />
                                        {/* </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className='other-input'>
                                <div className="styled-input wide">
                                    <textarea
                                        required
                                        className="description-add"
                                        id="description"
                                        name="description"
                                        value={description}
                                        onChange={handleChangeForm}
                                    ></textarea>
                                    <label>Description</label>
                                    <span></span>
                                </div>
                                <div className="styled-input wide">

                                    <textarea
                                        required
                                        className="formula-add"
                                        id="formula"
                                        name="formula"
                                        value={formula}
                                        onChange={handleChangeForm}
                                    >
                                    </textarea>
                                    <label>Formula</label>
                                    <span></span>
                                </div>
                                <div className="styled-input wide">
                                    <textarea
                                        required
                                        className="note-add"
                                        id="note"
                                        name="note"
                                        value={note}
                                        onChange={handleChangeForm}
                                    >
                                    </textarea>
                                    <label>Note</label>
                                </div>
                            </div>

                            <button type="submit" className="button-27">
                                Share
                            </button>

                        </div>
                    </form>
                </>
                    :
                    <div className='login-after-share'>
                        <AiFillWarning fontSize={"120px"} color="#FD6929" />
                        <p>You must
                            <span><i><Link to='/login'> Login </Link></i></span>
                            before sharing your recipes
                        </p>
                    </div>
            }
        </>
    );
}

export default Share;