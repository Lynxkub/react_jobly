import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import uuid from 'react-uuid';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';
import './home.css'

const CompanyDetails = () => {
const {handle} = useParams();
const [isLoading , setIsLoading] = useState(true)
const [company , setCompany] = useState([])
const token = localStorage.getItem('token');



useEffect (() => {
    async function getCompanyByHandle () {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false);
    }
    getCompanyByHandle();
} , [] );


if (isLoading) {
    return (
        <div className='bg-logged-in'>
            <p className='text-light'>Loading &hellip;</p>
        </div>
    )
}

if(token === 'undefined') {
    return (
        <div className='bg-logged-in'>
            <p className='text-light'>You must be logged in to view this page</p>
        </div>
    )
}
return (
    <div className='bg-logged-in'>
        <CompanyCard company = {company} key = {uuid()}/>
       <div className = 'container'>
           <div className='row'>
               
        {company.jobs.map(job => (
            <div className='col'>
                <JobCard  job = {job} key = {job.id}/>
                </div>
        ))}
        
        </div>
        </div>
    </div>
)
}

export default CompanyDetails;