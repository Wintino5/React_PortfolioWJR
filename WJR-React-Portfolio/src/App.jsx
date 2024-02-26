import { useState } from 'react'
import React from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  const [page, setPage] = useState('aboutme')
  return (
    <>
        <Header page={page} setPage={setPage} />
        <main>
          {page === 'aboutme' && <AboutMe/>}
          {page === 'work' && <Work/>}
          {page === 'contact' && <Contact/>}
        </main>      
    </>
  )
}

export default App
