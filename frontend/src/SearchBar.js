import React , {useState} from 'react';



const SearchBar = ( { search } ) => {
    
    const [formData , setFormData] = useState("");

    const handleChange = (e) => {
       setFormData(e.target.value)
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        search(formData.trim() || undefined);
        setFormData(formData.trim());

        
    }

   
    return(
        <div className='d-flex align-items-center'>
            <div className='container-md bg-background w-50 p-4'>
        <form onSubmit={handleSubmit}>
            <label htmlFor = 'companyHandle' className='form-label text-light fs-5'>Search for a company</label>
            <input 
            type = 'text'
            placeholder='Company Name'
            name = 'companyHandle'
            test-id = 'companyHandle'
            value = {formData.companyHandle}
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </div>
        </div>
    )


}

export default SearchBar;