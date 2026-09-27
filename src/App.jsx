import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ItemDetail from './pages/ItemDetail'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ItemDetail kind="project" />} />
        <Route path="/fundraisers/:slug" element={<ItemDetail kind="fundraiser" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
