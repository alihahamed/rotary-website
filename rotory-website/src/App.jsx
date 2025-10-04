
import './App.css'
import Header from './components/navbar'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/home'))
const AboutUsPage = lazy(() => import('./pages/aboutUsPage'))
const CoursesPage = lazy(() => import('./pages/CoursesPage'))
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'))
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div></div>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUsPage />}></Route>
          <Route path='/courses' element={<CoursesPage />}></Route>
          <Route path='/why-choose-us' element={<WhyChooseUsPage />}></Route>
          <Route path='/news-events' element={<NewsEventsPage />}></Route>
          <Route path='/gallery' element={<GalleryPage />}></Route>
          <Route path='/admissions' element={<AdmissionsPage />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
