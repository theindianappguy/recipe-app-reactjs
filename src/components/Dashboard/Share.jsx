import React, { useState } from 'react';
import '../../CSS/share.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai'
import { RiAddCircleFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';

function Share(props) {

    const [count, setCount] = useState(1);
    const [inputList, setInputList] = useState([count]);
    const user = useSelector((state) => state.auth.login.currentUser);
    console.log(user);
    // const navigate = useNavigate();

    const formikRecipe = useFormik({
        initialValues:  {
            name: '',
            description: '',
            image: '',
            formula: '',
            note: '',
            creator: user?.user.id,
            price: 0,
            vote: 0,
            views: 0
        },
        validationSchema: yup.object().shape({
            name: yup.string().required("Recipe can't be empty"),
            description: yup.string().required("Description can't be empty"),
            formula:  yup.string().required("Formula can't be empty"),
            note:  yup.string().required("Note can't be empty"),
        }),
        onSubmit: values => {
            handleCreateRecipe(formikRecipe.values);
        }
    })

    const formikRecipeRawMaterial = useFormik({
        initialValues: {
            recipe_id: 0,
            raw_material_id: 0,
            amount: 0
        },
        onSubmit: values => {

        }
    })

    const handleCreateRecipe = (body) => {
        const baseUrl = 'http://localhost:3000/recipe';
        axios.post(baseUrl, body)
            .then(response => {
                console.log(response.data);
                toast.success('Sharing successfully!');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleCreateRecipeRawMaterial = (body) => {
        const baseUrl = 'http://localhost:3000/recipematerial';
        axios.post(baseUrl, body)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(formikRecipe.values);
    console.log(formikRecipe.errors);


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

    return (

        <>
            {
                user ? <>
                    <form onSubmit={formikRecipe.handleSubmit} className='form-container-input'>
                        <h2><span>Share</span> Your Recipes 🍔</h2>
                        <div className="share-container">
                            <div className="recipe-form-1">
                                <div className="add-image">
                                    {
                                        formikRecipe.values.image ?
                                            <>
                                                {formikRecipe.values.image}
                                            </>:
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
                                                    value={formikRecipe.values.image}
                                                    // style={{display:"none"}}
                                                    accept="image/*"
                                                    onChange={formikRecipe.handleChange}
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
                                            value={formikRecipe.values.name}
                                            className="recipe-name-add-input"
                                            onChange={formikRecipe.handleChange}
                                        />
                                    </div>

                                    <div className="recipe-name-add">
                                        <p className="recipe-name-add-item">Price </p>
                                        <input type="number"
                                            id="price"
                                            name="price"
                                            value={formikRecipe.values.price}
                                            className="recipe-name-add-input"
                                            onChange={formikRecipe.handleChange}
                                        />
                                    </div>
                                    <div className="ingredient-add">
                                        <p>Ingredient </p>
                                        {inputList.map((item, index) => (
                                            <div key={index} className="ingredient-add-item">
                                                <div id='ingredient-add-item-name'>
                                                    <label>Name:</label>
                                                    <input type="text" />
                                                </div>
                                                <div id='ingredient-add-item-amount'>
                                                    <label>Amount:</label>
                                                    <input type="number"/>
                                                </div>
                                                <MdDelete className='delete-item-ingredient-add-item' onClick={() => deleteInput(index)}/>
                                            </div>
                                        ))}
                                        {/* <button type="button" onClick={addInput}> */}
                                            <RiAddCircleFill className='btn-add-ingredient' onClick={addInput}/>
                                        {/* </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="div-input-text-add">
                                <label>Add Description</label>
                                <textarea
                                    placeholder="Enter description..."
                                    className="description-add"
                                    id="description"
                                    name="description"
                                    value={formikRecipe.values.description}
                                    onChange={formikRecipe.handleChange}
                                ></textarea>
                            </div>
                            <div className="div-input-text-add">
                                <label>Add Formula</label>
                                <textarea
                                    placeholder="Enter your formula..."
                                    className="formula-add"
                                    id="formula"
                                    name="formula"
                                    value={formikRecipe.values.formula}
                                    onChange={formikRecipe.handleChange}
                                >
                                </textarea>
                            </div>
                            <div className="div-input-text-add">
                                <label>Add Note</label>
                                <textarea
                                    placeholder="Note..."
                                    className="note-add"
                                    id="note"
                                    name="note"
                                    onChange={formikRecipe.handleChange}
                                >
                                </textarea>
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