import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyUs from './components/WhyUs'
import Transformations from './components/Transformations'
import Testimonials from './components/Testimonials'
import FoodGallery from './components/FoodGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <WhyUs />
      <Transformations />
      <Testimonials />
      <FoodGallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
