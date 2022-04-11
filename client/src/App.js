import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

/*function App() {
  return (
    <>
   
    <Home/>
    <Section1/>
    <Section2/>
    
    <Login/>
    <Register/>
    </>
  );
}
*/
export default App;
