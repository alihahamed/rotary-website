import Hero from "../components/hero"
import AboutUs from "../components/aboutUs"
import Courses from "../components/courses"
import Facilities from "../components/facilities"
import News from "../components/news"

function Home() {
    return(
        <>
            <Hero />
            <AboutUs />
                <Courses />
            <Facilities />
            <News />
            
        </>
        
    )
}   

export default Home