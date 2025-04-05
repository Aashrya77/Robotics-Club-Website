import Navbar from "./Components/Nav/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Teams from './Components/Teams/Teams'
import Events from './Components/Events/Events'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'
import Maintenance from './Components/Maintenance/Maintenance'
import SinglePage from "./Components/Teams/SinglePage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <Teams />
            <Events />
            <Gallery />
          </>
        } />
        <Route path="/teams" element={<SinglePage />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
