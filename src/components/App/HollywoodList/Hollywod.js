import React, { Component } from 'react';

class HollywoodList extends Component {
    constructor(props){
        super(props);
        this.state = {star: {name: 'Sean Bean', known: 'Always Dieing'} }
    }

    handleChange = (propertyName) => (event) => {
        console.log(propertyName);
        this.setState({star: {
            ...this.state.star,
            [propertyName]: event.target.value
        }})
    }

    logName = () => (event) => {
        console.log(this.state.star.name);
    }


    render(){
        return(
            <div>
                <h1>Hollywood</h1>
                <input placeholder="Celebrity" onChange={this.handleChange('name')} />
                <input placeholder="Known For" onChange={this.handleChange('known')} />
                <h2>Name: {this.state.star.name}</h2>
                <h3>Known For: {this.state.star.known}</h3>
                <button onClick={this.logName()}>Click me to console.log</button>
            </div>
        );
    }






}
export default HollywoodList;