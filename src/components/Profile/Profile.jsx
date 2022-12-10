import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import ProfileContent from './ProfileContent';
import '../../CSS/profile.css';
const Profile = ({ show, setShow }) => {

    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const [name, setName] = useState(currentUser?.name);
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState(currentUser?.image);

    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            setImageURL(URL.createObjectURL(file));
        }
    }

    const handleCloseProfile = () => setShow(false);

    return (
        <Modal show={show} onHide={handleCloseProfile}>               
            <ProfileContent/>
        </Modal>      
    )
}

export default Profile