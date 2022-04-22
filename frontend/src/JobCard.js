import React , {useState , useEffect} from 'react';
import useToggleApplyState from './hooks/useToggleApplyState';


const JobCard = ({job}) => {
  
    const [isApplied , toggleIsApplied] = useToggleApplyState()
    const [clicked , setClicked] = useState(false)

    useEffect(() => {
        function switchCheck() {
        const jobsAppliedTo = JSON.parse(localStorage.getItem('jobs'));
        const checkApplied = jobsAppliedTo.find(j => j === `${job.id}`);
       
       
        if(checkApplied === `${job.id}`){
            setClicked(true)
        }
        }
        try{
        switchCheck();
        }catch (e){
            console.log(e);
        }
    } , [])
 
    
    return(
        <div>
        
           <div className ='card bg-dark' style={{'width': '18rem'}}>
               <div className='card-body'>
                    <h5 className='card-title text-light'>{job.title}</h5>
                    <h6 className='card-subtitle mb-2 text-light'>{job.companyName}</h6>
                    <h6 className='card-subtitle mb-2 text-light'>Salary : {job.salary}</h6>
                    <h6 className='card-subtitle mb-2 text-light'>Equity : {job.equity ? job.equity : '0'}</h6>
                    <button type='button' className = {!isApplied && !clicked ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'} onClick={toggleIsApplied} id = {job.id}>{!isApplied &&!clicked ? 'Apply' : 'Remove Application'}</button>
                    
                    
                    </div>
                    </div>
        </div>
    )
}

export default JobCard;

