// import { FlaskConical, ChartNoAxesCombined } from "lucide-react";

import { Atom } from '../icons/atom';
import { ChartNoAxes } from '../icons/chart';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Courses() {

  
  const navigate = useNavigate()
  const handleCourse = (sectionId) => {
    navigate('/courses')

    setTimeout(() => {
        const element = document.getElementById(sectionId)
        if(element) {
          element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 100)
  }

  return (
    <div className="w-full relative bg-white">
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

      {/* Minimal Header */}
      <div className="relative z-10 text-center py-8 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-merri text-blue-900 font-bold tracking-wide">Our Academic Programs</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4"></div>
      </div>

      {/* Split Card Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 py-8 max-w-7xl mx-auto">

        {/* Science Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col md:flex-row h-auto md:h-80">

            {/* Mobile: Top, Desktop: Left Colored Section - Science */}
            <div className="flex-1 md:flex-1 bg-gradient-to-br from-teal-600 to-cyan-500 relative overflow-hidden h-48 md:h-auto">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Large White Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Atom className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white drop-shadow-lg" />
              </div>
            </div>

            {/* Mobile: Bottom, Desktop: Right Content Section */}
            <div className="flex-1 bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-merri font-bold text-gray-900 leading-tight">
                  Science Stream
                </h3>
                <p className="font-nuno text-gray-600 text-sm md:text-base leading-relaxed">
                  Explore the world of science with combinations like PCMB (Physics, Chemistry, Mathematics, Biology) and PCMC (Physics, Chemistry, Mathematics, Computer Science).
                </p>
                <div className="pt-3 md:pt-4">
                  <button
                    onClick={() => handleCourse('scienceStream')}
                    className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white font-nuno font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 text-sm md:text-base"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commerce Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col md:flex-row h-auto md:h-80">

            {/* Mobile: Top, Desktop: Left Colored Section - Commerce */}
            <div className="flex-1 md:flex-1 bg-gradient-to-br from-orange-600 to-amber-500 relative overflow-hidden h-48 md:h-auto">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Large White Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ChartNoAxes className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white drop-shadow-lg" />
              </div>
            </div>

            {/* Mobile: Bottom, Desktop: Right Content Section */}
            <div className="flex-1 bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-merri font-bold text-gray-900 leading-tight">
                  Commerce Stream
                </h3>
                <p className="font-nuno text-gray-600 text-sm md:text-base leading-relaxed">
                  Our Commerce stream offers combinations like EBAS, CEBA, and SEBA, covering Economics, Business Studies, Accountancy, Statistics, and Computer Science.
                </p>
                <div className="pt-3 md:pt-4">
                  <button
                    onClick={() => handleCourse('comStream')}
                    className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-nuno font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 text-sm md:text-base"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    

    


  );
}

export default Courses;
