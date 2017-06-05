/**
 * File: component.js
 * Date: 4.2.2017
 * Author: Janne Hämäläinen
 * Twitter: @JanneHamalainen
 */

import React, {Component} from 'react';

// The ES6+ way
export default class MyComponent extends Component {

  static defaultProps = {
    message: 'Hello',
    name: 'John!'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.message}, {this.props.name}!!!!</h1>
    );
  }
}



