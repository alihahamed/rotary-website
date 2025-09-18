import { FlaskConical } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import Lab from '../assets/lab.jpg'
import Commerce from '../assets/commerce.jpg'


function Courses() {
  return (
    <div className="courses-background">
    <div className="min-h-screen w-full bg-white relative text-gray-800 pb-10">
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

      <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-5xl font-merri text-gray-800 font-bold tracking-wide pt-9">Our Academic Programs</h2>
        <p className="font-nuno text-2xl text-gray-600 mt-5 font-medium">Choose from our Comphrehensive Programs Designed For Your Success</p>
      </div>

    
    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      <div className="card bg-base-100 w-96shadow-xl card-lg mx-auto  border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <figure>
          <img
            src={Lab}
            alt="Shoes"
            className="rounded-tl-xl rounded-tr-xl w-full"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-merri text-gray-700 text-xl font-bold ">Science Stream <FlaskConical className="ml-1" /></h2>
          <p className="mb-5 font-nuno text-gray-600 mt-2 ">
            Explore the world of science with combinations like PCMB (Physics, Chemistry, Mathematics, Biology) and PCMC (Physics, Chemistry, Mathematics, Computer Science).
          </p>
          <div className="card-actions">
            <button className="btn px-6 py-2 rounded-lg font-nuno w-full text-white text-[16px] font-semibold 
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
             hover:from-blue-600 hover:to-blue-800 transition-all">Explore More</button>
          </div>
        </div>
      </div>

        <div className="card bg-base-100 w-96 shadow-xl card-lg mx-auto  border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <figure className="">
          <img
            src={Commerce}
            alt="Shoes"
            className="rounded-tr-xl rounded-tl-xl w-full" 
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-merri font-bold text-gray-700 ">Commerce Stream <ChartNoAxesCombined className="ml-1"/></h2>
          <p className="mb-5 font-nuno text-gray-600 mt-2">
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

 