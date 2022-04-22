import React , {useEffect, useState} from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './api';



function App() {
 
  const [userToken , setUserToken] = useState(localStorage.getItem('token'))
  const [username , setUsername] = useState(localStorage.getItem('username'))

  useEffect(() => {
    localStorage.setItem('token' , userToken)
  } , [userToken])


  JoblyApi.token = localStorage.getItem('token');
  
  const jobsAppliedTo = localStorage.getItem('jobs');
  if(!jobsAppliedTo){
    localStorage.setItem('jobs' , JSON.stringify([' ']));
  }
 

  const signUp = async (newUser) => {
  setUserToken(await JoblyApi.register(newUser));
  localStorage.setItem('token' , userToken)
  setUsername(localStorage.getItem('username'));
}

  const login = async (user) => {
    setUserToken(await JoblyApi.login(user))
    localStorage.setItem('token' , userToken)
    setUsername(localStorage.getItem('username'));
  }

  const logout =  () => {
    setUserToken(undefined);
    setUsername(localStorage.getItem('username'));
  

  }



  return (
    <div className='fill-window'>
    <NavBar token = {userToken} username = {username} />
    <Routes signUp = {signUp} login = {login} logout = {logout} token = {userToken} />
    </div>
  );
}

export default App;

