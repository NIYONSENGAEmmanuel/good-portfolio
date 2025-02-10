import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./compnents/Home"
import About from "./compnents/About"
import Skills from "./compnents/Skills"
import Navbar from "./compnents/Navbar"
import Contact from "./compnents/Contact"
import NotFound from "./pages/NotFound"
import Cv from './compnents/Cv'
const App = () => {
  return (
  <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cv"  element={<Cv/>}/>
      </Routes>
  </Router>
  )
}
export default App