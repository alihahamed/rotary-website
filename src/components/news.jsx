import campusImg from "../assets/campus-rotory.jpg";
import labImg from "../assets/lab.jpg";
import commerceImg from "../assets/commerce.webp";
import { BellRing } from '../icons/bellring'
function News() {
  const newsItems = [
    {
      date: "Jan 15, 2025",
      category: "Admissions",
      categoryColor: "bg-red-500",
      title: "Admission Applications Now Open for 2025-26",
      desc: "Applications for Science and Commerce streams are now being accepted. Early bird discount available for applications submitted before February 15th.",
      img: campusImg
    },
    {
      date: "Jan 10, 2025",
      category: "Academic",
      categoryColor: "bg-blue-500",
      title: "Mock Exam Schedule Released",
      desc: "Pre-board mock examinations for both Science and Commerce students scheduled from March 1st to 15th. Detailed timetable available on student portal.",
      img: labImg
    },
    {
      date: "Jan 8, 2025",
      category: "Events",
      categoryColor: "bg-purple-500",
      title: "Annual Science Exhibition 2025",
      desc: "Join us for our annual science exhibition on February 20th. Students will showcase innovative projects and research work. Open to all parents and visitors.",
      img: commerceImg
    },
    {
      date: "Jan 5, 2025",
      category: "Achievement",
      categoryColor: "bg-green-500",
      title: "State-Level Competition Winners",
      desc: "Congratulations to our students who secured top positions in the State Mathematics Olympiad and Commerce Quiz competitions.",
      img: campusImg
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
        <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-5xl font-merri text-gray-800 font-bold tracking-wide pt-9">
            <BellRing />
            News & Announcements 
          </h2>
          <p className="font-nuno text-2xl text-gray-600 mt-5 font-medium">
            Stay updated with the latest happenings at Rotary PU College
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 pb-12">
          {newsItems.map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group bg-white">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                {/* Date and Category badges */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                  <span className={`${item.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-merri">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 font-nuno line-clamp-3">
                  {item.desc}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center gap-2 font-nuno">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="text-center pb-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition flex items-center gap-2 mx-auto font-nuno">
            View All Announcements
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Bottom stats section */}
        {/* <div className="bg-white/50 backdrop-blur-sm py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-500 text-white p-6 rounded-2xl">
              <h4 className="text-4xl font-bold mb-2">12</h4>
              <p className="font-medium">This Month</p>
              <p className="text-sm opacity-90">New Updates</p>
            </div>
            <div className="bg-red-500 text-white p-6 rounded-2xl">
              <h4 className="text-4xl font-bold mb-2">3</h4>
              <p className="font-medium">High Priority</p>
              <p className="text-sm opacity-90">Important Notices</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-2xl">
              <h4 className="text-4xl font-bold mb-2">95</h4>
              <p className="font-medium">Total Updates</p>
              <p className="text-sm opacity-90">This Academic Year</p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
export default News;
