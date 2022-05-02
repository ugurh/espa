import React from 'react'

// Search({ search, onSearch }) 
function Search(props) {

    const { searchTerm, search } = props;
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={searchTerm} onChange={search} />
        </div>
    )
}

export default Search;

/* 
*** version 1 ***

const Item = ({

 item: {
   title,
   url,
   author,
   num_comments,
   points,
 },

}) => (
 <div>
   <span>

     <a href={url}>{title}</a>

   </span>

   <span>{author}</span>
   <span>{num_comments}</span>
   <span>{points}</span>

 </div>
);
*/