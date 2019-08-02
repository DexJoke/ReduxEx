import React, {Component} from 'react';
import Point from "./container/Point";
import UpPoint from "./container/UpPoint";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            point: 0
        }
    }

    setPoint = () => this.setState({point: this.state.point + 1})

    render() {
        return (
            <div className="App">
                <Point point={this.state.point}/>
                <UpPoint upPoint={this.setPoint}/>
            </div>
        );
    }
}

export default App;
