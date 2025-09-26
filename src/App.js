import logo from "./logo.svg";
import "./App.css";
import Title from "./components/ch03/Title";
import Button from "./components/ch03/Button";
import Form from "./components/ch03/Form";
import Title1 from "./components/ch03/Title1";
import Title2 from "./components/ch03/Title2";
import Title3 from "./components/ch03/Title3";
import Book1 from "./components/ch03/Book1";
import ColoredBook from "./components/ch03/ColoredBook";
import Profile from "./components/ch03/Profile";
import { Book2 } from "./components/ch03/Book2";
import TodayDate from "./components/ch03/TodayDate";
import Counter from "./components/ch04/Counter";
import PageCounter from "./components/ch04/PageCounter";
import ToggleLight from "./components/ch04/ToggleLight";
import ToggleLightPlus from "./components/ch04/ToggleLightPlus";
import Counter2 from "./components/ch04/Counter2";
import DataFetcher from "./components/ch04/DataFetcher";
import UserProvider from "./components/ch04/UserProvider";
import UserInfo from "./components/ch04/UserInfo";
import UserControls from "./components/ch04/UserControls";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/ch05/Home";
import About from "./components/ch05/About";
import Contact from "./components/ch05/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataFetcher />
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
        <Title2 title="React.js" author="Abbes" />
        <Title2 title="Javascript Moderne" author="Abbes" />
        <Title3 title="Nodejs" author="Abbes" />
        <Book1>
          <Title3 title="Composant enfant" author="Alex" />
          <Title3 title="Composant enfant" author="Alex" />
          <Title2 title="Javascript Moderne" author="Abbes" />
        </Book1>
        <ColoredBook color="red">
          <Title2 title="ColoredBook" author="Abbes" />
        </ColoredBook>
        <ColoredBook color="green">
          <Title2 title="ColoredBook" author="Abbes" />
        </ColoredBook>
        <Profile />
        <Book2 isNew={true}>
          <Title3 title="New book 1" author="Jason" />
        </Book2>
        <Book2 isNew={false}>
          <Title3 title="Old book 1" author="Jason" />
        </Book2>
        <TodayDate locale="fr-FR" />
        <Counter />
        <PageCounter />
        <ToggleLight />
        <ToggleLightPlus />
        <Counter2 />
        <UserProvider>
          <UserInfo />
          <UserControls />
        </UserProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Link to="/contact">
              <button>Go to Contact</button>
            </Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
