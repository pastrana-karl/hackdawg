import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dummy from './Pages/Dummy/Dummy';
import Signup from './Pages/Signup/Signup';
import './App.css';

// Authors: De Leon, Jaymie Anne P. & Pastrana, Karl Anjelo D. || Section: 4ITC

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = { <Login/> } />
        <Route path = '/dummy' element = { <Dummy /> } />
        <Route path = '/signup' element = { <Signup /> } />
      </Routes>
    </Router>
  );
}

export default App;
