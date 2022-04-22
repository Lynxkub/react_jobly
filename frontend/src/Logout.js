import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css'

const Logout = ( { logout }) => {

    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('token')
        await logout();
        history.push('/')
        
    }
    return (
    <div className='d-flex align-items-center bg-logged-in'>
        <div className='container-md bg-background w-50 p-4'>
        <form onSubmit = {handleSubmit}>
        <div className='align-items-top container-md bg-background w-50 p-4'>
            <p className='fs-1 text-light'>Are you sure you want to log out?</p>
            <button className='btn btn-lg btn-danger'>Yes</button>
        </div>
        </form>
        </div>
        </div>
    )
}


export default Logout