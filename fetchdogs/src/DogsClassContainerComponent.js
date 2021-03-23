import React, { Component } from 'react'
import DogsFunctionalPresentationalParentComponent from './DogsFunctionalPresentationalParentComponent'

// fetches data with lifecycle method and handles state for all child components
class DogsClassContainerComponent extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        // fetch('./data.json')
        fetch('https://api.giphy.com/v1/gifs/search?q=dogs&api_key=cwxQISXRJJ5EO5nAW0kfohP1RSmK2PSE&rating=g')
            .then(response => response.json())
            .then(json =>
                this.setState({
                    dogs: json.data
                })
            )
    }

    render() {
        return (
            <DogsFunctionalPresentationalParentComponent dogs={this.state.dogs}/>
        )
    }
}

export default DogsClassContainerComponent