import { Box } from '@mui/material'
import './App.css'
import Header from './components/header/Header'
import { Outlet,useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {
  
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header/>
      <Box sx={{mt:9}}>
        {/* <Outlet/> */}
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </Box>
    </>
  )
}

export default App
