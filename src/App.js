import React, { Component } from 'react';
import Header from './header/header';
import OperationsTable from './operationsTable/operationsTable'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OperationsTable />
      </div>
    );
  }
}

export default App;
