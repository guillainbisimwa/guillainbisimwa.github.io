import React, { Component } from 'react';
import Blogs from './components/layout/blogs/Blogs';
import Contact from './components/layout/Contact/Contact';
import Main from './components/layout/Main/Main';
import NavBar from './components/layout/navigation/NavBar/NavBar';
import Projects from './components/layout/projects/Projects';
import Skils from './components/layout/skils/Skils';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className='container'>
          <Main />
          <Skils />
          <Projects />
          <Blogs />
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;
