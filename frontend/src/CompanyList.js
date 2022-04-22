import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import uuid from 'react-uuid';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import './jobList.css'


const CompanyList = () => {
    const [companies , setCompanies] = useState();
    const [isLoading , setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    useEffect(() => {
        async function getAllCompanies () {
            const allCompanies = await JoblyApi.getAllCompanies();

            setCompanies(allCompanies);
            setIsLoading(false);
        }
        getAllCompanies();
       
        
    } , [])

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }
  
    if(isLoading) {
        return (
            <div className='job-list'>
                <p className='text-light'>Loading &hellip;</p>
            </div>
        )
    }else if(token === 'undefined') {
        return (
            <div className='job-list'>
                <p className='text-light'>You must be logged in to view this page</p>
            </div>
        )
    }else {
  
    return (
        <div className='job-list'>
            <SearchBar  search = {search} key={uuid()}/>
            {companies.map(company => (
            <div>
                <Link to={`/companies/${company.handle}`} key = {uuid()}>
                <CompanyCard company={company} key={uuid()}  /> 
                </Link>
            </div>
            ))}
        </div>
    )
            }
}
export default CompanyList;