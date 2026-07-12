import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Styles from './Layout.module.css'


function Layout() {
  return (
    <main className= {Styles.layout}>
     <Navbar />
     <Outlet/>
     <Footer/>
    </main>
  )
}

export default Layout
