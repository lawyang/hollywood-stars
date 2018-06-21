import React, { Component } from 'react';

class Star extends Component {
    render(){
        return(
            <li key={this.props.star.name}>
                {this.props.star.name} is known for {this.props.star.known}
            </li>
        )
    }
}

export default Star;