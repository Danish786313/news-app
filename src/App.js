import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  c = 'john'
  render() {
    return (
      <div>
        <NavBar />
        <News />
        {/* <button className='btn btn-primary'>hi</button> */}
        Hello my class based component {this.c}

      </div>
    )
  }
}
