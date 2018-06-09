import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <Header/>
      <Container/>
    <hr/>

    <Footer/>
    
      </div>
    );
  }
}

export default App;
