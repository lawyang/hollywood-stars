import React, { Component } from 'react';

class NewStar extends Component {
    render(){
        return(
            <div>
                <h1>Hollywood</h1>
                <form onSubmit={ this.props.logName() }>
                    <input value={ this.props.newStar.name } placeholder="Celebrity" onChange={ this.props.handleChange('name') } />
                    <input value={ this.props.newStar.known } placeholder="Known For" onChange={ this.props.handleChange('known') }  />
                    <input type="submit" value="Add" />
                </form>
                    <h2>Name: { this.props.newStar.name}</h2>
                    <h3>Known For: { this.props.newStar.known }</h3>
            </div>
        )
    }
}

export default NewStar;