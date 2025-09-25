import { Users } from "../icons/users";
import { ChevronRight } from "../icons/chevronRight";
import { ChevronLeft } from "../icons/chevronLeft";
import { useState } from "react";
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
    <div>
      <div className="w-full bg-white relative text-gray-800  border-t border-amber-100 rounded-br-4xl rounded-bl-4xl">
        {/* Circuit Board - Light Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />
        {/* Your Content/Components */}

        <section className="pb-10">
          <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-5xl 2xl:text-5xl font-bold tracking-wide pt-9  flex justify-center items-center text-red-800 font-merri">
              Voices of Our Alumni
              <Users
                stroke="#991B1B"
                className="ml-3 w-6 h-6 2xl:w-8 2xl:h-8"
              />
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-gray-600 mt-5 font-medium font-nuno">
              Graduates share their journey and memories with us.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
            {/* Left Arrow */}
            <button
              className="btn btn-circle btn-outline bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={prevCard}
            >
              <ChevronLeft stroke="#1e40af" className="w-6 h-6" />
            </button>

            {/* Testimonial Card */}
            <div
              className="card max-w-4xl rounded-3xl card-lg shadow-2xl hover:shadow-3xl transition-all duration-300 mx-auto bg-gradient-to-r from-stone-100 to-zinc-50 p-6 h-[500px] flex-1"
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
                  <h2
                    key={`${currentIndex}-${direction}`}
                    className={`card-title text-center italic text-gray-800 font-nuno line-clamp-6 leading-relaxed ${
                      direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                  >
                    {currentTestimonial.text}
                  </h2>
                </div>

                {/* Author Info - Fixed at bottom */}
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p
                    key={`author-${currentIndex}-${direction}`}
                    className={`text-center text-gray-800 font-extrabold font-merri text-xl ${
                      direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                  >
                    {currentTestimonial.Author}
                  </p>
                  <p
                    key={`stream-${currentIndex}-${direction}`}
                    className={`text-center text-gray-600 font-nuno text-lg ${
                      direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                  >
                    {currentTestimonial.Stream}
                  </p>
                  <p
                    key={`year-${currentIndex}-${direction}`}
                    className={`text-center text-gray-600 font-nuno font-medium text-base underline decoration-2 decoration-gray-500 underline-offset-2 ${
                      direction === 'next' ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                  >
                    {currentTestimonial.Year}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="btn btn-circle btn-outline bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={nextCard}
            >
              <ChevronRight stroke="#1e40af" className="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
