import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CircleOfCare from './components/CircleOfCare'
import Objectives from './components/Objectives'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Partners from './components/Partners'
import Support from './components/Support'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <CircleOfCare />
        <Objectives />
        <Gallery />
        <Team />
        <Partners />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
