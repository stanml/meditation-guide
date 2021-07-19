import React from 'react';
import SignUpForm from './SignUpForm';

class App extends React.Component {

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SignUpForm/>
      </div>
    );
  }
}

export default App;
