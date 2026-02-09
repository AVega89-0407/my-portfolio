import MainLayout from './layout/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import ProjectsPage from './pages/project/ProjectsPage.jsx'
import ContactPage from './pages/Contact/ContactPage.jsx'

import './App.css'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/projects' element={<ProjectsPage />} />
    <Route path='/contact' element={<ContactPage />} />
    </Route>
    </Routes>
   </>
  )
}

export default App
