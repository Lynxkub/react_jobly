import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {render , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CompanyList from './CompanyList';

it('renders without crashing' , () => {
    render(<CompanyList />)
})

it('matches snapshot' , () => {
    const {asFragment} = render(<CompanyList />);
    expect(asFragment()).toMatchSnapshot();
})

it('make api call to database and renders details on businesses' , () => {
    const {getByText} = render(<CompanyList />);

    setTimeout(() => {
        const firstCompany = getByText('Anderson , Arias and Morrow');
        expect(firstCompany).toBeInTheDocument();
    } , 1000)
})