import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion'
import { useState } from 'react'

function GalleryPage() {
    const [showMore, setShowMore] = useState(false);

    const photos = [
        {
            id: 1,
            src: "/src/assets/commerce.jpg",
            title: "Commerce Stream Inauguration",
            description: "Celebrating the launch of our Commerce program with great enthusiasm",
            alt: "Commerce Stream Inauguration"
        },
        {
            id: 2,
            src: "/src/assets/lab.jpg",
            title: "Science Stream Inauguration",
            description: "Launching our advanced Science program with state-of-the-art facilities",
            alt: "Science Stream Inauguration"
        },
        {
            id: 3,
            src: "/src/assets/campus.webp",
            title: "Independence Day Celebrations",
            description: "Patriotic celebrations and cultural programs marking our national pride",
            alt: "Independence Day Celebrations"
        },
        {
            id: 4,
            src: "/src/assets/mid-day.webp",
            title: "Food Fest Highlights",
            description: "Delicious culinary creations and cultural food showcase",
            alt: "Food Fest Highlights"
        },
        {
            id: 5,
            src: "/src/assets/PHY-LAB.webp",
            title: "Laboratory Sessions",
            description: "Hands-on learning experiences in our modern science laboratories",
            alt: "Laboratory Sessions"
        }
    ];

    const videos = [
        {
            id: 1,
            title: "Student Council Inauguration",
            description: "Leadership transitions and new beginnings for student governance",
            shortDesc: "New student leaders take charge with enthusiasm and vision",
            emoji: "👑",
            gradient: "from-indigo-600 to-purple-700",
            videoSrc: "/src/videos/student-council.mp4",
            hasVideo: true
        },
        {
            id: 2,
            title: "10th Year Anniversary - Buildup",
            description: "Exciting promotion and buildup to our decade milestone celebration",
            shortDesc: "Building anticipation for our special decade milestone",
            emoji: "🎬",
            gradient: "from-blue-600 to-purple-700",
            videoSrc: "/src/videos/annieversary-promotion.mp4",
            hasVideo: true
        },
        {
            id: 3,
            title: "10th Year Anniversary - Event",
            description: "Celebrating a decade of excellence and achievements",
            shortDesc: "A decade of memories, achievements, and celebrations",
            emoji: "🎉",
            gradient: "from-purple-600 to-pink-700",
            videoSrc: "/src/videos/annieversary.mp4",
            hasVideo: true
        },
        {
            id: 4,
            title: "Fresher's Day",
            description: "Welcoming new students with fun and memorable celebrations",
            shortDesc: "Warm welcome and orientation for our new students",
            emoji: "🎓",
            gradient: "from-green-600 to-teal-700",
            videoSrc: "/src/videos/freshers-day.mp4",
            hasVideo: true
        },
        {
            id: 5,
            title: "Farewell Ceremony",
            description: "Emotional send-off for graduating students and memorable moments",
            shortDesc: "Cherished memories and well-wishes for graduates",
            emoji: "👋",
            gradient: "from-red-600 to-pink-700",
            videoSrc: "/src/videos/farewell.mp4",
            hasVideo: true
        },
        {
            id: 6,
            title: "Football Tournament",
            description: "Exciting matches, team spirit, and sporting achievements",
            shortDesc: "Passion, teamwork, and sporting excellence on display",
            emoji: "⚽",
            gradient: "from-orange-600 to-yellow-700",
            videoSrc: "/src/videos/football.mp4",
            hasVideo: true
        }
    ];

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
            <section className="py-12 md:py-16 relative z-10" id='gallery'>
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
                            Gallery
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
                            Capturing moments and memories at Rotary PU College
                        </motion.p>
                    </motion.div>

                    {/* Photos Grid Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 font-merri mb-8 text-center">
                             Campus Moments
                        </h2>

                        {/* 2x4 Grid Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                            {/* Row 1 */}
                            {photos.slice(0, 4).map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-sm font-bold font-merri mb-1 line-clamp-2">
                                            {photo.title}
                                        </h3>
                                        <p className="text-xs opacity-90 font-nuno line-clamp-2">
                                            {photo.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Row 2 */}
                            {photos.slice(4, 5).map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-sm font-bold font-merri mb-1 line-clamp-2">
                                            {photo.title}
                                        </h3>
                                        <p className="text-xs opacity-90 font-nuno line-clamp-2">
                                            {photo.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Placeholder cards for Row 2 */}
                            {[6, 7, 8].map((id, index) => (
                                <motion.div
                                    key={id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-center text-gray-500 p-4">
                                        <div className="text-3xl mb-2">📷</div>
                                        <p className="text-sm font-semibold font-nuno">Coming Soon</p>
                                        <p className="text-xs opacity-75 font-nuno">More photos</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Show More Button */}
                        <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl font-nuno"
                            >
                                {showMore ? 'Show Less' : 'Show More Photos'}
                            </button>
                        </motion.div>

                        {/* Additional content when Show More is clicked */}
                        {showMore && (
                            <motion.div
                                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Additional placeholder content */}
                                {[9, 10, 11, 12, 13, 14, 15, 16].map((id) => (
                                    <motion.div
                                        key={id}
                                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (id - 9) * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="text-center text-gray-600 p-4">
                                            <div className="text-3xl mb-2">🎓</div>
                                            <p className="text-sm font-semibold font-nuno">Future Events</p>
                                            <p className="text-xs opacity-75 font-nuno">Coming Soon</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Videos Grid Section */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 font-merri mb-8 text-center">
                            Event Highlights
                        </h2>

                        {/* Videos Grid Layout - 16:9 Aspect Ratio */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${video.hasVideo ? '' : `bg-gradient-to-br ${video.gradient}`}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: video.hasVideo ? 1.02 : 1.02 }}
                                >
                                    {/* Dynamic Aspect Ratio Container */}
                                    <div className={`relative aspect-[9/16]`}>
                                        {video.hasVideo ? (
                                            /* Actual Video Player with Description */
                                            <>
                                                <video
                                                    className="w-full h-full object-cover rounded-xl"
                                                    controls
                                                    preload="metadata"
                                                    poster={video.thumbnail || undefined}
                                                >
                                                    <source src={video.videoSrc} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                {/* Description below video */}
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10">
                                                    <p className="text-white text-sm font-merri font-bold text-center">
                                                        {video.shortDesc}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            /* Video Placeholder */
                                            <>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center text-white p-6">
                                                        <div className="text-5xl md:text-6xl mb-4">{video.emoji}</div>
                                                        <h3 className="text-lg md:text-xl font-bold font-merri mb-3 line-clamp-2">
                                                            {video.title}
                                                        </h3>
                                                        <p className="text-sm md:text-base opacity-90 font-nuno mb-4 line-clamp-3">
                                                            {video.description}
                                                        </p>
                                                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                                                            <span className="text-sm font-semibold font-nuno">Coming Soon</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                                                        <div className="text-white text-3xl">▶️</div>
                                                    </div>
                                                </div>

                                                {/* Video Dimensions Indicator */}
                                                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                                                    <span className="text-white text-xs  font-nuno">
                                                        9:16
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default GalleryPage;
