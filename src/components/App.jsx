import React from 'react';
import '../styles/App.css'
import LoginPageComponent from './LoginPageComponent';
//import HomePage from './Home-Page';
//import '../styles/Home-Page.css'


function App() {
  return (
    <>
      <div className="components-container">
        <LoginPageComponent/>
      </div>
      {/* <div className="components-container">
        <HomePage />
      </div> */}

    </>
  )
}
export default App
