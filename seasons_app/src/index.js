import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null, erroMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ erroMessage: err.message })

        )
    }

    renderContent() {
        if (this.state.erroMessage && !this.state.lat) {
            return <div>Error: {this.state.erroMessage} </div>
        }

        if (!this.state.erroMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }


        return <Spinner message="Please accept location request"/>
    }

    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));