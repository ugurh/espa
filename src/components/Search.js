import React from 'react';

function Search(props) {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) =>{
        console.log(event.target.value)
        setSearch(event.target.value);
        props.onSearch(event);
      }
        return (
            <div>
                <label htmlFor="search">Search: </label>
                <input id="search" type="text"  onChange={handleChange}/>
                <br/>
                <p>
                    Searching for <strong>{search}</strong>.
                </p>
            </div>
        );
    
}

export default Search;