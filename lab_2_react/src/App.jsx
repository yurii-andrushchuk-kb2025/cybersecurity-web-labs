import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
