import React  from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ( { token , username }) => {

  
    
    if(!username){
        return(
            <nav className='navbar  navbar-light bg-dark justify-content-end'>
                 <div className='container-fluid'>
            <NavLink className='navbar-brand fs-1 fw-bold'  exact to='/'>
                Jobly
            </NavLink>
            </div>
        <ul className='nav nav-tabs justify-content-end' id='myTab' role='tablist'>
            
            <li className='nav-item' role='presentation'>
        <NavLink  className='nav-link bg-dark text-light' aria-current='page' exact to='/'>
            Home
        </NavLink>
        </li>
        <li className='nav-item' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page' exact to='/login'>
            Login
        </NavLink>
        </li>
        <li className='nav-item' role='presentation'>
        <NavLink exact className='nav-link bg-dark text-light' aria-current='page' to='/signup'>
            Sign Up 
        </NavLink>
        </li>
        </ul>
        </nav>
        )
    }else {

    
    return (
        <nav className='navbar  navbar-light bg-dark justify-content-end'>
            <div className='container-fluid'>
            <NavLink className='navbar-brand fs-1 fw-bold'  exact to='/'>
                Jobly
            </NavLink>
            </div>
    <ul className='nav nav-tabs justify-content-end ' id='myTab' role='tablist'>
        <li className='nav-items' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page' exact to='/'>
            Home
        </NavLink>
        </li>
        <li className='nav-items' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page'  exact to='/companies'>
            Companies
        </NavLink>
        </li>
        <li className='nav-items' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page'  exact to='/jobs'>
            Jobs
        </NavLink>
        </li>
        <li className='nav-items' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page'   exact to='/profile'>
            Profile
        </NavLink>
        </li>
        <li className='nav-items' role='presentation'>
        <NavLink className='nav-link bg-dark text-light' aria-current='page' exact to='/logout'>
            {username} Log Out
        </NavLink>
        </li>
        </ul>
        </nav>
    )
    }
}


export default NavBar;