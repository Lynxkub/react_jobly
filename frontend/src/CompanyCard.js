import React from 'react';



const CompanyCard = ({company}) => {
    
    return(
        <div className='card bg-dark' style={{'width' : '100vw'}}>
            <div className='card-body'>
            <h3 className='card-title text-light'>{company.name}</h3>
            <p className='card-text text-light'>{company.description}</p>
            <p className='card-text text-light'>Employees : {company.numEmployees}</p>
            {/* {company.logoUrl !== null ? <div><img src = {company.logoUrl} /></div> : null} */}
            </div>
        </div>
    )
}

export default CompanyCard;