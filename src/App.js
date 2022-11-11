import "./App.css"
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export default function App() {
return (
    <BrowserRouter>
    <div>
    </div>
    <div>
      <nav className="App header">
        <NavLink to='Adriana-portfolio-react'>About</NavLink>
        <NavLink to='portfolio'>Portfolio</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='resume'>Resume</NavLink>
      </nav>
      <Routes>
        <Route path='Adriana-portfolio-react' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
         <Route path=':id' element={<Project />} />
      </Routes>
    </div>
    </BrowserRouter>
);
}