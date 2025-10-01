import { Users } from "../icons/users";
import { ChevronRight } from "../icons/chevronRight";
import { ChevronLeft } from "../icons/chevronLeft";
import { useState } from "react";
import { motion } from 'framer-motion'
function Testimonials() {

  const testimonials = [
    {id:1, text: "I feel truly blessed to have completed both my schooling and pre-university studies at this esteemed institution. From my early years until PU completion, the teachers provided exceptional guidance, instilling values of discipline, hard work, and integrity while offering countless opportunities for academic and extracurricular growth. The friendly environment helped me build confidence and leadership skills, and I'm proud to be an alumnus of this remarkable institution that prioritizes both quality education and overall development.",
      Author:"Melisha Miranda", Year:2023, Stream:"Commerce Stream Graduate"
     }, {
      id:2, text: "Rotary PU College gave me so much more than just academics. I made lifelong friends here and enjoyed every moment of student life. Being part of the student council taught me leadership and teamwork, while the supportive environment always encouraged us to grow together. The memories and bonds I built here will always stay close to my heart",
      Author:"Ali Ahmed", Year:2022, Stream:"Science Stream Graduate"
     }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const prevCard = () => {
    setDirection('prev')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextCard = () => {
    setDirection('next')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className=" w-full bg-white relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />
      <section className="pb-10 relative z-10">
          <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-5xl 2xl:text-5xl font-bold tracking-wide pt-9  flex justify-center items-center text-red-800 font-merri">
              Voices of Our Alumni
              <Users
                stroke="#991B1B"
                className="ml-3 w-6 h-6 2xl:w-8 2xl:h-8"
              />
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-gray-600 mt-5 font-medium font-nuno">
              Graduates share their journey and memories with us.
            </p>
          </div>

          <motion.div
            className="flex items-center justify-center gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {/* Left Arrow */}
            <motion.button
              className="btn btn-circle btn-outline bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={prevCard}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <ChevronLeft stroke="#1e40af" className="w-6 h-6" />
            </motion.button>

            {/* Testimonial Card */}
            <motion.div
              className="card max-w-4xl rounded-3xl card-lg shadow-2xl hover:shadow-3xl transition-all duration-300 mx-auto bg-gradient-to-r from-stone-100 to-zinc-50 p-6 h-[500px] flex-1"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7, ease: "easeOut" }
                }
              }}
            >
              <div className="card-body grid grid-rows-[auto_1fr_auto] gap-4 h-full">
                {/* Large Quotation Mark SVG - Fixed at top */}
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-blue-800 opacity-40"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Testimonial Text - Takes remaining space */}
                <div className="flex items-center justify-center overflow-hidden">
                  <motion.h2
                    key={`${currentIndex}-${direction}`}
                    className="card-title text-center italic text-gray-800 font-nuno line-clamp-6 leading-relaxed"
                    initial={{ opacity: 0, x: direction === 'next' ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {currentTestimonial.text}
                  </motion.h2>
                </div>

                {/* Author Info - Fixed at bottom */}
                <motion.div
                  className="flex flex-col items-center justify-center space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-center text-gray-800 font-extrabold font-merri text-xl">
                    {currentTestimonial.Author}
                  </p>
                  <p className="text-center text-gray-600 font-nuno text-lg">
                    {currentTestimonial.Stream}
                  </p>
                  <p className="text-center text-gray-600 font-nuno font-medium text-base underline decoration-2 decoration-gray-500 underline-offset-2">
                    {currentTestimonial.Year}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Arrow */}
            <motion.button
              className="btn btn-circle btn-outline bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={nextCard}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <ChevronRight stroke="#1e40af" className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </section>
    </div>
  );
}

export default Testimonials;
