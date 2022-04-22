import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {render , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CompanyCard from './CompanyCard';

it('renders without crashing' , () => {
    
    const company = {
        name : 'test',
        description: 'test',
        numEmployees : 10,
        logoUrl : null
    }

    render(<CompanyCard company = {company}/>)
})

it('matches snapshot' , () => {
    const company = {
        name : 'test',
        description: 'test',
        numEmployees : 10,
        logoUrl : null
    }
    const {asFragment} = render(<CompanyCard company = {company}/>);
    expect(asFragment()).toMatchSnapshot();
})

it('allows a click to bring to a company page that displays jobs' , () => {
    const company = {
        name : 'test',
        description: 'test',
        numEmployees : 10,
        logoUrl : null,
        jobs : [
            {
                id: 1 , 
                title: 'test',
                salary : 100,
                equity : '0.99'
            }

        ]
    }

    const {getByText} =render(<CompanyCard company = {company} />);
    setTimeout(() => {
        const name = getByText('test');
        expect(name).toBeInTheDocument();
        fireEvent.click(name);
            setTimeout(() => {
            // check to see if the link to the company page is loaded and a job card is shown with the correct equity piece
            const jobEquity = getByText('0.99')
            expect(jobEquity).toBeInTheDocument();
        } , 1000)
    } , 1000)
    

})

