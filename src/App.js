import React, { Component } from 'react';
import Main from './components/layout/Main/Main';
import NavBar from './components/layout/navigation/NavBar/NavBar';
import Skils from './components/layout/skils/Skils';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className='container'>
          <Main />
          <Skils />
        </section>
      </div>
    );
  }
}

export default App;
