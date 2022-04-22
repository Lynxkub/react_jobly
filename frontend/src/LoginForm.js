import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './home.css'

const SigninForm = ( { login , token }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData , setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        localStorage.setItem('username' , formData.username)
        await login(formData);
        setFormData(INITIAL_STATE);
        history.push('/')
        }catch(err) {
            alert(err);
        }
    }

    return(
        <div className='d-flex align-items-center bg-landing'>
            <div className='container-md bg-background w-50 p-4'>
            <form onSubmit = {handleSubmit}>
                <label htmlFor='username' className='form-label text-light'>Username</label>
                <input 
                type = 'text'
                placeholder='Username'
                name='username'
                data-testid='username'
                value={formData.username}
                onChange={handleChange}
                className='form-control'
                />
                <label htmlFor='password' className='form-label text-light'>Password</label>
                <input
                type='password'
                placeholder='Password'
                name='password'
                data-testid='password'
                value={formData.password}
                onChange={handleChange} 
                className='form-control'
                />
                <button className='btn btn-md btn-dark'>Submit</button>
            </form>
            <p className='text-center text-white'>Testing out the site? Login using the following credentials:</p>
            <p className='text-center text-white'>Username : test_profile</p>
            <p className='text-center text-white'>Password : test_profile</p>
            </div>
        </div>
    )
}

export default SigninForm