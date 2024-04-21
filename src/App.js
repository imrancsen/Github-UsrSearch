import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  const [user, setUser] = useState('')
  const [username, setUsername] = useState('')

  const startSearch = () => {
    const url = `https://api.github.com/users/${username}`
    fetch(url)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch((e) => alert(e));
    setUsername('')
  }

  return (
    <div className='Container'>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/search' element={<Search username={username} setUsername={setUsername}
            startSearch={startSearch} user={user} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App
