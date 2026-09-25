import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Publications from './pages/Publications.jsx'
import Serial from './pages/Serial.jsx'
import About from './pages/About.jsx'
import Archive from './pages/Archive.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <main key={location.pathname} className="page-enter min-h-[70vh]">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<Serial />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Pages />
      <Footer />
    </BrowserRouter>
  )
}
