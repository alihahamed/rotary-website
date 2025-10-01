// import  { Dot } from 'lucide-react'
// import { LibraryBig } from 'lucide-react'
import { Album } from "../icons/book";

import Auditorium from '../assets/auditorium.webp'

function AboutUs() {
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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[47px] font-bold text-gray-800 mb-6 md:mb-4 font-merri tracking-wide flex flex-col sm:flex-row justify-center sm:justify-center items-center text-center sm:text-left">
                 <p className="mb-2 sm:mb-0">About <span className="text-red-800">Rotary PU College</span></p>
                  <Album stroke="#374151" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mt-2 sm:mt-0 sm:ml-3" />
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
                    <a href="/about-us#aboutUs" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-nuno mt-5 text-sm">
                      Learn More About Us
                    </a>
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
          </div>
        </section>
      </div>
    // </div>
  );
}
export default AboutUs;
