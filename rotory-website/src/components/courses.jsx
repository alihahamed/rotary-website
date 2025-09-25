// import { FlaskConical, ChartNoAxesCombined } from "lucide-react";

import { Atom } from '../icons/atom';
import { ChartNoAxes } from '../icons/chart';
import lab from '../assets/geminilab.png'
import commerce from '../assets/geminicommerce.png'

function Courses() {
  return (
    <div className="courses-background">
    <div className="w-full bg-white relative text-gray-800 pb-10 rounded-br-4xl rounded-bl-4xl border-b border-t border-amber-100 ">
  {/* Zigzag Lightning - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
    }}
  />
  {/* Your Content/Components */}

      <div className="text-center mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-merri text-blue-900 font-bold tracking-wide pt-6 md:pt-10">Our Academic Programs</h2>
        <p className="font-nuno text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium">Choose from our Comprehensive Programs Designed For Your Success</p>
      </div>

    
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto px-4">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-xl card-lg border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <figure>
          <img
            src={lab}
            alt="Shoes"
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
            <button className="btn px-6 py-2 rounded-lg font-nuno w-full text-white text-[16px] font-semibold 
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
             hover:from-blue-600 hover:to-blue-800 transition-all">Explore More</button>
          </div>
        </div>
      </div>

        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-xl card-lg border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <figure className="">
          <img
            src={commerce}
            alt="Shoes"
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
            <button className="btn px-6 py-2 rounded-lg text-white font-nuno w-full text-[16px] font-semibold 
        bg-gradient-to-r from-red-700 via-red-800 to-yellow-600 
      hover:from-red-800 hover:to-yellow-700 transition-all">Explore More</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    

    


  );
}

export default Courses;
