import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Books from './pages/Books'
// import Add from './pages/Add'
// import Update from './pages/Update'
import './style.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import TransitionEffect from './components/TransitionEffect'
import { AnimatePresence } from 'framer-motion'



const App = () => {
  return (
    <div className='bg-white px-4 font-Montserrat'>
      <TransitionEffect />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App



/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
</BrowserRouter> */