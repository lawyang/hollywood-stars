import React, { Component } from 'react';
import Star from '../Star/Star';

class HollywoodList extends Component {
    render(){
        return(
            <div>
                <p>{ this.props.hollywoodList.map( star => <Star star={star} />) }</p>
            </div>
        );
    }
}
export default HollywoodList;