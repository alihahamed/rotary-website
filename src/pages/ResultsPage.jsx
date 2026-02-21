import { useState, useEffect } from "react";
import TopAnnouncement from "../components/TopAnnouncement";
import { motion } from "framer-motion";
import { GraduationCap, Palette, Trophy, Award } from "lucide-react";
import rotaractLogo from "../assets/rotaract-logo.jpg";
import SEOHead from "../components/SEOHead";
import { supabase } from "../lib/supabase";

function ResultsPage() {
  const [toppers, setToppers] = useState([]);
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    setLoading(true);

    const [toppersResponse, sportsResponse] = await Promise.all([
      supabase
        .from("toppers")
        .select("*")
        .order("percentage", { ascending: false }),
      supabase
        .from("sports_achievements")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);

    if (!toppersResponse.error && toppersResponse.data) {
      setToppers(toppersResponse.data);
    }

    if (!sportsResponse.error && sportsResponse.data) {
      setSports(sportsResponse.data);
    }

    setLoading(false);
  };

  return (
    <div className="w-full bg-white relative">
      <SEOHead
        title="Results & Achievements | 100% Pass Rate — Rotary PU College"
        description="Discover the outstanding academic and sports achievements of Rotary Pre-University College students. Celebrating 100% results and state-level athletic success."
      />
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
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                Academic Excellence
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
              className="bg-linear-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : toppers.length === 0 ? (
                <div className="text-center py-12 text-gray-500 font-nuno">
                  No academic toppers recorded yet.
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {toppers.map((topper) => (
                    <motion.div
                      key={topper.id}
                      className="text-center"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.6 },
                        },
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="relative mb-4 flex justify-center">
                        {topper.image_url ? (
                          <img
                            src={topper.image_url}
                            alt={`${topper.name} - ${topper.stream} Topper`}
                            className="h-[320px] w-auto object-cover rounded-lg shadow-md"
                            style={{ maxWidth: "290px" }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-[320px] w-[220px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                            <GraduationCap className="h-16 w-16 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 font-merri mb-1 uppercase">
                        {topper.name}
                      </h4>
                      <p className="text-sm text-gray-600 font-nuno">
                        {topper.stream} {topper.year && `(${topper.year})`}
                      </p>
                      <p className="text-sm text-blue-600 font-semibold mt-1">
                        {topper.marks ? `${topper.marks} ` : ""}
                        {topper.percentage ? `(${topper.percentage}%)` : ""}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merri mb-4">
                Sports Achievements
              </h2>
              <motion.div
                className="w-24 h-1 bg-red-600 mx-auto mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              </div>
            ) : sports.length === 0 ? (
              <div className="text-center py-12 text-gray-500 font-nuno">
                No sports achievements recorded yet.
              </div>
            ) : (
              <div className="space-y-12 max-w-5xl mx-auto">
                {sports.map((sport, index) => (
                  <motion.div
                    key={sport.id}
                    className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full md:w-1/2">
                      {sport.image_url ? (
                        <img
                          src={sport.image_url}
                          alt={sport.title}
                          className="rounded-xl shadow-md w-full h-auto object-cover max-h-[400px]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Trophy className="h-16 w-16 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
                      <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                        <Trophy size={16} />
                        <span>{sport.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4 leading-tight">
                        {sport.title}
                      </h3>
                      {sport.description && (
                        <p className="text-gray-600 font-nuno text-base md:text-lg leading-relaxed">
                          {sport.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Extracurricular Activities Overview */}
          <motion.div
            className="mb-16 mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-linear-to-br from-indigo-900 via-blue-900 to-indigo-800 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold font-merri mb-4">
                    Beyond the Classroom
                  </h2>
                  <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                  <p className="mt-6 text-indigo-100 font-nuno text-lg max-w-2xl mx-auto">
                    We believe in holistic development. Our students actively
                    participate in various co-curricular activities that build
                    character, leadership, and creativity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Palette className="text-indigo-900" size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-merri mb-2 text-white">
                      Cultural Events
                    </h3>
                    <p className="text-indigo-100 font-nuno text-sm">
                      Regular competitions in dance, music, debate, and fine
                      arts nurture creative talents and boost confidence.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Award className="text-indigo-900" size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-merri mb-2 text-white">
                      Leadership
                    </h3>
                    <p className="text-indigo-100 font-nuno text-sm">
                      Student council, class representation, and organizing
                      committees develop essential management and leadership
                      skills.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all items-center">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <img
                        src={rotaractLogo}
                        className="w-8"
                        alt="Rotaract Logo"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-merri mb-2 text-white">
                      Interact Club
                    </h3>
                    <p className="text-indigo-100 font-nuno text-sm">
                      Sponsored by Rotary Club, students engage in community
                      service, blood donation camps, and social awareness
                      programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
