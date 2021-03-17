import React from 'react'

const Image = (props) => {
    return (
        <img key={props.element.images.original.url} src={`${props.element.images.original.url}`} alt="loading" />
    )
}

export default Image