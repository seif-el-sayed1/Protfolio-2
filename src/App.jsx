import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { AppContext } from './context/AppContext' 
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  const { sideBar } = useContext(AppContext)

  // useEffect(() => {
  //   fetch('https://stadiumeye-backend-b6fq.onrender.com')
  //     .then(res => res.json())
  //     .then(data => console.log('Response from backend:', data))
  //     .catch(err => console.error('Error fetching backend:', err))
  // }, [])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <div className={`flex duration-500 border-1 mb-5 border-white mt-3 rounded-lg mr-5 md:mx-15 ${sideBar ? "ml-20" : "ml-5"}`}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
