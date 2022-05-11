import logo from '../logo.svg';
import { useEffect } from 'react';

const Home = () => {
  console.log('render home');
  useEffect(() => {
    console.log('useEffect home');
  }, []);
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
};

export default Home;
