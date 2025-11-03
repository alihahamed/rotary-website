import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function Hero() {
    const handleExploreCampus = () => {
        const element = document.getElementById('campusLocation');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/campus-rotory.webp"
            alt="Rotary PU College Campus"
            className="w-full h-full object-cover"
            fetchPriority='high'
            loading='eager'
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 sm:from-blue-900/80 to-maroon-900/50 sm:to-maroon-900/60 backdrop-blur-sm"></div>
          {/* Black Overlay for Better Readability */}
          {/* <div className="absolute inset-0 bg-black/60 sm:bg-black/50 lg:bg-black/40"></div> */}

        </div>
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center justify-center sm:justify-start">

          <motion.div
            className="relative text-white max-w-3xl z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.h1
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 font-merri drop-shadow-lg tracking-wide text-center sm:text-left"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              Welcome to <br className="hidden sm:block" />  <span className="text-yellow-400 drop-shadow-md">Rotary Pre University College, <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Moodbidri</span></span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 font-nuno drop-shadow-md font-medium sm:font-bold text-center sm:text-left leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              Your journey to academic success begins here. Experience quality education, supportive mentors, and a dynamic campus life that prepares you for a bright future.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
            >

              <Link
                to={"/admissions/apply"}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-nuno font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 text-base sm:text-lg text-center w-40 sm:w-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
               Apply Now
              </Link>

              <motion.button
                onClick={handleExploreCampus}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl shadow-lg hover:bg-white hover:text-blue-800 transition-all duration-300 text-base sm:text-lg w-40 sm:w-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                Explore Campus
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
    
}

export default Hero
