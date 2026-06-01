import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SurveyPage from './components/SurveyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surveypage" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
