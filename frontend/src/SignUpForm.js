import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './home.css'

const SignUpForm = ( { signUp , token}) => {
    const history = useHistory();
    const INITIAL_STATE = {
        username : '',
        password : '',
        firstName : '',
        lastName : '',
        email : ''
    }
    const [formData , setFormData] = useState(INITIAL_STATE);

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
        await signUp(formData);
        console.log(token)
        setFormData(INITIAL_STATE)
        history.push('/')
        }catch (err){
            alert(err)
        }
    }

    return(
        <div className='d-flex align-items-center bg-landing'>
            <div className='container-md bg-background w-50 p-4'>
            <form onSubmit = {handleSubmit}> 
                <label htmlFor = 'username' className='form-label text-light'>Username</label>
                <input
                type='text'
                placeholder='Username'
                name='username'
                data-testid='username'
                value={formData.username}
                onChange={handleChange} 
                className='form-control'
                />
                <label htmlFor = 'password' className='form-label text-light'>Password</label>
                <input
                type='password'
                placeholder='Password'
                name='password'
                data-testid='password'
                value={formData.password}
                onChange={handleChange}
                className='form-control' 
                />
                <label htmlFor = 'firstName' className='form-label text-light'>First Name</label>
                <input
                type='text'
                placeholder='First Name'
                name='firstName'
                data-testid='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='form-control' 
                />
                <label htmlFor = 'lastName' className='form-label text-light'>Last Name</label>
                <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                data-testid='lastName'
                value={formData.lastName}
                onChange={handleChange} 
                className='form-control'
                />
                <label htmlFor = 'email' className='form-label text-light'>Email</label>
                <input
                type='email'
                placeholder='Email'
                name='email'
                data-testid='email'
                value={formData.email}
                onChange={handleChange} 
                className='form-control'
                />
                <button data-testid = 'signupButton' className='btn btn-md btn-dark'>Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default SignUpForm;