import Navbar from '../components/Navbar/Navbar.jsx'
import Contact from '../components/Contact/Contact.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar />
    <main>
    <Outlet />
    </main>
    <Contact />
    </>
  )
}

export default MainLayout