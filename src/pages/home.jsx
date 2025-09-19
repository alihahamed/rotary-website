import Hero from "../components/hero"
import AboutUs from "../components/aboutUs"
import Courses from "../components/courses"
import Facilities from "../components/facilities"
import News from "../components/news"
import Achievements from "../components/achievements"

function Home() {
    return(
        <>
            <Hero />
            <AboutUs />
                <Courses />
            <Facilities />
            <News />
            <Achievements />
            
        </>
        
    )
}   

export default Home