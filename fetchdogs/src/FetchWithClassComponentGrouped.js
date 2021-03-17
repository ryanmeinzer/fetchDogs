import React, { Component } from 'react'

class FetchWithClassComponent extends Component {

    state = {
        dogsData: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dogs&api_key=cwxQISXRJJ5EO5nAW0kfohP1RSmK2PSE&rating=g')
            .then(response => response.json())
            .then(json =>
                this.setState({
                    dogsData: json.data
            })
        )
    }
    render() {
        return (
            <>
                {this.state.dogsData.map(element =>
                    <div>
                        <div>{element.title}</div>
                        <img key={element.images.original.url} src={`${element.images.original.url}`} alt="loading" />
                    </div>
                )}
            </>
        )
    }
}

export default FetchWithClassComponent