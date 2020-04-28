import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = {
        latitude: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            positionError => this.setState({errorMessage: positionError.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        }

        return <Spinner message="Please allow browser access to your location."/>
    }

    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));