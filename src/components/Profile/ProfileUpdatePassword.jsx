import {useFormik} from 'formik'
import React from 'react'
import {updatePassword} from "../Api/user.api";
import {validatePasswordForUpdate} from "../Api/auth.api";
import {useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const ProfileUpdatePassword = ({setUpdatePassword}) => {
    const yup = require('yup');
    const errorMessage = useSelector((state) => state.auth.login.currentUserError);
    const user = useSelector((state) => state.user.dataUser.data);

    const validationPassword = yup.object({
        currentPassword: yup.string().required("Password can't blank"),
        newPassword: yup.string().min(8, 'Must be greater than or equal 8 characters').required("Password can't blank"),
        confirmPassword: yup.string().required("Password can't blank").oneOf([yup.ref("newPassword"), null], "Password must match"),
    })

    const formik = useFormik({
        initialValues: {
            id: user.id,
            email: user.email,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            errorMessage: ""
        },
        validationSchema: validationPassword,
        onSubmit: values => {
            validatePasswordForUpdate({
                email: values.email,
                password: values.currentPassword
            }).then(() => {
                console.log('validate pass successfully')
                updatePassword(values.id, values.newPassword, setUpdatePassword, toast)
                console.log("Current password is valid");
            })
            .catch(err => {
                toast('❌ Your current password is incorrect');
            })
            .finally(() => {
            console.log('You are updated password!');
            })
        }
    });

    return (
        <>
            <div className='content'>
                <div className='details'>
                    <h2>Update password</h2>
                    <span>
            Current password:
            <input
                type="password"
                id='currentPassword'
                name='currentPassword'
                placeholder='Current password'
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
            />
          </span>
                    {formik.errors.currentPassword &&
                        <p className='err'>{formik.errors.currentPassword}</p>
                    }
                    <span>
            New password:
            <input
                type="password"
                id='newPassword'
                name='newPassword'
                placeholder='New password'
                value={formik.values.newPassword}
                onChange={formik.handleChange}
            />
          </span>
                    {formik.errors.newPassword &&
                        <p className='err'>{formik.errors.newPassword}</p>
                    }
                    <span>
            Confirm password:
            <input
                type="password"
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
            />
          </span>
                    {formik.errors.confirmPassword &&
                        <p className='err'>{formik.errors.confirmPassword}</p>
                    }
                </div>
            </div>

            {
                errorMessage &&
                <div className="err">
                    <p>{errorMessage}</p>
                </div>
            }
            <div className='button'>

                <button type='submit' onClick={formik.handleSubmit}>
                    Update
                </button>

                <button type='button' onClick={() => setUpdatePassword(false)}>
                    Cancel
                </button>
            </div>
            <ToastContainer/>
        </>
    )
}

export default ProfileUpdatePassword