import React from 'react'

function Search(props) {
    return (
      <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text"  onChange={props.search}/>
      </div>
    )
  }

export default Search;