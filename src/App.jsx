import React  from 'react'
import './App.css'
import { Link, Element } from 'react-scroll';
import Navigation from './components/Navigation/Navigation.jsx'
import Home from './pages/HomePage/Home.jsx'
import About from './pages/AboutPage/About.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Project from './pages/Projects/Project.jsx';
import Education from './pages/EducationPage/Education.jsx';
import Skill from './pages/AboutPage/Skill.jsx';

function App() {

  return (
    <div>
       <Navigation />
      <Element name="home"><Home /></Element>
      <Element name="about"><About/></Element>
      <Element name="skill"><Skill/></Element>
      <Element name="project"><Project /></Element>
      <Element name="education"><Education /></Element>
      <Element name="contact"><Contact /></Element>
     
    </div>
  )
}

export default App
