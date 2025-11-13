import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Medical from './pages/Medical'
import NonMedical from './pages/NonMedical'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/non-medical" element={<NonMedical />} />
        {/* future routes: add here */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
