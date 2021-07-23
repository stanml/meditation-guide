import './App.css'
import React from 'react';
import BookInfo from './BookInfo';
import About from './About'

class App extends React.Component {

  render() {
    return (
      <div className="ui container; main-body">
        <BookInfo/>
        <About/>
      </div>
    );
  }
}

export default App;
