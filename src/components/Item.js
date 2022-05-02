import React from 'react'

function Item(props) {
    
    const {objectID,url, title, author,num_comments,points} = props.item;

    return (
        <div key={objectID}>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
        </div>
    )
}

export default Item; 
