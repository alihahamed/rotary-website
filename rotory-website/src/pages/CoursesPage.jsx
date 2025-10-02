
import { Atom } from "../icons/atom";
import { ChartNoAxes } from "../icons/chart";
import lab from "../assets/PHY-LAB.webp";
import commerce from "../assets/cs-lab.webp";
import TopAnnouncement from "../components/TopAnnouncement";
import { motion } from "framer-motion";


function CoursesPage() {

    
  
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
      <TopAnnouncement />
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
              Our Academic Programs
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-50 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </motion.div>
          </div>

          {/* Science Stream */}
          <div className="mb-12 md:mb-16" id="scienceStream">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 font-merri">
                Science Stream
              </h3>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {" "}
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>{" "}
              </motion.div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4 font-medium font-nuno">
                Rigorous academic programs for aspiring doctors, engineers, and
                researchers
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-stone-50 to-zinc-50 rounded-lg shadow-md p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <img
                    src={lab}
                    alt="Science Laboratory"
                    className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-black"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                    Why Choose Science?
                  </h4>
                  <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-4">
                    Our Science stream offers comprehensive education in
                    Physics, Chemistry, Mathematics, and Biology. With
                    state-of-the-art laboratories, experienced faculty, and
                    modern teaching methodologies, we prepare students for
                    competitive examinations and future careers in STEM fields.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                    Students receive hands-on experience through practical
                    sessions, research projects, and interactive learning,
                    ensuring they develop both theoretical knowledge and
                    practical skills essential for higher education and
                    professional success.
                  </p>
                </motion.div>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4">
                    Subject Combinations
                  </h4>
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
                          staggerChildren: 0.2,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="bg-blue-50 p-4 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h5 className="font-bold text-blue-800 font-merri text-lg mb-2">
                        PCMB (Physics, Chemistry, Mathematics, Biology)
                      </h5>
                      <p className="text-gray-700 font-nuno text-sm mb-3">
                        Ideal for students interested in Medicine,
                        Biotechnology, Pharmacy, and Biological Sciences
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Medical entrance preparation (NEET, AIIMS)</li>
                        <li>• Research-oriented learning</li>
                        <li>• Advanced laboratory work</li>
                        <li>• Career counseling for medical fields</li>
                      </ul>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 p-4 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h5 className="font-bold text-blue-800 font-merri text-lg mb-2">
                        PCMC (Physics, Chemistry, Mathematics, Computer Science)
                      </h5>
                      <p className="text-gray-700 font-nuno text-sm mb-3">
                        Perfect for students aspiring to pursue Engineering,
                        Technology, and Computer Science
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Engineering entrance coaching (JEE, KCET)</li>
                        <li>• Programming and coding skills</li>
                        <li>• Technology integration in education</li>
                        <li>• Innovation and project work</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4">
                    Career Opportunities
                  </h4>
                  <motion.div
                    className="grid md:grid-cols-3 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="text-center p-3 bg-blue-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-blue-800 font-merri">
                        Medical Sciences
                      </h6>
                      <p className="text-sm text-gray-600">
                        MBBS, BDS, BAMS, Nursing
                      </p>
                    </motion.div>
                    <motion.div
                      className="text-center p-3 bg-blue-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-blue-800 font-merri">
                        Engineering
                      </h6>
                      <p className="text-sm text-gray-600">
                        B.Tech, B.E, M.Tech
                      </p>
                    </motion.div>
                    <motion.div
                      className="text-center p-3 bg-blue-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-blue-800 font-merri">
                        Research
                      </h6>
                      <p className="text-sm text-gray-600">
                        PhD, M.Sc, Research Labs
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Commerce Stream */}
          <div className="mb-12 md:mb-16" id="commerceStream">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 font-merri">
                Commerce Stream
              </h3>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
              </motion.div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4 font-medium font-nuno">
                Building strong foundations in business, finance, and
                entrepreneurship
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-stone-50 to-zinc-50 rounded-lg shadow-md p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                    Why Choose Commerce?
                  </h4>
                  <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-4">
                    Our Commerce stream provides a comprehensive understanding
                    of business, finance, economics, and accounting. Through
                    practical learning experiences, industry exposure, and
                    professional development programs, we prepare students for
                    successful careers in the corporate world.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                    Students gain essential skills in financial literacy,
                    business management, and entrepreneurial thinking, supported
                    by experienced faculty and modern teaching methods that
                    bridge academic learning with real-world applications.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <img
                    src={commerce}
                    alt="Commerce Studies"
                    className="w-full h-64 object-cover rounded-lg shadow-md border border-black"
                  />
                </motion.div>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4">
                    Subject Combinations
                  </h4>
                  <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="bg-red-50 p-4 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h5 className="font-bold text-red-800 font-merri text-lg mb-2">
                        EBAS (Economics, Business Studies, Accountancy,
                        Statistics)
                      </h5>
                      <p className="text-gray-700 font-nuno text-sm mb-3">
                        Comprehensive business education with focus on economics
                        and data analysis
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Financial accounting and analysis</li>
                        <li>• Economic principles and market dynamics</li>
                        <li>• Statistical methods for business</li>
                        <li>• Business management fundamentals</li>
                      </ul>
                    </motion.div>
                    <motion.div
                      className="bg-red-50 p-4 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h5 className="font-bold text-red-800 font-merri text-lg mb-2">
                        CEBA (Computer Science, Economics, Business Studies,
                        Accountancy)
                      </h5>
                      <p className="text-gray-700 font-nuno text-sm mb-3">
                        Technology-integrated business education for the digital
                        age
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Computer applications in business</li>
                        <li>• Digital marketing and e-commerce</li>
                        <li>• Financial technology (FinTech)</li>
                        <li>• Data-driven business decisions</li>
                      </ul>
                    </motion.div>
                    <motion.div
                      className="bg-red-50 p-4 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h5 className="font-bold text-red-800 font-merri text-lg mb-2">
                        SEBA (Statistics, Economics, Business Studies,
                        Accountancy)
                      </h5>
                      <p className="text-gray-700 font-nuno text-sm mb-3">
                        Advanced analytics and financial expertise for modern
                        business
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced statistical analysis</li>
                        <li>• Financial modeling and forecasting</li>
                        <li>• Business intelligence and analytics</li>
                        <li>• Risk management and investment</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 font-merri mb-4">
                    Career Opportunities
                  </h4>
                  <motion.div
                    className="grid md:grid-cols-4 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="text-center p-3 bg-red-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-red-800 font-merri">
                        CA/CS
                      </h6>
                      <p className="text-sm text-gray-600">
                        Chartered Accountancy
                      </p>
                    </motion.div>
                    <motion.div
                      className="text-center p-3 bg-red-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-red-800 font-merri">
                        Banking
                      </h6>
                      <p className="text-sm text-gray-600">
                        Bank PO, Financial Services
                      </p>
                    </motion.div>
                    <motion.div
                      className="text-center p-3 bg-red-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-red-800 font-merri">
                        MBA
                      </h6>
                      <p className="text-sm text-gray-600">
                        Business Management
                      </p>
                    </motion.div>
                    <motion.div
                      className="text-center p-3 bg-red-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h6 className="font-semibold text-red-800 font-merri">
                        Entrepreneurship
                      </h6>
                      <p className="text-sm text-gray-600">
                        Start-ups, Business Ventures
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Additional Features Section */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                Additional Learning Support
              </h3>
             <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                 <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div
                className="text-center p-4 bg-blue-50 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-800 font-merri mb-2">
                  Entrance Exam Coaching
                </h4>
                <p className="text-sm text-gray-600 font-nuno">
                  Specialized coaching for KCET, JEE, NEET, CA, and ACCA
                  examinations
                </p>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-red-50 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-red-800 font-merri mb-2">
                  Modern Library
                </h4>
                <p className="text-sm text-gray-600 font-nuno">
                  Extensive collection of books, journals, and digital resources
                </p>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-yellow-50 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-yellow-800 font-merri mb-2">
                  State-of-the-Art Labs
                </h4>
                <p className="text-sm text-gray-600 font-nuno">
                  Advanced laboratories for Physics, Biology, Chemistry, and
                  Computer Science
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
