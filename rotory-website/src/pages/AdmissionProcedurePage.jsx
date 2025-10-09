import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion'

function AdmissionProcedurePage() {
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
            <section className="py-12 md:py-16 relative z-10" id='admission-procedure'>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Admission Procedure Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                            Admission Procedure
                        </h2>
                        <motion.div className="w-24 h-1 bg-red-700 mx-auto mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mt-4 font-nuno"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Step-by-step guide to join Rotary PU College
                        </motion.p>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="max-w-4xl mx-auto space-y-8">
                            {/* Admission Timeline */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4 flex items-center">
                                    
                                    Admission Timeline
                                </h3>
                                <motion.div className="w-16 h-1 bg-blue-700 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}></motion.div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                        The Admission commences immediately after the announcement of S.S.L.C results.
                                    </p>
                                </div>
                            </motion.div>

                            {/* How to Apply */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4 flex items-center">
                                    
                                    How to Apply
                                </h3>
                                <motion.div className="w-16 h-1 bg-yellow-500 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.4 }}></motion.div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-4">
                                        Candidates who wish to take admission should contact the Principal/Admission office personally along with parent/guardian.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                        They should bring completely filled application form along with four passport size photographs and a statement of marks obtained in S.S.L.C Examination duly attested by the Headmaster/Principal of the School.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Required Documents */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4 flex items-center">
                                    
                                    Required Documents
                                </h3>
                                <motion.div className="w-16 h-1 bg-red-600 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }}></motion.div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-4">
                                        The documents to be submitted in original to the college office:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700 font-nuno text-base md:text-lg">Marks card of S.S.L.C or equivalent exam marks card with a Xerox copy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700 font-nuno text-base md:text-lg">Transfer certificate issued by the institution last attended with a Xerox copy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700 font-nuno text-base md:text-lg">Conduct certificate issued by the institution last attended with a Xerox copy</span>
                                        </li>
                                        
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700 font-nuno text-base md:text-lg">Caste Certificate issued by the Tahasildhar with a Xerox copy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700 font-nuno text-base md:text-lg">Income Certificate with a Xerox copy </span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Application Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4 flex items-center">
                                    
                                    Application Form
                                </h3>
                                <motion.div className="w-16 h-1 bg-blue-700 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.6 }}></motion.div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                        Application form with Prospectus can be obtained from the College or Admission Office.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Important Note */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-merri flex items-center">
                                    
                                    Important Note
                                </h3>
                                <motion.div className="w-16 h-1 bg-yellow-500 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.7 }}></motion.div>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <p className="text-yellow-800 font-nuno text-base md:text-lg font-semibold">
                                        All admissions are provisional and are subject to final approval by the Dept. of P.U. Education, Govt. of Karnataka.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AdmissionProcedurePage
