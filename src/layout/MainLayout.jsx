import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout