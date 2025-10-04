import TopAnnouncement from '../components/TopAnnouncement';
import { motion } from 'framer-motion'

function AdmissionsPage() {
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
            <TopAnnouncement  />
            <section className="py-12 md:py-16 relative z-10 " id='admissions'>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Admission Requirements & Eligibility Section */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                            Admission Requirements & Eligibility
                        </h2>
                        <motion.div className="w-24 h-1 bg-red-700 mx-auto mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="max-w-4xl mx-auto">
                            {/* Academic Eligibility */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri flex items-center">

                                        Academic Eligibility
                                    </h3>
                                    <motion.div className="w-16 h-1 bg-blue-700 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}></motion.div>
                                </div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <ul className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg space-y-3">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Passing of 10th standard (SSLC/ICSE/CBSE or equivalent)
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Pass in English language subject
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Age Requirements */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri flex items-center">

                                        Age Requirements
                                    </h3>
                                    <motion.div className="w-16 h-1 bg-yellow-500 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.4 }}></motion.div>
                                </div>
                                
                                <div className="bg-white/50 rounded-lg p-4">
                                    <ul className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg space-y-3">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Student should be above 16 years of age
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Required Documents */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri flex items-center">

                                        Required Documents
                                    </h3>
                                    <motion.div className="w-16 h-1 bg-red-600 mx-0 mt-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }}></motion.div>
                                </div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2 font-merri">Academic Documents</h4>
                                            <ul className="text-gray-700 leading-relaxed font-nuno text-sm md:text-base space-y-2">
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    10th Standard Mark Sheet
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    10th Standard Pass Certificate
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Transfer Certificate
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Bank Passbook
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2 font-merri">Personal Documents</h4>
                                            <ul className="text-gray-700 leading-relaxed font-nuno text-sm md:text-base space-y-2">
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Recent Passport Size Photos (4 copies)
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Aadhaar Card Copy
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Caste Certificate (if applicable)
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    Medical Certificate
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Reservation Policy */}
                            {/* <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri flex items-center">
                                        <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-white font-bold text-lg">📚</span>
                                        </div>
                                        Academic Eligibility
                                    </h3>
                                    <motion.div className="w-16 h-1 bg-blue-700 mx-0 mt-2" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}></motion.div>
                                </div>
                                <div className="bg-white/50 rounded-lg p-4">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3 font-merri">Category-wise Reservation</h4>
                                            <ul className="text-gray-700 leading-relaxed font-nuno text-sm md:text-base space-y-2">
                                                <li><strong>SC/ST:</strong> 15% + 7.5% = 22.5%</li>
                                                <li><strong>OBC:</strong> 27%</li>
                                                <li><strong>Physically Challenged:</strong> 3%</li>
                                                <li><strong>Management Quota:</strong> 10%</li>
                                                <li><strong>General:</strong> 37.5%</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3 font-merri">Additional Benefits</h4>
                                            <ul className="text-gray-700 leading-relaxed font-nuno text-sm md:text-base space-y-2">
                                                <li>• Fee concessions for eligible categories</li>
                                                <li>• Scholarship programs available</li>
                                                <li>• Special consideration for sports achievers</li>
                                                <li>• Sibling concessions</li>
                                                <li>• Alumni ward benefits</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div> */}

                            {/* Important Notes */}
                            {/* <motion.div
                                className="border-t border-gray-300 pt-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-merri flex items-center">
                                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white font-bold text-sm">⚠️</span>
                                    </div>
                                    Important Notes
                                </h3>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <ul className="text-gray-700 leading-relaxed font-nuno text-sm md:text-base space-y-2">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            All admissions are subject to verification of original documents
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Admission is confirmed only after fee payment and seat allotment
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            The college reserves the right to cancel admission if false information is provided
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            For any admission-related queries, contact the admission office
                                        </li>
                                    </ul>
                                </div>
                            </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AdmissionsPage
