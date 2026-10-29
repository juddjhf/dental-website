import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function SiteLayout() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const openAppointment = useCallback(() => setAppointmentOpen(true), [])
  const closeAppointment = useCallback(() => setAppointmentOpen(false), [])

  return (
    <div className="app-shell">
      <Navbar onBook={openAppointment} />
      <main><Outlet context={{ onBook: openAppointment }} /></main>
      <Footer onBook={openAppointment} />
      <AppointmentModal isOpen={appointmentOpen} onClose={closeAppointment} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
