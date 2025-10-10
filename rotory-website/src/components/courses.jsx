// import { FlaskConical, ChartNoAxesCombined } from "lucide-react";

import { Atom } from '../icons/atom';
import { ChartNoAxes } from '../icons/chart';
import lab from '../assets/geminilab.png'
import commerce from '../assets/geminicommerce.png'
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import e from 'cors';

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
      <div className="w-full relative text-gray-800 pb-10 rounded-br-4xl rounded-bl-4xl border-b border-t border-amber-100 z-10">

      <div className="text-center mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-merri text-blue-900 font-bold tracking-wide pt-6 md:pt-10">Our Academic Programs</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        <p className="font-nuno text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium">Choose from our Comprehensive Programs Designed For Your Success</p>
      </div>

    <motion.div
      className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.1
          }
        }
      }}
    >
      <motion.div
        className="card bg-base-100 w-full max-w-sm mx-auto shadow-xl card-lg border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        variants={{
          hidden: {
            opacity: 0,
            x: -60,
            scale: 0.8,
            rotateY: -15
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 50
            }
          }
        }}
      >
        <figure>
          <img
            src={lab}
            alt="Science Stream"
            className="rounded-tl-xl rounded-tr-xl w-full"
            loading="lazy"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-merri text-gray-700 text-xl md:text-2xl font-bold ">Science Stream <Atom stroke="#374151"/> </h2>
          <p className="mb-5 font-nuno text-gray-600 mt-2 text-sm md:text-base">
            Explore the world of science with combinations like PCMB (Physics, Chemistry, Mathematics, Biology) and PCMC (Physics, Chemistry, Mathematics, Computer Science).
          </p>
          <div className="card-actions">
            <button onClick={() => handleCourse('scienceStream')} className="btn px-6 py-2 rounded-lg font-nuno w-full text-white text-[16px] font-semibold
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
             hover:from-blue-600 hover:to-blue-800 transition-all inline-block text-center">Explore More</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card bg-base-100 w-full max-w-sm mx-auto shadow-xl card-lg border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        variants={{
          hidden: {
            opacity: 0,
            x: 60,
            scale: 0.8,
            rotateY: 15
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }
        }}
      >
        <figure className="">
          <img
            src={commerce}
            alt="Commerce Stream"
            className="rounded-tr-xl rounded-tl-xl w-full"
            loading="lazy"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-merri font-bold text-gray-700 text-xl md:text-2xl  ">Commerce Stream <ChartNoAxes stroke="#374151"/></h2>
          <p className="mb-5 font-nuno text-gray-600 mt-2 text-sm md:text-base">
           Our Commerce stream offers combinations like EBAS, CEBA, and SEBA, covering Economics, Business Studies, Accountancy, Statistics, and Computer Science.
          </p>
          <div className="card-actions flex justify-center items-center">
            <button onClick={() => handleCourse('comStream')} className="btn px-6 py-2 rounded-lg text-white font-nuno w-full text-[16px] font-semibold
        bg-gradient-to-r from-red-700 via-red-800 to-yellow-600
      hover:from-red-800 hover:to-yellow-700 transition-all inline-block text-center">Explore More</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </div>
    </div>
    

    


  );
}

export default Courses;
