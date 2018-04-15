import React, { Component } from 'react';
import Header from './Header/Header';
import Statistic from './Statistic/Statistic';
import Comments from './Comments/Comments';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <Header />
          <Statistic />
          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
