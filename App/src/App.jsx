import Navbar from "./Components/Nav/Navbar"
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Teams from './Components/Teams/Teams'
import Events from './Components/Events/Events'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home />
      <Services />
      <Teams />
      <Events />
      <Gallery />
      <Footer />
    </BrowserRouter>
  )
}

export default App
