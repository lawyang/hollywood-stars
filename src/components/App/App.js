import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import HollywoodList from '../App/HollywoodList/Hollywod';
import NewStar from '../App/NewStar/NewStar';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {star: {
        name: 'Sean Bean', known: 'Dying onscreen'}, 
        starList: [] }
  }

  handleChange = (propertyName) => (event) => {
    console.log(propertyName);
    this.setState({star: {
        ...this.state.star,
        [propertyName]: event.target.value
    }
  })
  }

  logName = () => (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({starList: [...this.state.starList, this.state.star]})
    this.setState({ star: {name: '', known: ''} });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <HollywoodList hollywoodList = {this.state.starList}/>
        <NewStar newStar = {this.state.star}
                 handleChange={this.handleChange}
                 logName={this.logName}/>
      </div>
    );
  }
}

export default App;
