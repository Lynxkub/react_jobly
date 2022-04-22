import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from './UserProfile';
import JoblyApi from './api';
import App from './App';


test('it renders without crashing' , () => {
    render(
        <MemoryRouter>
            <UserProfile />
        </MemoryRouter>
    )
})

test('it matches snapshot' , () => {
    const {asFragment} = render(
        <MemoryRouter>
            <UserProfile />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})


test('it updates user profile correctly' , () => {
    const {getByText , getByTestId} = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    )

    // Login to site first
    const login = getByText('Login');
    fireEvent.click(login);
    
  
    const username = getByTestId('username');
    const password = getByTestId('password');
    const signInButton = getByText('Submit')
    fireEvent.change(username , {target : {value : 'test'}});
    fireEvent.change(password , {target : {value : 'testtest'}});
    fireEvent.click(signInButton);

    setTimeout(() => {
        const firstName = getByTestId('firstName')
        const lastName = getByTestId('lastName')
        const email = getByTestId('email')
        const editPassword = getByTestId('password')
        const submit = getByText('Submit Changes');
    
        fireEvent.change(firstName , {target : {value : 'testEdit'}})
        fireEvent.change(editPassword , {target : {value : 'testtest'}})
        fireEvent.click(submit);
    } , 1000)
 

    // check database to see if it matches the change above

    setTimeout( async () => {
        const userData = await JoblyApi.getUser('test');
        expect(userData).toEqual({
            username : 'test',
            firstName : 'testEdit',
            lastName : 'test',
            email : 'test@test.com'
        })
    } , 1000)
})