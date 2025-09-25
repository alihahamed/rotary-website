
import './App.css'
import Header from './components/navbar'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>   
  )
}

export default App
