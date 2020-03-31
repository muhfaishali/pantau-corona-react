import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainApp extends Component {


    render() {
        return (
            <h1>Under Contruction!</h1>
        )
    }
}

const mtp = ({}) => {
    return {}
}

export default connect(mtp, {}) (MainApp);