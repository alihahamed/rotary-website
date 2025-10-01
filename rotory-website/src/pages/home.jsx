import { useEffect, Suspense, lazy } from 'react';
import TopAnnouncement from "../components/TopAnnouncement"
import Hero from "../components/hero"

// Lazy load heavy components
const AboutUs = lazy(() => import("../components/aboutUs"));
const Courses = lazy(() => import("../components/courses"));
const Facilities = lazy(() => import("../components/facilities"));
const News = lazy(() => import("../components/news"));
const Achievements = lazy(() => import("../components/achievements"));
const Testimonials = lazy(() => import("../components/testimonials"));
const Accordian = lazy(() => import("../components/accordian"));
const AdmissionBanner = lazy(() => import("../components/admissionBanner"));
const AdmissionForm = lazy(() => import("../components/admissionForm"));
const Footer = lazy(() => import("../components/footer"));
const Location = lazy(() => import("../components/location"));

function Home() {
    useEffect(() => {
        
        const hash = window.location.hash;
        if (hash === '#home') {
            const element = document.getElementById('home');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, []);
    return(
        <>
            <TopAnnouncement  />
            <Hero />
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <AboutUs />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Courses />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Facilities />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <News />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Achievements />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Accordian />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <AdmissionBanner />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <AdmissionForm />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Location />
            </Suspense>
            <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <Footer />
            </Suspense>
        </>

    )
}   

export default Home
