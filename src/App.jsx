import { Route, Routes } from 'react-router-dom'
import './App.css'
import LinkedinProfileExplore from './linkedinProfileExplore/LinkedinProfileExplore'
import LoginPage from './linkedinProfileExplore/login/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LinkedinProfileExplore />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
