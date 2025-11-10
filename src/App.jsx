
import './App.css'
import Header from './components/navbar'
import Hero from './components/hero'
import AboutUs from './components/aboutUs'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Footer from './components/footer'
import ReactLenis from 'lenis/react'

const Home = lazy(() => import('./pages/home'))
const AboutUsPage = lazy(() => import('./pages/aboutUsPage'))
const CoursesPage = lazy(() => import('./pages/CoursesPage'))
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'))
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'))
const AdmissionProcedurePage = lazy(() => import('./pages/AdmissionProcedurePage'))
const ApplyPage = lazy(() => import('./pages/ApplyPage'))
const ResultsPage = lazy(() => import('./pages/ResultsPage'))

function App() {
  return (
    <>
    <ReactLenis
    
      root options={
        {
          lerp:0.5,
          duration:0.9,
          orientation:'vertical',
          gestureOrientation:'vertical',
          smoothWheel:true,
          wheelMultiplier:1,
          touchMultiplier:1,
          syncTouch:true,
          anchors:true,
          syncTouchLerp:0.085
        }
      }
    >
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
          <Route path='/admissions/procedure' element={<AdmissionProcedurePage />}></Route>
          <Route path='/admissions/apply' element={<ApplyPage />}></Route>
          <Route path='/admissions/results' element={<ResultsPage />}></Route>
        </Routes>
        
      </Suspense>
      <Footer />
      </ReactLenis>
    </>
  )
}

export default App
