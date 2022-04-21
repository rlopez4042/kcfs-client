import { Route, Routes, Navigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Introduction from './components/Introduction/Introduction';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Task from "./components/Task/Task";
import Overview from "./components/Overview/Overview";
import Register from './components/Register/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Routes>
        {/* {user && <Route path="/buzz-kill-client" exact element={<Main />} />} */}
        <Route path="/landingPage" exact element={<LandingPage />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/task" exact element={<Task />} />
        <Route path="/introduction" exact element={<Introduction />} />
        <Route path="/overview" exact element={<Overview />} />
        <Route
          path="/landingPage"
          element={<Navigate replace to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
