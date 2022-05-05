import React from 'react'

// Search({ search, onSearch }) 
export const Search = ({ searchTerm, search }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={searchTerm} onChange={search} />
  </>
);

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