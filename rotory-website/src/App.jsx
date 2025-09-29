
import './App.css'
import Header from './components/navbar'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AboutUsPage from './pages/aboutUsPage'
import CoursesPage from './pages/CoursesPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUsPage />}></Route>
        <Route path='/courses' element={<CoursesPage />}></Route>
      </Routes>
    </>   
  )
}

export default App
