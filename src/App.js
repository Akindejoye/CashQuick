import React, { Component } from 'react';
import CreateAcc from './components/createAcc';
import ForgetPassword from './components/ForgetPassword';
import Login from './components/Login';
import Paswrdreset from './components/Paswrdreset';
import Rootlogin from './components/Rootlogin';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Rootlogin />
        {/* <Login />
        <Paswrdreset />
        <ForgetPassword />
        <CreateAcc /> */}
      </div>
    );
  }
}
 
export default App;


