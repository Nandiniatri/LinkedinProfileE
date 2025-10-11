import { Route, Routes } from 'react-router-dom'
import './App.css'
import LinkedinProfileExplore from './linkedinProfileExplore/LinkedinProfileExplore'
import LoginPage from './linkedinProfileExplore/login/LoginPage'
import SkillChecker from './practical/Practical'
import ProfileImageChecker from './practical/profile'
import LinkedInLinkPastePage from './linkedinProfileExplore/linkedInLinkPaste/LinkedInLinkPastePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LinkedinProfileExplore />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/linkedinLink" element={<LinkedInLinkPastePage />} />
      </Routes>

      {/* <SkillChecker /> */}
      {/* <ProfileImageChecker /> */}
    </>
  )
}

export default App
