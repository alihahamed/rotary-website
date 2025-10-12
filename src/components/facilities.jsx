
import { Link } from 'react-router-dom'
import library from '../assets/library.webp'
import sports from '../assets/sports.webp'
import midDay from '../assets/mid-day.webp'
import culturalEvent from '../assets/cultural-event.webp'
import { motion } from 'framer-motion'

function Facilities() {

  return (
    <section className="relative bg-amber-50 py-15 px-8 overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3Ccircle cx="13" cy="13" r="1"/%3E%3C/g%3E%3C/svg%3E")' }} />

      {/* Header */}
      <div className="text-center mb-9">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-merri font-bold text-gray-900 mb-4 tracking-wide">
          Facilities & Campus Life
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-900 mx-auto mt-4 mb-7"></div>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-nuno font-medium max-w-3xl mx-auto leading-relaxed">
          Explore the resources and activities that make learning at Rotary PU College vibrant and engaging.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto relative ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >

          {/* Sports & Athletics - Large Card */}
          <motion.div
            className="relative col-span-1 row-span-1 xl:col-span-1 xl:row-span-2 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="relative h-full min-h-[400px] xl:min-h-[500px]">
              <img src={sports} alt="Sports & Athletics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              {/* Icon in top-left */}
              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8.5L9.5 12L6 15.5M18 12H10M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 22V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Title */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-white text-2xl md:text-3xl font-merri font-bold drop-shadow-lg">
                  Sports & Athletics
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Cultural Events - Medium */}
          <motion.div
            className="relative col-span-1 row-span-1 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
            }}
          >
            <div className="relative h-[250px]">
              <img src={culturalEvent} alt="Cultural Events" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4M21.791 5.759l-1.586 9.689c-.047.286-.145.557-.288.794l-3.732 6.564c-.914 1.609-3.162 1.609-4.076 0l-3.732-6.564c-.143-.237-.241-.508-.288-.794l-1.586-9.689c-.029-.18.108-.348.288-.348h12.808c.18 0 .317.168.288.348z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-white text-xl md:text-2xl font-merri font-bold drop-shadow-lg">
                  Cultural Events
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Study Groups - Medium */}
          <motion.div
            className="relative col-span-1 row-span-1 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <div className="relative h-[250px]">
              <img src={library} alt="Study Groups" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l8 5v10l-8 5-8-5V7l8-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10.5L12 13l5-2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-white text-xl md:text-2xl font-merri font-bold drop-shadow-lg">
                  Study Groups
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Mid-Day Meals - Medium Image Card */}
          <motion.div
            className="relative col-span-1 row-span-1 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
            }}
          >
            <div className="relative h-[250px]">
              <img src={midDay} alt="Mid-Day Meals" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1v3M10 1v3M14 1v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-white text-xl md:text-2xl font-merri font-bold drop-shadow-lg">
                  Mid-Day Meals
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Tech Workshops - Medium Image Card */}
          <motion.div
            className="relative col-span-1 row-span-1 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
          >
            <div className="relative h-[250px]">
              <img src="/gallery/bio-lab.webp" alt="Tech Workshops" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="3" width="16" height="12" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M9 8h2M11 11v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="15" r="2" stroke="white" strokeWidth="2"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-white text-xl md:text-2xl font-merri font-bold drop-shadow-lg">
                  Tech Workshops
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Mid-Day Meals - Large */}
          {/* <motion.div
            className="relative col-span-1 row-span-1 xl:row-span-2 xl:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
            }}
          >
            <div className="relative h-full min-h-[400px] xl:min-h-[500px]">
              <img src={midDay} alt="Mid-Day Meals" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1v3M10 1v3M14 1v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-white text-2xl md:text-3xl font-merri font-bold drop-shadow-lg">
                  Mid-Day Meals
                </h3>
              </div>
            </div>
          </motion.div> */}

        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/gallery">
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-nuno font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group shadow-lg cursor-pointer">
              Explore Our Gallery
              <svg className="inline-block ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
export default Facilities;
