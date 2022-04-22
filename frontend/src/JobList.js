import React , {useState , useEffect} from 'react';
import JoblyApi from './api';
import JobCard from './JobCard';
import './jobList.css'

const JobList = () => {
    const [jobs , setJobs] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    const token = localStorage.getItem('token')
    useEffect (() => {
        async function getAllJobs () {
            const allJobs = await JoblyApi.getAllJobs();
            setJobs(allJobs);
            setIsLoading(false)
            
            
        }
        getAllJobs();
    } , [])
    
    if (isLoading) {
        return (
            <div className='job-list'>
                <p className='text-light'>Loading &hellip;</p>
            </div>
        )
    }

    if(token === 'undefined') {
        return (
            <div className='job-list'>
                <p className='text-light'>You must be logged in to view this page</p>
            </div>
        )
    }

    return (
        <div className='job-list'>
        <div className='container'>
            <div className='row'>
                
           {jobs.map(job => (
               <div className='col p-2'>
               <JobCard job = {job} key={job.id} />
               </div>
           ))}
           </div>
        </div>
         </div>
    )
}

export default JobList;