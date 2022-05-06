import React from 'react'

const InputWithLabel = ({ id, value, onChange, type = 'text' }) => (
    <>
        <input id={id} type={type} value={value} onChange={onChange} />
    </>
)

export default InputWithLabel;
