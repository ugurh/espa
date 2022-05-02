
import React from 'react'
import Item from './Item'

function List(props) {
    return props.list.map(item =>   <Item item={item} /> )
}

export default List;