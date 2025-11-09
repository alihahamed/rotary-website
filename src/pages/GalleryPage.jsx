import TopAnnouncement from '../components/TopAnnouncement';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function GalleryPage() {
    const [showMore, setShowMore] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Handle photo click to open modal
    const openModal = (photo, index) => {
        setSelectedPhoto(photo);
        setCurrentIndex(index);
    };

    // Close modal
    const closeModal = () => {
        setSelectedPhoto(null);
    };

    // Navigate to next photo
    const nextPhoto = () => {
        const nextIndex = (currentIndex + 1) % photos.length;
        setCurrentIndex(nextIndex);
        setSelectedPhoto(photos[nextIndex]);
    };

    // Navigate to previous photo
    const prevPhoto = () => {
        const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedPhoto(photos[prevIndex]);
    };

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);



    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedPhoto) return;

            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowRight':
                    nextPhoto();
                    break;
                case 'ArrowLeft':
                    prevPhoto();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [selectedPhoto, currentIndex]);

    const photos = [
        // Commerce Orientation Photos
        {
            id: 1,
            src: "/gallery/comOrientation-1.jpg",
            title: "Commerce Orientation",
            description: "Welcome session and introduction to commerce stream",
            alt: "Commerce Orientation Day 1"
        },
        {
            id: 2,
            src: "/gallery/comOrientation-2.jpg",
            title: "Commerce Orientation",
            description: "Interactive workshops and faculty introductions",
            alt: "Commerce Orientation Day 2"
        },
        {
            id: 3,
            src: "/gallery/comOrientation-3.jpg",
            title: "Commerce Orientation",
            description: "Campus tour and facility exploration",
            alt: "Commerce Orientation Day 3"
        },
        {
            id: 4,
            src: "/gallery/comOrientation-4.jpg",
            title: "Commerce Orientation",
            description: "Subject overview and curriculum discussion",
            alt: "Commerce Orientation Day 4"
        },
        {
            id: 5,
            src: "/gallery/comOrientation-5.jpg",
            title: "Commerce Orientation",
            description: "Closing ceremony and student networking",
            alt: "Commerce Orientation Day 5"
        },

        // Science Orientation Photos
        {
            id: 6,
            src: "/gallery/sciOrientation_1.jpg",
            title: "Science Orientation",
            description: "Welcome session and introduction to science stream",
            alt: "Science Orientation Day 1"
        },
        {
            id: 7,
            src: "/gallery/sciOrientation_2.jpg",
            title: "Science Orientation",
            description: "Laboratory tours and hands-on science demonstrations",
            alt: "Science Orientation Day 2"
        },
        {
            id: 8,
            src: "/gallery/sciOrientation_3.jpg",
            title: "Science Orientation",
            description: "Interactive workshops and faculty introductions",
            alt: "Science Orientation Day 3"
        },
        {
            id: 9,
            src: "/gallery/sciOrientation_4.jpg",
            title: "Science Orientation",
            description: "Subject overview and curriculum discussion for PCMB/PCMC",
            alt: "Science Orientation Day 4"
        },
        {
            id: 10,
            src: "/gallery/sciOrientation_5.jpg",
            title: "Science Orientation",
            description: "Closing ceremony and student networking for science stream",
            alt: "Science Orientation Day 5"
        },

        // Laboratory Photos
        {
            id: 11,
            src: "/gallery/bio-lab.webp",
            title: "Biology Laboratory",
            description: "Advanced biology lab with modern equipment and research facilities",
            alt: "Biology Laboratory"
        },
        {
            id: 12,
            src: "/gallery/cs-lab.webp",
            title: "Computer Science Lab",
            description: "State-of-the-art computer lab with latest technology and software",
            alt: "Computer Science Lab"
        },
        {
            id: 13,
            src: "/gallery/chem-lab-1.webp",
            title: "Chemistry Laboratory",
            description: "Well-equipped Chemistry lab for practical experiments and research",
            alt: "Chemistry Laboratory"
        },
        {
            id: 14,
            src: "/gallery/PHY-LAB1.webp",
            title: "Advanced Physics Lab",
            description: "Specialized physics laboratory for advanced experiments",
            alt: "Advanced Physics Lab"
        },
        {
            id: 15,
            src: "/gallery/chem-lab-2.webp",
            title: "Chemistry Lab",
            description: "Specialized chemistry laboratory for advanced experiments",
            alt: "Advanced Chemistry Lab"
        },

        // Annual Event Photos
        {
            id: 16,
            src: "/gallery/annual_01.webp",
            title: "Annual Day Celebration",
            description: "Grand annual day celebration showcasing student talents and achievements",
            alt: "Annual Day Celebration"
        },
        {
            id: 17,
            src: "/gallery/annual_2.webp",
            title: "Annual Cultural Program",
            description: "Traditional and modern cultural performances by students",
            alt: "Annual Cultural Program"
        },
        {
            id: 18,
            src: "/gallery/annual_3.webp",
            title: "Annual Sports Events",
            description: "Exciting sports competitions and athletic achievements",
            alt: "Annual Sports Events"
        },
        {
            id: 19,
            src: "/gallery/annual_4.webp",
            title: "Annual Prize Distribution",
            description: "Recognition and awards for outstanding academic and extracurricular performance",
            alt: "Annual Prize Distribution"
        },
        {
            id: 20,
            src: "/gallery/annual_5.webp",
            title: "Annual Day",
            description: "Reunion with former students and cherished memories",
            alt: "Annual Alumni Meet"
        },
        {
            id: 21,
            src: "/gallery/annual_6.webp",
            title: "Annual Day",
            description: "Emotional farewell ceremony for graduating students",
            alt: "Annual Farewell"
        },

        // Drug Awareness Campaign Photos
        {
            id: 22,
            src: "/gallery/drug_1.webp",
            title: "Drug Awareness Workshop",
            description: "Educational session on drug abuse prevention and healthy lifestyle",
            alt: "Drug Awareness Workshop"
        },
        {
            id: 23,
            src: "/gallery/drug_2.webp",
            title: "Anti-Drug Campaign",
            description: "Student participation in anti-drug awareness activities",
            alt: "Anti-Drug Campaign"
        },
        {
            id: 24,
            src: "/gallery/drug_3.webp",
            title: "Drug Prevention Seminar",
            description: "Interactive seminar on the dangers of substance abuse",
            alt: "Drug Prevention Seminar"
        },
        {
            id: 25,
            src: "/gallery/drug_4.webp",
            title: "Drug Awareness Workshop",
            description: "Community outreach and awareness campaign against drug abuse",
            alt: "Drug Awareness Rally"
        },

        // Independence Day Photos
        {
            id: 26,
            src: "/gallery/ind_1.JPG",
            title: "Independence Day Celebration",
            description: "Patriotic celebrations marking India's independence with flag hoisting and cultural programs",
            alt: "Independence Day Celebration"
        },
        {
            id: 27,
            src: "/gallery/ind_2.JPG",
            title: "Independence Day Celebration",
            description: "Students participating in the independence day parade and cultural performances",
            alt: "Independence Day Parade"
        },

        // Interact Club Photos
        {
            id: 28,
            src: "/gallery/interact_club_1.jpeg",
            title: "Interact Club Meeting",
            description: "Rotary Interact Club members engaged in community service planning",
            alt: "Interact Club Meeting"
        },
        {
            id: 29,
            src: "/gallery/interact_club_2.jpeg",
            title: "Interact Community Service",
            description: "Interact club members participating in local community service projects",
            alt: "Interact Community Service"
        },
        {
            id: 30,
            src: "/gallery/interact_club_3.jpeg",
            title: "Interact Leadership Workshop",
            description: "Leadership development and skill-building workshop for Interact members",
            alt: "Interact Leadership Workshop"
        },
        {
            id: 31,
            src: "/gallery/interact_club_4.jpeg",
            title: "Interact Social Initiative",
            description: "Interact club organizing social awareness campaigns and initiatives",
            alt: "Interact Social Initiative"
        },
        {
            id: 32,
            src: "/gallery/interact_club_5.jpeg",
            title: "Interact Club Activities",
            description: "Various club activities promoting service, leadership, and fellowship",
            alt: "Interact Club Activities"
        },

        // Taluk Runners Photos
        {
            id: 33,
            src: "/gallery/talukRunners_boys.webp",
            title: "Taluk Runners Championship - Boys",
            description: "Boys team competing in the prestigious Taluk Runners Championship",
            alt: "Taluk Runners Championship Boys"
        },
        {
            id: 34,
            src: "/gallery/talukRunners_girls.webp",
            title: "Taluk Runners Championship - Girls",
            description: "Girls team showcasing athletic excellence in Taluk Runners Championship",
            alt: "Taluk Runners Championship Girls"
        },

        // Cultural Event Photo
        {
            id: 35,
            src: "/gallery/cultural-event.webp",
            title: "Food Fest",
            description: "Vibrant cultural festival celebrating diversity and artistic talents",
            alt: "Cultural Festival"
        },

        // Entry Photo
        {
            id: 36,
            src: "/gallery/entry.webp",
            title: "College Entrance",
            description: "Beautiful college entrance welcoming students and visitors",
            alt: "College Entrance"
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
            videoSrc: "/gallery/student-council.mp4",
            hasVideo: true
        },
        {
            id: 2,
            title: "10th Year Anniversary - Buildup",
            description: "Exciting promotion and buildup to our decade milestone celebration",
            shortDesc: "Building anticipation for our special decade milestone",
            emoji: "🎬",
            gradient: "from-blue-600 to-purple-700",
            videoSrc: "/gallery/annieversary-promotion.mp4",
            hasVideo: true
        },
        {
            id: 3,
            title: "10th Year Anniversary - Event",
            description: "Celebrating a decade of excellence and achievements",
            shortDesc: "A decade of memories, achievements, and celebrations",
            emoji: "🎉",
            gradient: "from-purple-600 to-pink-700",
            videoSrc: "/gallery/annieversary.mp4",
            hasVideo: true
        },
        {
            id: 4,
            title: "Fresher's Day",
            description: "Welcoming new students with fun and memorable celebrations",
            shortDesc: "Warm welcome and orientation for our new students",
            emoji: "🎓",
            gradient: "from-green-600 to-teal-700",
            videoSrc: "/gallery/freshers-day.mp4",
            hasVideo: true
        },
        {
            id: 5,
            title: "Farewell Ceremony",
            description: "Emotional send-off for graduating students and memorable moments",
            shortDesc: "Cherished memories and well-wishes for graduates",
            emoji: "👋",
            gradient: "from-red-600 to-pink-700",
            videoSrc: "/gallery/farewell.mp4",
            hasVideo: true
        },
        {
            id: 6,
            title: "Football Tournament",
            description: "Exciting matches, team spirit, and sporting achievements",
            shortDesc: "Passion, teamwork, and sporting excellence on display",
            emoji: "⚽",
            gradient: "from-orange-600 to-yellow-700",
            videoSrc: "/gallery/football.mp4",
            hasVideo: true
        },
        {
            id: 7,
            title: "Face Painting Competition",
            description: "Exciting matches, team spirit, and sporting achievements",
            shortDesc: "Art, Creativity and Face Painting!",
            emoji: "⚽",
            gradient: "from-orange-600 to-yellow-700",
            videoSrc: "/gallery/face-painting.mp4",
            hasVideo: true
        },
        {
            id: 8,
            title: "Drawing & Painting Competition",
            description: "Exciting matches, team spirit, and sporting achievements",
            shortDesc: "Drawing & Painting Competition!",
            emoji: "⚽",
            gradient: "from-orange-600 to-yellow-700",
            videoSrc: "/gallery/painting.mp4",
            hasVideo: true
        },

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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 font-merri mb-8 text-center">
                             Campus Moments
                             <div className="w-18 h-1 bg-red-600 mx-auto mt-4"></div>
                        </h2>
                        

                        {/* 5 Column Grid Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                            {photos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => openModal(photo, index)}
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            loading='lazy'
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-sm font-bold font-merri mb-1 line-clamp-2">
                                            {photo.title}
                                        </h3>
                                        <p className="text-xs opacity-90 font-nuno line-clamp-2">
                                            {photo.description}
                                        </p>
                                    </div> */}
                                </motion.div>
                            ))}
                        </div>

                        {/* Show More Button */}
                        {/* <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl font-nuno"
                            >
                                {showMore ? 'Show Less' : 'Show More Photos'}
                            </button>
                        </motion.div> */}

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

                    {/* Videos Section */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 font-merri mb-8 text-center">
                            Event Highlights
                            <div className="w-18 h-1 bg-yellow-500 mx-auto mt-4"></div>
                        </h2>

                        {/* Mobile Carousel */}
                        {isMobile ? (
                            <div className="relative mx-auto px-5 pb-8">
                                <div className="overflow-hidden rounded-xl">
                                    <motion.div
                                        className="flex"
                                        animate={{ x: -currentVideoIndex * 100 + "%" }}
                                        transition={{ type: "spring", stiffness: 200, damping: 30 }}
                                        drag="x"
                                        dragConstraints={{ left: -((videos.length - 1) * 100), right: 0 }}
                                        onDragEnd={(event, info) => {
                                            const swipeThreshold = 50;
                                            if (info.offset.x > swipeThreshold && currentVideoIndex > 0) {
                                                setCurrentVideoIndex(currentVideoIndex - 1);
                                            } else if (info.offset.x < -swipeThreshold && currentVideoIndex < videos.length - 1) {
                                                setCurrentVideoIndex(currentVideoIndex + 1);
                                            }
                                        }}
                                    >
                                        {videos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                className="w-full flex-shrink-0 px-2"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{
                                                    opacity: index === currentVideoIndex ? 1 : 0.7,
                                                    scale: index === currentVideoIndex ? 1 : 0.95
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${video.hasVideo ? '' : `bg-gradient-to-br ${video.gradient}`}`}>
                                                    {/* Dynamic Aspect Ratio Container */}
                                                    <div className="relative aspect-[9/16]">
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
                                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                                                    <p className="text-white text-sm font-merri font-bold text-center">
                                                                        {video.shortDesc}
                                                                    </p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            /* Video Placeholder */
                                                            <>
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <div className="text-center text-white p-4">
                                                                        <div className="text-4xl mb-3">{video.emoji}</div>
                                                                        <h3 className="text-base font-bold font-merri mb-2 line-clamp-2">
                                                                            {video.title}
                                                                        </h3>
                                                                        <p className="text-xs opacity-90 font-nuno mb-3 line-clamp-3">
                                                                            {video.description}
                                                                        </p>
                                                                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                                                                            <span className="text-xs font-semibold font-nuno">Coming Soon</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Play Button Overlay */}
                                                                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                                                                        <div className="text-white text-2xl">▶️</div>
                                                                    </div>
                                                                </div>

                                                                {/* Video Dimensions Indicator */}
                                                                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-1.5 py-0.5">
                                                                    <span className="text-white text-xs font-nuno">
                                                                        9:16
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Navigation Dots */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {videos.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentVideoIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                index === currentVideoIndex ? "bg-blue-600 border border-black" : "bg-gray-300 "
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Desktop Grid Layout */
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {videos.map((video, index) => (
                                    <motion.div
                                        key={video.id}
                                        className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${video.hasVideo ? '' : `bg-gradient-to-br ${video.gradient}`}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: video.hasVideo ? 1.02 : 1.02 }}
                                    >
                                        {/* Dynamic Aspect Ratio Container */}
                                        <div className="relative aspect-[9/16]">
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
                                                        <span className="text-white text-xs font-nuno">
                                                            9:16
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Fullscreen Photo Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
                            onClick={closeModal}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors bg-black/20 rounded-full p-3 hover:bg-black/40"
                            onClick={(e) => {
                                e.stopPropagation();
                                prevPhoto();
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors bg-black/20 rounded-full p-3 hover:bg-black/40"
                            onClick={(e) => {
                                e.stopPropagation();
                                nextPhoto();
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Main Image Container */}
                        <motion.div
                            className="relative max-w-5xl max-h-screen p-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(event, info) => {
                                const swipeThreshold = 50;
                                if (info.offset.x > swipeThreshold) {
                                    prevPhoto();
                                } else if (info.offset.x < -swipeThreshold) {
                                    nextPhoto();
                                }
                            }}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.alt}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                            />

                            {/* Image Info Overlay */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-white text-xl md:text-2xl font-bold font-merri mb-2">
                                    {selectedPhoto.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base font-nuno leading-relaxed">
                                    {selectedPhoto.description}
                                </p>

                                {/* Photo Counter */}
                                <div className="mt-4 text-white/70 text-sm font-nuno">
                                    {currentIndex + 1} of {photos.length}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Swipe Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
                            <div className="text-white/50 text-sm">Swipe</div>
                            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default GalleryPage;
