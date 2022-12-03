import React, {useState} from 'react';
import '../../CSS/share.css';
// import {AiOutlineCamera} from "react-icons/ai";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {GrFormAdd} from "react-icons/gr"
import { useFormik } from "formik";
import {useSelector} from "react-redux";

function Share(props) {

    const [count, setCount] = useState(1);
    const [inputList, setInputList] = useState([count]);
    const user = useSelector((state) => state.auth.login.currentUser);
    console.log(user);
    const formik = useFormik({
        initialValues: {
            name:'',
            description:'',
            image:'',
            formula:'',
            note:'',
            creator: user.user.id,
            price: 0,
            vote: 0,
            view: 0
        },
        onSubmit: values => {
            console.log(values);
        }
    })


    const addInput = () => {
        const newCount = count + 1;
        setCount(newCount);
        const newInputList = [...inputList, newCount];
        setInputList(newInputList);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2><span>Share</span> Your Recipes 🍔</h2>
            <div className="share-container">
                <div className="recipe-form-1">
                    <div className="add-image">
                        <label htmlFor="image">
                            <AddAPhotoIcon/>
                            Choose a Photo
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="recipe-image"
                            // style={{display:"none"}}
                            accept="image/*"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="add-text">
                        <div className="recipe-name-add">
                            <p className="recipe-name-add-item">Recipe name </p>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   className="recipe-name-add-input"
                                   onChange={formik.handleChange}
                            />
                        </div>
                        <div className="ingredient-add">
                            <p>Ingredient </p>
                            {inputList.map((item, index) => (
                                <div key={index} className="ingredient-add-item">
                                    <label> -> {item}</label>
                                    <input type="text"/>
                                </div>
                            ))}
                            <button type="button" onClick={addInput}>
                                <GrFormAdd/>
                            </button>
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
                        onChange={formik.handleChange}
                    ></textarea>
                </div>
                <div className="div-input-text-add">
                    <label>Add Formula</label>
                    <textarea
                        placeholder="Enter your formula..."
                        className="formula-add"
                        id="formula"
                        name="formula"
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                    >
                    </textarea>
                </div>

                <button type="submit" className="button-27">
                    Share
                </button>
            </div>
        </form>
    );
}

export default Share;