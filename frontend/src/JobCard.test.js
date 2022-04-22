import React from 'react';
import {render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import JobCard from './JobCard';



it('renders without crashing' , () => {
    const job = {
        id : 1 ,
        title : 'test',
        salary : 100,
        equity : '0'
    }
    render(<JobCard job = {job} />)
})

it('matches snapshot' , () => {
    const job = {
        id : 1 ,
        title : 'test',
        salary : 100,
        equity : '0'
    }

    const {asFragment} = render(<JobCard job = {job} />)
    expect(asFragment()).toMatchSnapshot();
})