import  { Dot } from 'lucide-react'
import { LibraryBig } from 'lucide-react'

function AboutUs() {
    return(
      <div>
        <div className="min-h-screen w-full bg-[#fff9f5] relative">
  {/* Warm Light Apricot & Coral */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 30%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 20%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
    }}
  />
     {/* Your Content/Components */}

        <section id="about" className="py-20  rounded-bl-4xl rounded-br-4xl border border-b-gray-400">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8 font-merri tracking-wide">About Rotary PU College <LibraryBig className='ml-1'/></h2>
              <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed font-nuno">
                    Rotary PU College is a student-friendly campus where quality education meets excellent facilities. We are committed to shaping young minds by blending academic excellence with holistic development. At Rotary, the right atmosphere motivates students to learn, explore, and discover their true potential</p>
              <ul className="text-xl font-medium text-gray-600 mb-8 leading-relaxed font-nuno list-none space-y-2">
                <li className="flex items-start">
                  <Dot className="mr-2 mt-1 text-red-600 flex-shrink-0" size={30} />
                  <span>Well-equipped classrooms for interactive learning.</span>
                </li>
                <li className="flex items-start">
                  <Dot className="mr-2 mt-1 text-red-600 flex-shrink-0" size={30} />
                  <span>Modern laboratories for practical exposure.</span>
                </li>
                <li className="flex items-start">
                  <Dot className="mr-2 mt-1 text-red-600 flex-shrink-0" size={30} />
                  <span>A rich library with books and digital resources.</span>
                </li>
                <li className="flex items-start">
                  <Dot className="mr-2 mt-1 text-red-600 flex-shrink-0" size={30} />
                  <span>Sports and cultural activities that build creativity and teamwork</span>
                </li>
                <li className="flex items-start">
                  <Dot className="mr-2 mt-1 text-red-600 flex-shrink-0" size={30} />
                  <span>Dedicated faculty and mentors who guide and support every student.</span>
                </li>
                <div className='flex justify-center items-center'>
                    <button className="btn btn-outline bg-yellow-200 mt-5">Learn More About Us</button>
                </div>
                
              </ul>
            </div>
            <div>
              <img src="" alt="" className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    )
    
}
export default AboutUs
