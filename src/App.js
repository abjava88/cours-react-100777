import logo from './logo.svg';
import './App.css';
import Title from './components/ch03/Title';
import Button from './components/ch03/Button';
import Form from './components/ch03/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div>
          <Button />
        </div>
          <Form />
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
  );
}

export default App;
