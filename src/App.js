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
        {/* Path for the the login page */}
        <Route exact path='/' element={<Login />} />

        {/* Path for the dummy page */}
        <Route path='/dummy' element={<Dummy />} />

        {/* Path for the signup page */}
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
