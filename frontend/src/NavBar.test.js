import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import App from './App';
import { sign } from 'jsonwebtoken';


test('it renders without crashing' , () => {
    render(
    <MemoryRouter>
    <NavBar />
    </MemoryRouter>
    )
})

it('matches snapshot' , () => {
    const {asFragment} =  render(
        <MemoryRouter>
        <NavBar />
        </MemoryRouter>
        )
    expect(asFragment()).toMatchSnapshot();
    
})

it('follows link to companies page correctly after logging in correctly' , () => {
    const {getByText , getByTestId} =  render(
        <MemoryRouter initialEntries={['/']}>
        <App />
        </MemoryRouter>
        )

        // login to website before following companies link
    const login = getByText('Login');
    fireEvent.click(login);
    
  
    const username = getByTestId('username');
    const password = getByTestId('password');
    const signInButton = getByText('Submit')
    fireEvent.change(username , {target : {value : 'test'}});
    fireEvent.change(password , {target : {value : 'testtest'}});
    fireEvent.click(signInButton);


    // wait for api call to be made and rendered after the link is clicked

    setTimeout(() => {
        const companies = getByText('Companies');
        fireEvent.click(companies);
        const firstCompany = getByText('Anderson , Arias and Morrow');
        expect(firstCompany).toBeInTheDocument();
    } , 1000)
})