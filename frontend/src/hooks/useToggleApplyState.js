import {useState} from 'react';
import JoblyApi from '../api';

function useToggleApplyState(initialVal = false) {
    const [value , setValue] = useState(initialVal);
    const toggle = async (e) => {
        setValue(value => !value);
        const username = localStorage.getItem('username');
     
        const jobId = e.target.id;
        const jobsAppliedTo = JSON.parse(localStorage.getItem('jobs'));
        const alreadyAppliedTo = jobsAppliedTo.find(job => job === jobId)
        if(alreadyAppliedTo === undefined){
            jobsAppliedTo.push(jobId)
            localStorage.setItem('jobs' , JSON.stringify(jobsAppliedTo));
        }else{
            const filterJobs = jobsAppliedTo.filter(job => job !== jobId);
            localStorage.setItem('jobs' , JSON.stringify(filterJobs))
        }
        
    


        await JoblyApi.applyToJob(username , jobId);
    }

    return [value , toggle];
}

export default useToggleApplyState;