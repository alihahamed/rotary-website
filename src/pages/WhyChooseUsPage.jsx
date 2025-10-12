
import pucStaff from '../assets/puc_staff.webp';
import nonTeaching from '../assets/non_teaching.webp';
import logo from '../assets/logo.webp';
import anushree from '../assets/1. ANUSHREE (PCMB) 580 (96.6%).jpg';
import kshithi from '../assets/2. KSHITHI U SHETTY (PCMC) 576 (96%).jpg';
import sakshi from '../assets/3. SAKSHI (EBAC) 574 (95.6%).jpg';
import campus from '../assets/campus.webp';
import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion';


function WhyChooseUsPage() {
    
    return(
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
            <TopAnnouncement />
            <section className="py-12 md:py-16 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <motion.div
                        className="text-center mb-5 md:mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Why Choose Rotary PU College
                        </motion.h2>
                        <motion.div
                            className="w-50 h-1 bg-red-600 mx-auto mt-4"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        
                    </motion.div>

                    {/* College Facilities Section */}
                    <motion.div
                        className="mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                College Facilities
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-blue-600 mx-auto mt-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                            />
                            <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                                State-of-the-art infrastructure designed for optimal learning and development
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                            <div className="grid lg:grid-cols-2 gap-4 items-start">
                                {/* Facilities List - Left Side */}
                                <div className="lg:col-span-1">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Column 1 */}
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Open Space Auditorium</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">WiFi</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Classrooms</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Chemistry Lab</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Physics Lab</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">CS Lab</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Bio Lab</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Sports Grounds</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Volleyball Ground</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Hockey Ground</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Football Ground</span>
                                            </div>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Noise Free Environment</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Tobacco Free Environment</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Cafeteria</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Free Mid Day Meals</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Medical Room</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Bus Transportation</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Green Spaces</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Parking</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Security</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Library</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-nuno text-base">Study Areas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Carousel - Right Side */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-8">
                                        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-200">
                                            <img
                                                src={campus}
                                                alt="Campus Facilities"
                                                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Student Toppers Section */}
                    <motion.div
                        className="mt-12 md:mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our Top Performers
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-blue-600 mx-auto mt-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                            />
                            <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                                Celebrating academic excellence and outstanding achievements
                            </p>
                        </div>

                        <div className="bg-gradient-to-t from-white to-yellow-50 rounded-lg shadow-md p-6 md:p-8">
                            <div className="text-center">
                                {/* <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div> */}
                                {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-merri">
                                    Academic Excellence 2024-25
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-6">
                                    Our students consistently achieve outstanding results in board examinations,
                                    securing admissions to premier institutions across India and abroad.
                                </p> */}
                                <motion.div
                                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
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
                                    {/* Topper 1 - ANUSHREE */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                        }}
                                    >
                                        <div className="relative mb-4 flex justify-center">
                                            <img
                                                src={anushree}
                                                alt="ANUSHREE - PCMB Topper with 96.6% marks"
                                                className="h-[400px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '313px' }}
                                                loading="lazy"
                                            />
                                            {/* <div className="absolute top-2 right-2 bg-blue-700 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                🏆 1st Rank
                                            </div> */}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 font-merri">
                                            ANUSHREE
                                        </h4>
                                        <p className="text-gray-600 font-nuno text-sm mb-1">
                                            PCMB Stream
                                        </p>
                                        <p className="text-blue-600 font-nuno text-sm font-semibold">
                                            580/600 (96.6%)
                                        </p>
                                        <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-2">
                                            <p className="text-green-800 font-nuno text-xs">
                                                Outstanding Performance!
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Topper 2 - KSHITHI U SHETTY */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                        }}
                                    >
                                        <div className="relative mb-4 flex justify-center">
                                            <img
                                                src={kshithi}
                                                alt="KSHITHI U SHETTY - PCMC Topper with 96% marks"
                                                className="h-[400px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '313px' }}
                                                loading="lazy"
                                            />
                                            {/* <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                🥈 2nd Rank
                                            </div> */}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 font-merri">
                                            KSHITHI U SHETTY
                                        </h4>
                                        <p className="text-gray-600 font-nuno text-sm mb-1">
                                            PCMC Stream
                                        </p>
                                        <p className="text-blue-600 font-nuno text-sm font-semibold">
                                            576/600 (96%)
                                        </p>
                                        <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-2">
                                            <p className="text-blue-800 font-nuno text-xs">
                                                Excellent Achievement!
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Topper 3 - SAKSHI */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                        }}
                                    >
                                        <div className="relative mb-4 flex justify-center">
                                            <img
                                                src={sakshi}
                                                alt="SAKSHI - EBAC Topper with 95.6% marks"
                                                className="h-[400px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '313px' }}
                                                loading="lazy"
                                            />
                                            {/* <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                🥉 3rd Rank
                                            </div> */}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 font-merri">
                                            SAKSHI
                                        </h4>
                                        <p className="text-gray-600 font-nuno text-sm mb-1">
                                            EBAC Stream
                                        </p>
                                        <p className="text-blue-600 font-nuno text-sm font-semibold">
                                            574/600 (95.6%)
                                        </p>
                                        <div className="mt-3 bg-purple-50 border border-purple-200 rounded-lg p-2">
                                            <p className="text-purple-800 font-nuno text-xs">
                                                Remarkable Success!
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Achievement Summary */}
                                <motion.div
                                    className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-gray-800 mb-3 font-merri">
                                            Academic Excellence Highlights
                                        </h4>
                                        <div className="grid md:grid-cols-3 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-blue-600">96.6%</div>
                                                <div className="text-sm text-gray-600 font-nuno">Highest Score</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-green-600">95.7%</div>
                                                <div className="text-sm text-gray-600 font-nuno">Average Top 3</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-purple-600">100%</div>
                                                <div className="text-sm text-gray-600 font-nuno">Pass Rate</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* What Sets Us Apart - Masonry Layout */}
                    <div className="mt-12 md:mt-16 bg-gray-50 py-16">
                        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                    What Sets Us Apart
                                </h2>
                                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                            </div>

                            {/* Interactive Masonry Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                                {/* Modern Infrastructure - Large Card (2x2 span) */}
                                <motion.div
                                    className="lg:col-span-2 lg:row-span-2 bg-white rounded-xl shadow-md p-8 cursor-pointer overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center justify-center text-center h-full min-h-[200px]"
                                        layout
                                    >
                                        <motion.div
                                            className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </motion.div>
                                        <motion.h3
                                            className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4"
                                            layout
                                        >
                                            Modern Infrastructure
                                        </motion.h3>
                                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <p className="text-gray-700 font-nuno text-lg leading-relaxed">
                                                State-of-the-art science labs, smart classrooms, and advanced facilities designed for optimal learning experiences.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Holistic Development - Large Card (1x2 span) */}
                                <motion.div
                                    className="lg:row-span-2 bg-white rounded-xl shadow-md p-8 cursor-pointer overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center justify-center text-center h-full min-h-[200px]"
                                        layout
                                    >
                                        <motion.div
                                            className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </motion.div>
                                        <motion.h3
                                            className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4"
                                            layout
                                        >
                                            Holistic Development
                                        </motion.h3>
                                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <p className="text-gray-700 font-nuno text-base leading-relaxed">
                                                Nurturing leadership, creativity, and social responsibility through comprehensive extracurricular programs.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Expert Faculty - Medium Card */}
                                <motion.div
                                    className="bg-white rounded-xl shadow-md p-6 cursor-pointer overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center justify-center text-center h-full min-h-[150px]"
                                        layout
                                    >
                                        <motion.div
                                            className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                            </svg>
                                        </motion.div>
                                        <motion.h3
                                            className="text-lg md:text-xl font-bold text-gray-800 font-merri mb-4"
                                            layout
                                        >
                                            Expert Faculty
                                        </motion.h3>
                                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <p className="text-gray-700 font-nuno text-sm leading-relaxed">
                                                Qualified teachers providing personalized mentorship and academic guidance.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Personal Care - Small Card */}
                                <motion.div
                                    className="bg-white rounded-xl shadow-md p-6 cursor-pointer overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center justify-center text-center h-full min-h-[150px]"
                                        layout
                                    >
                                        <motion.div
                                            className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </motion.div>
                                        <motion.h3
                                            className="text-base md:text-lg font-bold text-gray-800 font-merri mb-4"
                                            layout
                                        >
                                            Personal Care
                                        </motion.h3>
                                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <p className="text-gray-700 font-nuno text-sm leading-relaxed">
                                                Small class sizes ensuring individual attention and support.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Career Support - Small Card */}
                                <motion.div
                                    className="bg-white rounded-xl shadow-md p-6 cursor-pointer overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center justify-center text-center h-full min-h-[150px]"
                                        layout
                                    >
                                        <motion.div
                                            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </motion.div>
                                        <motion.h3
                                            className="text-base md:text-lg font-bold text-gray-800 font-merri mb-4"
                                            layout
                                        >
                                            Career Support
                                        </motion.h3>
                                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <p className="text-gray-700 font-nuno text-sm leading-relaxed">
                                                Comprehensive guidance for university admissions and career planning.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Faculty & Staff Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our Faculty & Staff
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                            <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                                Meet the dedicated professionals who make Rotary PU College exceptional
                            </p>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {/* Faculty Members */}
                            <motion.div
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } }
                                }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                                    Faculty Members
                                </h3>
                                <motion.img
                                    src={pucStaff}
                                    alt="Rotary PU College Faculty Members"
                                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                    loading="lazy"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                />
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                    Our experienced and qualified faculty members are committed to providing
                                    quality education and nurturing the potential of every student.
                                </p>
                            </motion.div>

                            {/* Staff Members */}
                            <motion.div
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } }
                                }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                                    Support Staff
                                </h3>
                                <motion.img
                                    src={nonTeaching}
                                    alt="Rotary PU College Support Staff & Workers"
                                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                    loading="lazy"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                />
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                    Our dedicated support staff works tirelessly behind the scenes to ensure
                                    a smooth and conducive learning environment for all students.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUsPage
