import React from 'react';
import SignUpForm from './SignUpForm';
import BookTitle from './BookTitle';
import About from './About'
import Blurb from './Blurb'

class App extends React.Component {

  render() {
    return (
      <div>
        <BookTitle/>
        <SignUpForm/>
        <Blurb/>
        <About/>
      </div>
    );
  }
}

export default App;
