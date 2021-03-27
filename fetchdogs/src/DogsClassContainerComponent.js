import React, { Component } from 'react'
import DogsFunctionalPresentationalParentComponent from './DogsFunctionalPresentationalParentComponent'

// fetches data with lifecycle method and handles state for all child components
class DogsClassContainerComponent extends Component {
    state = {
        dogs: [],
        // loading: false
    }

    componentDidMount() {
        // this.setState({loading: true})
        // fetch('./data.json')
        fetch('https://api.giphy.com/v1/gifs/search?q=dogs&api_key=cwxQISXRJJ5EO5nAW0kfohP1RSmK2PSE&rating=g')
            .then(response => response.json())
            .then(json =>
                this.setState({
                    dogs: json.data,
                    // loading: false
                })
            )
    }

    // handle fetch upon app load with loading message if still loading
    // handleLoading = () => {
    //     if (this.state.loading) {
    //         return <div>Loading...</div>
    //     } else {
    //         return <div>{Object.values(this.state.dogs[0])[0]}</div>
    //     }
    // }

    render() {
        return (
            // for either of these to work, state cannot initally be null as Object.values() conversion will occur before ComponentDidMount
            // <>
            //     {this.handleLoading()}
            //     {Object.values(this.state.dogs[0])[0]}
            // </>
            <DogsFunctionalPresentationalParentComponent dogs={this.state.dogs}/>
        )
    }
}

export default DogsClassContainerComponent