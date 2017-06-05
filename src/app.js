/**
 * File: index.js
 * Date: 4.2.2017
 * Author: Janne Hämäläinen
 * Twitter: @JanneHamalainen
 */


import React from 'react';
import MyComponent from './component.js';
import ReactDOM from 'react-dom';

ReactDOM.render(<MyComponent message="Hello" name="World"/>, document.getElementById('mount-point'));




