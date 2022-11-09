import React from "react";
import About from "./About"
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Project from "./Project";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <BrowserRouter>
    <div>
    </div>
    <div>
      <nav className="App header">
        <NavLink to=''>About</NavLink>
        <NavLink to='portfolio'>Portfolio</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='resume'>Resume</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
         <Route path=':id' element={<Project />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default Navigation;