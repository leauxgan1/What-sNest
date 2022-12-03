import AddButton from './components/AddButton';
import './App.css';
import React from 'react';
import Signup from './components/Signup';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="" >Sign Up/In</a></li>
          
        </ul>
      </nav>
      <header className="App-header">
        <h1>What's Nest</h1>
      </header>
      <AddButton />
    </div>
  );
}

export default App;
