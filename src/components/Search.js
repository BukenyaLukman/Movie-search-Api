import React, { useState} from 'react';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');


    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callsearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }



  return (
    <form className='search'>
        <input 
        value={searchValue}
        onChange={handleSearchInputChange}
        type='text' 
        placeholder='Search...' />
        <input onClick={callsearchFunction} type="submit" value="Search" />
    </form>
  )
};

export default Search;
