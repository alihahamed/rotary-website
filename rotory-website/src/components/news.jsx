import campusImg from "../assets/campus.webp";
import { BellRing } from "../icons/bellring";
import Sports1 from "../assets/sports1.webp";
import PHY_LAB1 from "../assets/PHY-LAB1.webp";
import study from "../assets/study.webp";
import nss from '../assets/nss.webp'
function News() {
  const newsItems = [
    {
      id: 1,
      title: "Admission Applications Now Open for 2025-26",
      desc: "Applications for Science and Commerce streams are now being accepted. Early bird discount available for early applications.",
      date: "Jan 15, 2025",
      category: "Admissions",
      categoryColor:
        "bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444]",
      img: campusImg,
    },
    {
      id: 2,
      title: "Mock Exam Schedule Released",
      desc: "Pre-board mock examinations for both Science and Commerce students scheduled from March 1st to 15th. Detailed timetable available on student portal.",
      date: "Jan 10, 2025",
      category: "Academic",
      categoryColor:
        "bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]",
      img: study,
    },
    {
      id: 3,
      title: "Annual Sports Meet 2025",
      desc: "Join us for the annual sports meet featuring athletics, team sports, and cultural events. Registration open until January 25th.",
      date: "Jan 8, 2025",
      category: "Sports",
      categoryColor:
        "bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0]",
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
      <section className="relative z-10 mx-auto border-b border-t border-amber-100 rounded-br-4xl rounded-bl-4xl ">
          <div className="text-center mt-5 mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide pt-6 md:pt-9 flex flex-col sm:flex-row justify-center items-center text-yellow-500 font-merri">
              <span className="mb-2 sm:mb-0">News & Announcements</span>
              <BellRing stroke="#EAB308" className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 mt-2 sm:mt-0 sm:ml-3" />
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium font-nuno">
              Stay updated with the latest happenings at Rotary Pre-University
              College
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-5 pb-8 md:pb-12 cursor-pointer">
            {newsItems.map((item, i) => (
              <div
                className="indicator w-full transition-all duration-300 transform hover:-translate-y-2"
                key={i}
              >
                {/* DaisyUI Indicator Badge */}
                <span
                  className={`indicator-item badge  text-white font-semibold p-3 absolute right-4 font-nuno border-1 border-black ${item.categoryColor}`}
                >
                  {item.category}
                </span>

                {/* Card Content */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group bg-white w-full ">
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
                    <button className="text-blue-500 font-medium hover:text-blue-700 transition flex items-center gap-2 font-nuno text-sm md:text-base">
                      Read More
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All button */}
          <div className="text-center pb-8 md:pb-12">
            <button className="bg-gradient-to-l from-[#f97316] via-[#e11d48] to-[#ef4444] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition flex items-center gap-2 mx-auto cursor-pointer text-sm md:text-base">
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
