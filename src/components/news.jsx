import campusImg from "../assets/campus.webp";
import { BellRing } from "../icons/bellring";
import Sports1 from "../assets/sports_day.jpg";
import study from "../assets/study.webp";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = useNavigate()

  const handleNews = () => {
    navigate('/news-events')

    setTimeout(() => {
        const element = document.getElementById('newsEvents')
        if(element) {
          element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const newsItems = [
    {
      id: 1,
      title: "Admission Applications Now Open for 2025-26",
      desc: "Applications for Science and Commerce streams are now being accepted. Early bird discount available for early applications.",
      date: "Jan 15, 2025",
      category: "Admissions",
      categoryColor:
        "bg-red-500",
      img: campusImg,
    },
    {
      id: 2,
      title: "Mock Exam Schedule Released",
      desc: "Pre-board mock examinations for both Science and Commerce students scheduled from March 1st to 15th. Detailed timetable available on student portal.",
      date: "Jan 10, 2025",
      category: "Academic",
      categoryColor:
        "bg-blue-500",
      img: study,
    },
    {
      id: 3,
      title: "Annual Sports Meet 2025",
      desc: "Declaring Rotary Institutions Annual Sports Meet open by our Alumnus Dr Roopa Kamath amidst the guest Mr Hemant Gatti , management Heads and the Athletes@ Swaraj maidan today 💫✨",
      date: "Nov 12, 2025",
      category: "Sports",
      categoryColor:
        "bg-orange-500",
      img: Sports1,
    },
    // {
    //   id: 4,
    //   title: "NSS Camp Currently Ongoing at College",
    //   desc: "Students are actively engaged in a week-long NSS camp featuring community service projects, environmental conservation efforts, and social awareness programs.",
    //   date: "Sep 15, 2025",
    //   category: "Events",
    //   categoryColor:
    //     "bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]",
    //   img: nss,
    // },
  ];

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
      <section className="relative z-10 mx-auto  rounded-br-4xl rounded-bl-4xl ">
          <div className="text-center mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide pt-6 md:pt-9 flex flex-col sm:flex-row justify-center items-center text-yellow-500 font-merri">
              <span className="mb-2 sm:mb-0">News & Announcements</span>
              <BellRing stroke="#EAB308" className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 mt-2 sm:mt-0 sm:ml-3 lg:opacity-100 " />
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium font-nuno">
              Stay updated with the latest happenings at Rotary Pre-University
              College
            </p>
          </div>

          {/* Mobile Carousel */}
          {isMobile ? (
            <div className="relative mx-auto px-5 pb-8">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex"
                  animate={{ x: -currentIndex * 100 + "%" }}
                  transition={{ type: "tween", stiffness: 100, damping: 30}}
                  drag="x"
                  dragConstraints={{ left: -((newsItems.length - 1) * 100), right: 0 }}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x > swipeThreshold && currentIndex > 0) {
                      prevSlide();
                    } else if (info.offset.x < -swipeThreshold && currentIndex < newsItems.length - 1) {
                      nextSlide();
                    }
                  }}
                >
                  {newsItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="w-full flex-shrink-0 px-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: i === currentIndex ? 1 : 0.7,
                        scale: i === currentIndex ? 1 : 0.95
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="indicator w-full transition-all duration-300 transform hover:-translate-y-2">
                        

                        {/* Card Content */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group bg-white w-full">
                          <div className="relative h-54 overflow-hidden">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                            {/* Date badge */}
                            <div className="absolute top-4 left-4">
                              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {item.date}
                              </span>
                            </div>
                          </div>

                          <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 font-merri">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mb-3 line-clamp-3 font-nuno text-sm">
                              {item.desc}
                            </p>
                          </div>

                          {/* DaisyUI Indicator Badge */}
                        <span
                          className={`indicator-item indicator-bottom indicator-center badge text-white font-semibold p-2 relative bottom-7 font-nuno border-1 border-black z-10 ${item.categoryColor}`}
                        >
                          {item.category}
                        </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-yellow-400 border border-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              {/* <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          ) : (
            /* Desktop Grid */
            <motion.div
              className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mx-auto px-4 sm:px-5 pb-8 md:pb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {newsItems.map((item, i) => (
                <motion.div
                  className="indicator w-full transition-all duration-300 transform hover:-translate-y-2"
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: i * 0.1
                      }
                    }
                  }}
                >
                  {/* DaisyUI Indicator Badge */}
                  <span
                    className={`indicator-item badge text-white font-semibold p-3 absolute right-4 font-nuno border-1 border-black ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>

                  {/* Card Content */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group bg-white w-full">
                    <div className="relative h-54 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                      {/* Date badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 font-merri">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 font-nuno text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* View All button */}
          <div className="text-center pb-10 md:pb-18">
            
            <button onClick={() => handleNews()} className="bg-gradient-to-l from-[#f97316] via-[#e11d48] to-[#ef4444] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition flex items-center gap-2 mx-auto cursor-pointer text-sm md:text-base hover:scale-105">
              View All Announcements
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            
          </div>
        </section>
    </div>
  );
}
export default News;
