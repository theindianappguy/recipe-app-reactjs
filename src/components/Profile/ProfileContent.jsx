import React, { useState } from 'react'
import '../../CSS/profile.css'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai';
import 'date-fns';
import { MdFileUpload } from 'react-icons/md';
import ProfileUpdateDetails from './ProfileUpdateDetails';
import ProfileDetails from './ProfileDetails';
import ProfileUpdatePassword from './ProfileUpdatePassword';

const ProfileContent = ({setShow}) => {
    const [updateDetails, setUpdateDetails] = useState(false);
    const [updatePassword, setUpdatePassword] = useState(false);
    return (
        <div className='profile'>
            <AiOutlineClose
                fontSize={25}
                id='icon-close-profile'
                onClick={()=>setShow(false)}
            />
            <div className='profile-content'>
                <div className='image'>
                    <img src="https://cdnimg.vietnamplus.vn/uploaded/mzdic/2020_08_22/brunofernandes2208.jpg" alt="" />
                    <MdFileUpload className='icon-upload-image' />
                    {/* {currentUser.avatar} */}
                </div>
                <div className='media-icons'>
                    <BsFacebook className='icon' fontSize={20} />
                    <BsTwitter className='icon' fontSize={20} />
                    <BsGoogle className='icon' fontSize={20} />
                </div>
                {
                    updatePassword ?
                        <ProfileUpdatePassword setUpdatePassword={setUpdatePassword} />
                        :
                        <>
                            {
                                updateDetails ? <ProfileUpdateDetails setUpdateDetails={setUpdateDetails} /> : <ProfileDetails />
                            }
                            <div className='button'>
                                {
                                    !updateDetails &&
                                    <button type="button" onClick={() => setUpdateDetails(true)}>Update Your Profile</button>
                                }
                            </div>
                        </>
                }
            </div>
            {
                !updatePassword &&
                <span
                    className='update-password'
                    onClick={() => setUpdatePassword(true)}
                >
                    Update your password
                </span>
            }
        </div>
    )
}

export default ProfileContent