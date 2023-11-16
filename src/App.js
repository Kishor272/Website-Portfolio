import React from 'react'
import Layouts from './components/Layouts'
import './App.css'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='App'>
     <Layouts/>
     <About/>
     <Education/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
