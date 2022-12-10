import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../../CSS/profile.css'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';

const ProfileContent = () => {
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(currentUser?.avatar);
    const [update, setUpdate] = useState(false);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setImage(URL.createObjectURL(file));
        }
    }

    console.log(currentUser);

    return (
        <div className='profile'>
            <form className='profile-content'>
                <div className='image'>
                    <img src="https://cdnimg.vietnamplus.vn/uploaded/mzdic/2020_08_22/brunofernandes2208.jpg" alt="" />
                    {/* {currentUser.avatar} */}
                </div>
                <div className='media-icons'>
                    <BsFacebook className='icon' fontSize={20} />
                    <BsTwitter className='icon' fontSize={20} />
                    <BsGoogle className='icon' fontSize={20} />
                </div>
                <div className='content'>
                    <div className='details'>
                        <h2>
                            👤{currentUser.username}
                        </h2>
                        <span className='birth_date'>Birth day:
                            {
                                update ?
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            label="Material Date Picker"
                                            variant="dialog"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                        />
                                    </MuiPickersUtilsProvider>
                                    :
                                    <p>{currentUser.birth_date}</p>
                            }
                        </span>
                        <span className='gender'>
                            Gender:
                            {
                                update ?
                                    <div>
                                        <div className='gender-item'>
                                            <input type="radio" id='male' name="gender" value="male" />
                                            male
                                        </div>
                                        <div className='gender-item'>
                                            <input type="radio" id='female' name="gender" value="female" />
                                            female
                                        </div>
                                    </div>
                                    :
                                    <p>{currentUser.gender}</p>
                            }
                        </span>
                        <span className='email'>
                            Email:
                            {
                                update ?
                                    <input type="email" name="" value="" placeholder='your email' />
                                    :
                                    <p> {currentUser.email} </p>
                            }
                        </span>
                        <span className='phone'>
                            Phone:
                            {
                                update ?
                                    <input type="text" name="" value="" placeholder='your phone' />
                                    :
                                    <p>{currentUser.birth_date}</p>
                            }
                        </span>
                    </div>
                </div>
                <div className='button'>
                    {
                        update ?
                            <button type="button" onClick={() => setUpdate(false)}>Submit</button>
                            :
                            <button type="button" onClick={() => setUpdate(true)}>Update</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default ProfileContent