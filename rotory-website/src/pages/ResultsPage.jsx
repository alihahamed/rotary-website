import TopAnnouncement from '../components/TopAnnouncement';

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
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri mb-4">
                            Academic & Sports Results
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                            Celebrating excellence in academics and athletics
                        </p>
                    </div>

                    {/* Academic Toppers Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                                Academic Excellence 2024-25
                            </h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                        </div>

                        <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-12">
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 ">
                                {/* Topper 1 */}
                                <div className="text-center">
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/1.%20ANUSHREE%20%28PCMB%29%20580%20%2896.6%25%29.jpg"
                                            alt="ANUSHREE - PCMB Topper"
                                            className="h-[370px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">ANUSHREE</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMB</p>
                                    <p className="text-xs text-blue-600 font-semibold">580/600 (96.6%)</p>
                                </div>

                                {/* Topper 2 */}
                                <div className="text-center">
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/2.%20KSHITHI%20U%20SHETTY%20%28PCMC%29%20576%20%2896%25%29.jpg"
                                            alt="KSHITHI U SHETTY - PCMC Topper"
                                            className="h-[370px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">KSHITHI U SHETTY</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMC</p>
                                    <p className="text-xs text-blue-600 font-semibold">576/600 (96%)</p>
                                </div>

                                {/* Topper 3 */}
                                <div className="text-center">
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/3.%20SAKSHI%20%28EBAC%29%20574%20%2895.6%25%29.jpg"
                                            alt="SAKSHI - EBAC Topper"
                                            className="h-[370px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">SAKSHI</h4>
                                    <p className="text-xs text-gray-600 font-nuno">EBAC</p>
                                    <p className="text-xs text-blue-600 font-semibold">574/600 (95.6%)</p>
                                </div>

                                {/* Topper 4 */}
                                <div className="text-center">
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/4.%20PRAPTHA%20GATTY%20%28PCMB%29%20574%20%2895.6%25%29.jpg"
                                            alt="PRAPTHA GATTY - PCMB Topper"
                                            className="h-[375px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '285px' }}
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">PRAPTHA GATTY</h4>
                                    <p className="text-xs text-gray-600 font-nuno">PCMB</p>
                                    <p className="text-xs text-blue-600 font-semibold">574/600 (95.6%)</p>
                                </div>

                                {/* Topper 5 */}
                                <div className="text-center">
                                    <div className="relative mb-4 flex justify-center">
                                        <img
                                            src="/src/assets/5.%20AYISHA%20SAFREENA%20%28EBAC%29%20569%20%2894.8%25%29.jpg"
                                            alt="AYISHA SAFREENA - EBAC Topper"
                                            className="h-[370px] w-auto object-cover rounded-lg"
                                                style={{ maxWidth: '290px' }}
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 font-merri mb-1">AYISHA SAFREENA</h4>
                                    <p className="text-xs text-gray-600 font-nuno">EBAC</p>
                                    <p className="text-xs text-blue-600 font-semibold">569/600 (94.8%)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sports Achievements Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                                Sports Excellence
                            </h2>
                            <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
                        </div>

                        {/* Primary Achievement Block - State Champions */}
                        <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 md:p-8 mb-8">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                {/* State Team Image - Left Column (60%) */}
                                <div className="lg:w-3/5">
                                    <img
                                        src="/src/assets/hockey_team.webp"
                                        alt="2025 State Hockey Champions"
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Stats & Description - Right Column (40%) */}
                                <div className="lg:w-2/5 space-y-6">
                                    {/* Badge */}
                                    <div className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                                        STATE TEAM
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri">
                                        2025 Hockey State Level Team
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                        Earning a place in the State Level championships is a significant achievement in itself. Our hockey team demonstrated remarkable teamwork and determination throughout the season, proudly representing our college against top-tier competition from across Karnataka.
                                    </p>

                                    {/* Key Stats */}
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">🎯</span>
                                            <span className="text-gray-800 font-nuno text-sm">Representing: Karnataka</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Achievements Grid - Taluk Level */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Girls Hockey Team Card */}
                            <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
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
                                    <div className="inline-block bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                                        TALUK RUNNERS
                                    </div>

                                    {/* Team Title */}
                                    <h4 className="text-xl font-bold text-gray-800 font-merri">
                                        Girls Hockey Team
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-700 font-nuno text-lg leading-relaxed">
                                        Secured the Taluk Runner's Up Position with an undefeated run.
                                    </p>

                                    
                                </div>
                            </div>

                            {/* Boys Hockey Team Card */}
                            <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
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
                                    <div className="inline-block bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                                        TALUK RUNNERS
                                    </div>

                                    {/* Team Title */}
                                    <h4 className="text-xl font-bold text-gray-800 font-merri">
                                        Boys Hockey Team
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-700 font-nuno text-lg leading-relaxed">
                                        Dominant performance throughout the Taluk tournament.
                                    </p>

                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievement Summary */}
                    <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold text-gray-800 font-merri mb-4">
                            Overall Achievements
                        </h3>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                                <div className="text-sm text-gray-600 font-nuno">Academic Toppers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                                <div className="text-sm text-gray-600 font-nuno">State Level Team</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                                <div className="text-sm text-gray-600 font-nuno">Athletic Champions</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                <div className="text-sm text-gray-600 font-nuno">Success Rate</div>
                            </div>
                        </div>
                        <div className="mt-6 bg-white/50 rounded-lg p-4">
                            <p className="text-gray-700 font-nuno text-base">
                                "Excellence is not just a goal, it's our tradition at Rotary PU College."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResultsPage;
