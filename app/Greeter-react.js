// new.js
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.newText}
      </div>
    );
  }
}

export default Greeter