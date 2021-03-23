import React from 'react'

// stateless management of presentation layer for single component given title and image_url
const DogsFunctionalPresentationalChildComponent = ({ title, image_url }) => {
    return (
        <>
            <div>{title}</div>
            <img key={image_url} src={`${image_url}`} alt="loading" />
        </>
    )
}

export default DogsFunctionalPresentationalChildComponent