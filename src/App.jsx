import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/Apple-Iphone-15-website" element={
          <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
            <Model />
            <Features />
            <HowItWorks />
            <Footer />
          </main>
        } />
      </Routes>
    </Router> 
  )
}

export default App
