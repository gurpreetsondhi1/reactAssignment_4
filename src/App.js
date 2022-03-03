import logo from './logo.svg';
import './App.css';
import Main from './project/Main.js';
import Student from './project/Student.js';
import Contact from './project/Contact.js';
import Home from './project/Home.js';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Main />
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Student' element={<Student/>} />
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
