import React  from 'react'
import './App.css'
import { Link, Element } from 'react-scroll';
import Navigation from './components/Navigation/Navigation.jsx'
import Home from './pages/HomePage/Home.jsx'
import About from './pages/AboutPage/About.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Project from './pages/Projects/Project.jsx';

function App() {

  return (
    <div>
       <Navigation />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="project"><Project /></Element>
      <Element name="contact"><Contact /></Element>
     
    </div>
  )
}

export default App
