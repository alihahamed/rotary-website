import Hero from "../components/hero"
import AboutUs from "../components/aboutUs"
import Courses from "../components/courses"
import Facilities from "../components/facilities"
import News from "../components/news"
import Achievements from "../components/achievements"
import Testimonials from "../components/testimonials"
import Accordian from "../components/accordian"
import AdmissionBanner from "../components/admissionBanner"

function Home() {
    return(
        <>
            <Hero />
            <AboutUs />
                <Courses />
            <Facilities />
            <News />
            <Achievements />
            <Testimonials />
            <Accordian />
            <AdmissionBanner />
        </>
        
    )
}   

export default Home