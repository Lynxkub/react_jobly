import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SignUpForm from './SignUpForm';
import JoblyApi from './api';
import App from './App';


test('it renders without crashing' , () => {
    render(
        <MemoryRouter>
            <SignUpForm />
        </MemoryRouter>
    )
})


test('it matches snapshot' , () => {
    const {asFragment} = render(
        <MemoryRouter>
            <SignUpForm />
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot();
})


test('sign up form successfully signs up a new user' , () => {
    const {getByText , getByTestId} = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    )
    const signupLink = getByText('Sign Up')
    fireEvent.click(signupLink);

    // make sure link takes user to a sign up form
    
    const username = getByTestId('username')
    expect(username).toBeInTheDocument();

    // fill out information and submit
    const password = getByTestId('password');
    const email = getByTestId('email');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const signupButton = getByTestId('signupButton')
    fireEvent.change(username , {target : {value : 'newUser'}})
    fireEvent.change(password , {target : {value : 'password'}})
    fireEvent.change(firstName , {target : {value : 'newUser'}})
    fireEvent.change(lastName , {target : {value : 'newUser'}})
    fireEvent.change(email , {target : {value : 'newUser@newUser.com'}})
    fireEvent.click(signupButton);

    setTimeout(async () => {
        const userData = await JoblyApi.getUser('newUser');
        expect(userData).toEqual({
            username: 'newUser',
            firstName : 'newUser',
            lastName : 'newUser',
            email : 'newUser@newUser.com'
        })
    } , 1000)

})