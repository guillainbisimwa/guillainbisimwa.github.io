import React, { Component } from 'react';
import Main from './components/layout/Main/Main';
import NavBar from './components/layout/navigation/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className='container'>
          <Main />
        </section>
      </div>
    );
  }
}

export default App;
