import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartDialog from "./components/chart/ChartDialog";

class App extends Component {
  render() {
    return (
      <div className="App">
          <ChartDialog/>
      </div>
    );
  }
}

export default App;
