
import React from 'react'

function List(props) {

    return (
        props.list.map(story => (
            <div key={story.objectID}>
                <span>
                    <a href={story.url}>{story.title}</a>
                </span>
                <span>{story.author}</span>
                <span>{story.num_comments}</span>
                <span>{story.points}</span>
            </div>
        )
        )
    );
}

export default List;