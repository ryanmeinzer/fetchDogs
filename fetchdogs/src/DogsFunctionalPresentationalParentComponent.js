import React from 'react'
import DogsFunctionalPresentationalChildComponent from './DogsFunctionalPresentationalChildComponent'

// stateless management of presentational layer for multiple components given dogs prop
const DogsFunctionalPresentationalParentComponent = ({ dogs }) => {
    return (
        <>
            {dogs.map(dog =>

                    <DogsFunctionalPresentationalChildComponent title={dog.title} image_url={dog.images.original.url} />

            )}
        </>
    )
}

export default DogsFunctionalPresentationalParentComponent