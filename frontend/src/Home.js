import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

const Home = () => {

    const userToken = localStorage.getItem('token');

    if(userToken === 'undefined') {
    return (
        <div className='d-flex align-items-center bg-landing'>
            
             <div className='container-md bg-background w-75 p-5 '>
            
            <h1 className='text-center text-white'>Welcome to Jobly!</h1>
            <h3 className='text-center text-white'>Looking for a job? We've got you covered.</h3>
            <p className='text-center text-white'>New to Jobly? <Link to='/signup'><button className='btn btn-light btn-sm'>Create a profile</button></Link></p>
            <p className='text-center text-white'>Already a user? <Link to='login'><button className='btn btn-light btn-sm'>Sign In to your profile</button></Link></p>
            <p className='text-center text-white'>Testing out the site? Login using the following credentials:</p>
            <p className='text-center text-white'>Username : test_profile</p>
            <p className='text-center text-white'>Password : test_profile</p>
            
        </div>
        </div>
    )
    }

    return (
        <div className='d-flex align-items-top bg-logged-in'>
             <div className='container-md bg-background w-50 p-3'>
                 <div className='container-md bg-background p-3'>
            <p className='text-center text-white fs-3'>Are you ready to find your new dream job?</p>
            </div>
            <div className='container-md bg-background p-3'>
            <p className='text-center text-white fs-3'> Hundreds of companies are waiting to hear from you today.</p>
            </div>
            <div className='container-md bg-background p-3'>
                <p className='text-center text-white fs-3'>Time to start your future.</p>
            </div>
        </div>
        </div>
    )
}


export default Home;