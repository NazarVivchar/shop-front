import React, {Component} from "react";

class MainPage extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <h1> Main Page</h1>
        )
    }
}

export default MainPage;