// import  { Dot } from 'lucide-react'
// import { LibraryBig } from 'lucide-react'
import { Album } from "../icons/book";
import { motion } from "framer-motion";
import Auditorium from '../assets/auditorium.webp'
import Amarnath from '../assets/amarnath.jpg'
import { Link, useNavigate } from "react-router-dom";

function AboutUs() {

  const navigate = useNavigate()
  const handleAboutUs = (sectionId) => {
    navigate('/about-us')

    setTimeout(() => {
        const element = document.getElementById(sectionId)
        if(element) {
          element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 100)
  }

  return (
    <div>
      {/* <div className="w-full bg-[#fff9f5] relative  border-b border-b-gray-400"> */}
        {/* Warm Light Apricot & Coral */}
        {/* <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 30%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.25) 0%, transparent 20%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
          }}
        /> */}
        {/* Your Content/Components */}

        <section
          className="py-12 md:py-23 rounded-bl-4xl rounded-br-4xl bg-gradient-to-br from-stone-50 to-amber-100/50 border-b border-b-amber-100"
        >
          <motion.div
            className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px", amount: 0.1 }}
            transition={{ duration: 1.0 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[47px] font-bold text-gray-800 mb-6 md:mb-4 font-merri tracking-wide flex flex-col sm:flex-row justify-center sm:justify-center items-center text-center sm:text-left">
                 <p className="mb-2 sm:mb-0">About <span className="text-red-600">Rotary PU College</span></p>
                  <Album stroke="#374151" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mt-2 sm:mt-0 sm:ml-3 inline-block" />
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6 md:mb-8"></div>
                <p className="text-lg md:text-xl font-medium text-gray-600 mb-6 md:mb-8 leading-relaxed font-nuno">
                 <span className="text-gray-800 font-bold">Established in 2015,</span>  Rotary PU College carries forward the legacy of Rotary Institutions, one of the first schools to be founded in Moodbidri. With a focus on academic excellence, discipline, and all-round development, the college provides a strong foundation for students to pursue higher education and future success.
                </p>
                <ul className="text-lg md:text-xl font-medium text-gray-600 mb-6 md:mb-8 leading-relaxed font-nuno list-none space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#eab308"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Well-equipped classrooms for interactive learning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3b82f6"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>Modern laboratories for practical exposure.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#eab308"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      A rich library with books and digital resources.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3b82f6"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Sports and cultural activities that build creativity and
                      teamwork
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#eab308"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Dedicated faculty and mentors who guide and support every
                      student.
                    </span>
                  </li>
                  <div className="flex justify-center items-center">
                    <button onClick={() => handleAboutUs("aboutUs")} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-10 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-nuno mt-5 text-[15px]">
                      Learn More About Us
                    </button>
                  </div>
                </ul>
              </div>
              <div>
                <img
                  src={Auditorium}
                  alt="Rotary PU College Campus"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Founder Section within About Us */}
            <div className="mt-12 md:mt-16">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                  Our Founder
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-stone-100 to-zinc-100 rounded-lg shadow-md p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <img
                        src={Amarnath}
                        alt="Rtn. K. Amaranath Shetty - Founder"
                        className="w-48 h-48 md:w-64 md:h-70 object-cover rounded-lg shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-merri"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        Rtn. K. Amaranath Shetty
                      </motion.h3>
                      <motion.p
                        className="text-lg text-red-600 mb-6 font-nuno"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Founder President ~ Rotary Education Society
                      </motion.p>
                      <motion.p
                        className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    // </div>
  );
}
export default AboutUs;
