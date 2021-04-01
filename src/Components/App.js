import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '.././App.css';
import RedirectURL from './Router/RedirectURL';

class App extends Component {
  
  render() {
    return (
        <Router >
          <div>
            <RedirectURL/>
          </div>
        </Router> 
    );
  }
}

export default App;
