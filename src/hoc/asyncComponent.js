import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
            .then( cmpntn => {
                this.setState({component: cmpntn.default});
            });
        }

        render() {
            const COMPONENT = this.state.component;

            return COMPONENT ? <COMPONENT {...this.props} /> : null;
        }
    }
    
}

export default asyncComponent;