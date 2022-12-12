import React from 'react';
import Modal from "react-bootstrap/Modal";
import ProfileContent from './ProfileContent';
import '../../CSS/profile.css';
const Profile = ({ show, setShow }) => {

    const handleCloseProfile = () => setShow(false);

    return (
        <Modal show={show} onHide={handleCloseProfile}>
            <ProfileContent setShow={setShow} />
        </Modal>
    )
}

export default Profile