import logo from './logo.svg';
import './App.css';
import Title from './components/ch03/Title';
import Button from './components/ch03/Button';
import Form from './components/ch03/Form';
import Title1 from './components/ch03/Title1';
import Title2 from './components/ch03/Title2';
import Title3 from './components/ch03/Title3';

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

        <Title1 />
        <Title2 title="React.js" author="Abbes"/>
        <Title2 title="Javascript Moderne" author="Abbes"/>
        <Title3 title="Nodejs" author= "Abbes" />
      </header>
    </div>
  );
}

export default App;
