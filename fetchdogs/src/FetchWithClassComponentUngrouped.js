import React, { Component } from 'react'

class FetchWithClassComponentUngrouped extends Component {

    state = {
        titles: [],
        imagesOriginalUrls: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dogs&api_key=cwxQISXRJJ5EO5nAW0kfohP1RSmK2PSE&rating=g')
            .then(response => response.json())
            .then(json =>
                this.setState({
                    // titles: json.data
                    titles: json.data.map(element => element.title),
                    imagesOriginalUrls: json.data.map(element => element.images.original.url)
            })
        )
    }
    render() {
        return (
            <>
                {/* {this.state.titles.map(element => <div>{element.title}</div>)} */}
                {this.state.titles.map(element => <div>{element}</div>)}
                {this.state.imagesOriginalUrls.map(element => <img key={element} src={`${element}`} alt="loading" />)}
            </>
        )
    }
}

export default FetchWithClassComponentUngrouped