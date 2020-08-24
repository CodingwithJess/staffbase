import React from 'react';
import Main from './components/Main/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header/Header';
// import logo from './logo.svg';
import './App.css';
// main setup on app visually
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
    </div>
    );
}

export default App;
