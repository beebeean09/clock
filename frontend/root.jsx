import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';



class Root extends React.Component {
  render() {
    return(
      <div>
        React is up and running!
        <Clock />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
