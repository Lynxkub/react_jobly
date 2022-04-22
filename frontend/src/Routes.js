import React  from 'react';
import {Route , Switch} from 'react-router-dom';
import uuid from 'react-uuid';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import SignUpForm from './SignUpForm';
import SigninForm from './LoginForm';
import Logout from './Logout';
import UserProfile from './UserProfile';
import Home from './Home';



const Routes = ( { signUp , login, logout , token }) => {

    
  
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/companies'>
                <CompanyList key = {uuid()}/>
            </Route>
            <Route path='/companies/:handle'>
               <CompanyDetails key = {uuid()} />
            </Route>
            <Route exact path='/jobs'>
               <JobList key={uuid()} />
            </Route>
            <Route exact path ='/login'>
                <SigninForm login = {login} token = {token}/>
            </Route>
            <Route exact path='/signup'>
                <SignUpForm signUp = {signUp} token = {token} />
            </Route>
            <Route exact path ='/profile'>
                <UserProfile />
            </Route>
            <Route exact path = '/logout'>
                <Logout logout = {logout} />
            </Route>
        </Switch>
    )
}


export default Routes;