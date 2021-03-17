import React, {Component} from 'react'
import Title from './Title'
import Image from './Image'

class FetchWithClassComponentGroupedComponents extends Component {

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
                        <Title element={element}/>
                        <Image element={element}/>
                    </div>
                )}
            </>
        )
    }
}

export default FetchWithClassComponentGroupedComponents