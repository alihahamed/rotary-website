import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion';

function ResultsPage() {
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
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Academic & Sports Results
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
                            Celebrating excellence in academics and athletics
                        </motion.p>
                    </motion.div>

                    {/* Academic Toppers Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                                Academic Excellence 2024-25
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-red-600 mx-auto"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {/* First Row - 3 Toppers */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
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
                                {/* Topper 1 */}
                                <motion.div
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/1.%20ANUSHREE%20%28PCMB%29%20580%20%2896.6%25%29.jpg"
                                            alt="ANUSHREE - PCMB Topper"
                                            className="h-[320px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />

                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">ANUSHREE</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMB</p>
                                    <p className="text-xs text-blue-600 font-semibold">580/600 (96.6%)</p>
                                </motion.div>

                                {/* Topper 2 */}
                                <motion.div
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/2.%20KSHITHI%20U%20SHETTY%20%28PCMC%29%20576%20%2896%25%29.jpg"
                                            alt="KSHITHI U SHETTY - PCMC Topper"
                                            className="h-[320px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />

                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">KSHITHI U SHETTY</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMC</p>
                                    <p className="text-xs text-blue-600 font-semibold">576/600 (96%)</p>
                                </motion.div>

                                {/* Topper 3 */}
                                <motion.div
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/3.%20SAKSHI%20%28EBAC%29%20574%20%2895.6%25%29.jpg"
                                            alt="SAKSHI - EBAC Topper"
                                            className="h-[320px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />

                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">SAKSHI</h4>
                                    <p className="text-xs text-gray-600 font-nuno">EBAC</p>
                                    <p className="text-xs text-blue-600 font-semibold">574/600 (95.6%)</p>
                                </motion.div>
                            </motion.div>

                            {/* Second Row - 2 Toppers (Centered) */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.15,
                                            delayChildren: 0.4
                                        }
                                    }
                                }}
                            >
                                {/* Topper 4 */}
                                <motion.div
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/4.%20PRAPTHA%20GATTY%20%28PCMB%29%20574%20%2895.6%25%29.jpg"
                                            alt="PRAPTHA GATTY - PCMB Topper"
                                            className="h-[325px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '285px' }}
                                            loading="lazy"
                                        />

                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">PRAPTHA GATTY</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMB</p>
                                    <p className="text-xs text-blue-600 font-semibold">574/600 (95.6%)</p>
                                </motion.div>

                                {/* Topper 5 */}
                                <motion.div
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/5.%20AYISHA%20SAFREENA%20%28EBAC%29%20569%20%2894.8%25%29.jpg"
                                            alt="AYISHA SAFREENA - EBAC Topper"
                                            className="h-[320px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />

                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">AYISHA SAFREENA</h4>
                                    <p className="text-xs text-gray-600 font-nuno">EBAC</p>
                                    <p className="text-xs text-blue-600 font-semibold">569/600 (94.8%)</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Sports Achievements Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                                Sports Excellence
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-slate-600 mx-auto"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </motion.div>

                        {/* Primary Achievement Block - State Champions */}
                        <motion.div
                            className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 md:p-8 mb-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                {/* State Team Image - Left Column (60%) */}
                                <motion.div
                                    className="lg:w-3/5"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <img
                                        src="/src/assets/hockey_team.webp"
                                        alt="2025 State Hockey Champions"
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                        loading="lazy"
                                    />
                                </motion.div>

                                {/* Stats & Description - Right Column (40%) */}
                                <motion.div
                                    className="lg:w-2/5 space-y-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    {/* Badge */}
                                    <motion.div
                                        className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.0, type: "spring", bounce: 0.3 }}
                                    >
                                        STATE TEAM
                                    </motion.div>

                                    {/* Headline */}
                                    <motion.h3
                                        className="text-2xl md:text-3xl font-bold text-gray-800 font-merri"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1.1 }}
                                    >
                                        2025 Hockey State Level Team
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-700 leading-relaxed font-nuno text-base"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                    >
                                        Earning a place in the State Level championships is a significant achievement in itself. Our hockey team demonstrated remarkable teamwork and determination throughout the season, proudly representing our college against top-tier competition from across Karnataka.
                                    </motion.p>

                                    {/* Key Stats */}
                                    <motion.div
                                        className="space-y-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1.3 }}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">🎯</span>
                                            <span className="text-gray-800 font-nuno text-sm">Representing: Karnataka</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Secondary Achievements Grid - Taluk Level */}
                        <motion.div
                            className="grid md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {/* Girls Hockey Team Card */}
                            <motion.div
                                className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                {/* Image Section */}
                                <div className="h-70 overflow-hidden">
                                    <img
                                        src="/src/assets/talukRunners_girls.jpg"
                                        alt="Girls Hockey Team - Taluk Champions"
                                        className="w-full h-[550px] object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 space-y-4">
                                    {/* Badge */}
                                    <motion.div
                                        className="inline-block bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3, type: "spring", bounce: 0.3 }}
                                    >
                                        TALUK RUNNERS
                                    </motion.div>

                                    {/* Team Title */}
                                    <motion.h4
                                        className="text-xl font-bold text-gray-800 font-merri"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        Girls Volleyball Team
                                    </motion.h4>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-700 font-nuno text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        Secured the Taluk Runner's Up Position with an undefeated run.
                                    </motion.p>


                                </div>
                            </motion.div>

                            {/* Boys Hockey Team Card */}
                            <motion.div
                                className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                {/* Image Section */}
                                <div className="h-70 overflow-hidden">
                                    <img
                                        src="/src/assets/talukRunners_boys.jpg"
                                        alt="Boys Hockey Team - Taluk Champions"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 space-y-4">
                                    {/* Badge */}
                                    <motion.div
                                        className="inline-block bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3, type: "spring", bounce: 0.3 }}
                                    >
                                        TALUK RUNNERS
                                    </motion.div>

                                    {/* Team Title */}
                                    <motion.h4
                                        className="text-xl font-bold text-gray-800 font-merri"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        Boys Volleyball Team
                                    </motion.h4>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-700 font-nuno text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        Dominant performance throughout the Taluk tournament.
                                    </motion.p>



                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Achievement Summary */}
                    <motion.div
                        className="text-center bg-gradient-to-br from-red-50 via-blue-50 to-yellow-50 rounded-lg shadow-md p-8 border border-red-100"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h3
                            className="text-3xl font-bold text-red-800 font-merri mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Overall Achievements 2024-25
                        </motion.h3>

                        {/* 100% Result Banner */}
                        <motion.div
                            className="mb-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-6 shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.h4
                                className="text-2xl font-bold font-merri mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                🎉 100% Academic Success Rate
                            </motion.h4>
                            <motion.p
                                className="text-base font-nuno"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Rotary PU College achieved 100% pass percentage in the 2024-25 academic year
                            </motion.p>
                        </motion.div>

                        {/* Main Achievements Text */}
                        <motion.div
                            className="space-y-6 mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.6
                                    }
                                }
                            }}
                        >
                            {/* Academic Toppers */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-blue-600 mb-2">27+</div>
                                <div className="text-xl font-semibold text-blue-800 font-merri mb-1">Academic Toppers</div>
                                <div className="text-sm text-blue-600 font-nuno">Students scoring 90% and above</div>
                            </motion.div>

                            {/* Sports Achievements */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-yellow-600 mb-2">3x</div>
                                <div className="text-xl font-semibold text-yellow-800 font-merri mb-1">Taluk Winners</div>
                                <div className="text-sm text-yellow-600 font-nuno">Volleyball Teams - Boys & Girls</div>
                            </motion.div>

                            {/* State Level Team */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-red-600 mb-2">1</div>
                                <div className="text-xl font-semibold text-red-800 font-merri mb-1">State Level Team</div>
                                <div className="text-sm text-red-600 font-nuno">Hockey Champions representing Karnataka</div>
                            </motion.div>
                        </motion.div>

                        {/* Additional Highlights */}
                        <motion.div
                            className="bg-white/70 rounded-lg p-6 mb-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <motion.h4
                                className="text-2xl font-bold text-gray-800 font-merri mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                🏆 Additional Highlights
                            </motion.h4>
                            <motion.div
                                className="grid md:grid-cols-2 gap-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 1.2
                                        }
                                    }
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="flex flex-col items-center text-center space-y-2"
                                >
                                    <span className="text-blue-600 text-2xl">🎓</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 font-merri">Best Academic Performance</div>
                                        <div className="text-sm text-gray-600 font-nuno">District Level Recognition</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="flex flex-col items-center text-center space-y-2"
                                >
                                    <span className="text-yellow-600 text-2xl">🤝</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 font-merri">Rotaract Club</div>
                                        <div className="text-sm text-gray-600 font-nuno">Community Service Excellence</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="flex flex-col items-center text-center space-y-2"
                                >
                                    <span className="text-red-600 text-2xl">🎨</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 font-merri">Cultural Excellence</div>
                                        <div className="text-sm text-gray-600 font-nuno">Multiple Event Wins</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="flex flex-col items-center text-center space-y-2"
                                >
                                    <span className="text-blue-600 text-2xl">🏃‍♂️</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 font-merri">Athletic Champions</div>
                                        <div className="text-sm text-gray-600 font-nuno">Individual Excellence Awards</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        >
                            <p className="text-lg font-semibold font-merri">
                                "Excellence is not just a goal, it's our tradition at Rotary PU College."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ResultsPage;
