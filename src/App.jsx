import { useState } from 'react'
import FirstPage from './FirstPage/Firstpage'
import Landingpage from './LandingPage/Landingpage'
import AboutPage from './AboutPage/AboutPage'
import Skillpage from './SkillPage/Skillpage'
import Cyber from './CyberSecurityPage/Cyber'
import Projectpage from './ProjectPage/Projectpage'
import Certpage from './CertsPage/Certpage'
import Roadmap from './RoadmapPage/Roadmap'
import Resume from './ResumePage/Resume'
import Lastpage from './LastPage/Lastpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <FirstPage />
      <Landingpage />
      <AboutPage />
      <Skillpage />
      <Cyber />
      <Projectpage />
      <Roadmap />
      <Resume />
      <Lastpage />
    </>
  )
}

export default App
