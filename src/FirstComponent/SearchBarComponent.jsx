import React, { useState } from 'react'

const handleSearch = (e) => setSearchQuery(e.target.value);
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Being executed!");
    console.log("Being executed!!");
}
const SearchBarComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" 
                value={searchQuery}
                onChange = {handleSearch}
                placeholder='Search' />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default SearchBarComponent

