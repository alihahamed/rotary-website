
import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion'
import campus from '../assets/campus.webp';
import trip from '../assets/trip.jpg'
import sports from '../assets/sports.webp';
import nss from '../assets/nss.webp';
import entry from '/gallery/entry.webp';
import annual5 from '/gallery/annual_5.webp';

function NewsEventsPage() {
    
    // Dummy news data
    const newsData = [
        {
            id: 1,
            title: "Rotary PU College Achieves 100% Pass Percentage in Board Exams",
            date: "2025-03-15",
            category: "Academic",
            excerpt: "Our students have achieved outstanding results in the recent board examinations, with 95% pass percentage across all streams.",
            image: campus,
            readTime: "3 min read"
        },
        {
            id: 2,
            title: "Admission Applications Now Open for 2025-26",
            date: "2025-04-29",
            category: "Infrastructure",
            excerpt: "Applications for Science and Commerce streams are now being accepted. Early bird discount available for early applications.",
            image: entry,
            readTime: "2 min read"
        },
        {
            id: 3,
            title: "Annual Sports Meet 2025",
            date: "2025-07-05",
            category: "Sports",
            excerpt: "Annual sports meet featuring various athletic events and competitions showcasing student talent and teamwork.",
            image: sports,
            readTime: "4 min read"
        },
        {
            id: 4,
            title: "A Memorable College Trip Arranged for the Students!",
            date: "2024-12-20",
            category: "College Life",
            excerpt: "A memorable fun college trip to Kochi, Kerala, awaits our students! The city's vibrant culture, modern metro stations,  thrilling Wonderla Water Park in this exciting adventure",
            image: trip,
            readTime: "3 min read"
        },
        {
            id: 5,
            title: "Rotary PU College Celebrates 10 Years of Excellence",
            date: "2024-11-30",
            category: "Anniversary",
            excerpt: "A decade of academic excellence, holistic development, and community service celebrated with great enthusiasm.",
            image: annual5,
            readTime: "5 min read"
        },
        {
            id: 6,
            title: "NSS Camp Organized for Community Service",
            date: "2024-9-23",
            category: "Community",
            excerpt: "National Service Scheme camp conducted to promote social responsibility and community development activities.",
            image: nss,
            readTime: "3 min read"
        }
    ];



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Academic': 'bg-blue-600',
            'Infrastructure': 'bg-lime-500',
            'Sports': 'bg-orange-500',
            'Career': 'bg-red-500',
            'Anniversary': 'bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]',
            'Community': 'bg-cyan-500',
            'College Life': 'bg-yellow-400'
        };
        return colors[category] || 'bg-gradient-to-r from-[#6b7280] via-[#9ca3af] to-[#d1d5db]';
    };



    return (
        <div className="w-full bg-white relative">
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
            <TopAnnouncement />
            <section className="py-12 md:py-16 relative z-10" id='newsEvents'>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Header */}
                    <motion.div
                    
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Latest News
                        </motion.h1>
                        <motion.div
                            className="w-24 h-1 bg-blue-600 mx-auto mt-4"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mt-4 font-nuno"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Stay updated with the latest news and announcements at Rotary PU College
                        </motion.p>
                    </motion.div>

                    {/* News Section */}
                    <motion.div
                    
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-15"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        {newsData.map((news, index) => (
                            <motion.div
                                key={news.id}
                                className="indicator w-full transition-all duration-300 transform hover:-translate-y-2"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 50,
                                        scale: 0.9
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: index * 0.1
                                        }
                                    }
                                }}
                            >
                                {/* DaisyUI Indicator Badge */}
                                <span className={`indicator-item badge text-white font-semibold p-2  md:p-3 absolute right-7 md:right-4 text-xs md:text-sm font-nuno border-1 border-black ${getCategoryColor(news.category)}`}>
                                    {news.category}
                                </span>

                                {/* Card Content */}
                                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group bg-white w-full">
                                    <div className="relative h-54 overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
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
                                                {formatDate(news.date)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 font-merri">
                                            {news.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 font-nuno text-sm md:text-base">
                                            {news.excerpt}
                                        </p>
                                        {/* <div className="flex items-center text-gray-500 text-sm">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12,6 12,12 16,14"></polyline>
                                            </svg>
                                            {news.readTime}
                                        </div> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default NewsEventsPage;
