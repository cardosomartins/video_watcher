import React, { useState } from 'react'


const SearchBarComponent = ({onSearch}) => {
    
    const [textToBeSearched, setTextToBeSearched] = useState("");

    const handleChange = (e) => setTextToBeSearched(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(textToBeSearched)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="search" 
                value={textToBeSearched}
                onChange = {handleChange}
                placeholder='Search' />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBarComponent

