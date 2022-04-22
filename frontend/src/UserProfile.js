import React , {useEffect, useState} from 'react'
import JoblyApi from './api'
import './home.css'
const UserProfile = () => {

    const INITIAL_STATE = {
        username : "",
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    }

    const [formData , setFormData] = useState(INITIAL_STATE)
    const userToken = localStorage.getItem('token');

    useEffect(() => {
        async function getUserData () {
            const currUser = localStorage.getItem('username')
            const userData = await JoblyApi.getUser(currUser);
            setFormData({
                username : userData.username,
                firstName : userData.firstName,
                lastName : userData.lastName,
                email : userData.email
            })
        }
        getUserData()
    } , [] )

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JoblyApi.token);
        await JoblyApi.editProfile(formData.username ,  {firstName : formData.firstName , lastName : formData.lastName , email : formData.email , password: formData.email})
    }
    if(userToken === 'undefined') {
        return (
            <div>
                <p>You must be logged in to view this page</p>
            </div>
        )
    }
    return (
        <div className='d-flex align-items-center bg-logged-in'>
             <div className='container-md bg-background w-50 p-4'>
            <h2 className='text-center text-light'>Edit Your Profile</h2>
            <h4 className='text-center text-light'>Make changes to your First Name , Last Name , or Email</h4>
          
            <form onSubmit = {handleSubmit}>
                <div className='mb-3'>
                <label htmlFor='firstName' className='form-label text-light'>First Name</label>
                <input 
                type = 'text'
                name='firstName'
                value={formData.firstName}
                data-testid='firstName'
                onChange={handleChange}
                className='form-control'
                />
                </div>
                <div className='mb-3'>
                <label htmlFor='lastName' className='form-label text-light'>Last Name</label>
                <input 
                type = 'text'
                name='lastName'
                value={formData.lastName}
                data-testid='lastName'
                onChange={handleChange}
                className='form-control'
                />
                </div>
                <div className='mb-3'>
                <label htmlFor='email' className='form-label text-light'>Email</label>
                <input 
                type = 'email'
                name='email'
                value={formData.email}
                data-testid='email'
                onChange={handleChange}
                className='form-control'
                />
                </div>
                <div className='mb-3'>
                <label htmlFor='password' className='form-label text-light'>Password</label>
                <input 
                type = 'password'
                placeholder='Enter Password to Submit Changes'
                name='password'
                value={formData.password}
                data-testid='password'
                onChange={handleChange}
                className='form-control'
                />
                </div>
                <button className='btn btn-md btn-dark'>Submit Changes</button>
            </form>
           </div>
        </div>
    )
}


export default UserProfile;


// now to create a function to update (patch) a users information on edit page