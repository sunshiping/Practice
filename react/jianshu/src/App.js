import React, { Component } from 'react';
import {
  GlobalStyle,
  Logo
} from './style.js'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Logo href="/"/> 等同于 <Logo/> href样式里的设置*/}
        <Logo/> 
        hello world
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
