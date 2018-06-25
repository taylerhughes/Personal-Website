import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Testimonial from './components/Testimonial/Testimonial.js';
import Footer from './components/Footer/Footer.js';
import Clients from './components/Clients/Clients.js';
import './foundation.css';

class App extends Component {
  render() {
    function getQueryVariable(variable)
    {
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] === variable){return pair[1];}
           }
           return(false);
    }
    const name = getQueryVariable('name');
    let string = "there"
    if (name) {
      string = String(name);
    }
    if (string.includes('%20')) {
      string = string.replace("%20", " ");
    }
    return (
      <div className="App grid-container">
        <Header>
          <Hero name={string} />
        </Header>
        <Clients />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
