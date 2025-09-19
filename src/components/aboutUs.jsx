// import  { Dot } from 'lucide-react'
// import { LibraryBig } from 'lucide-react'
import { SwatchBook } from "../icons/book";
import campus from "../assets/campus.webp";

function AboutUs() {
  return (
    <div>
      {/* <div className="w-full bg-[#fff9f5] relative  border-b border-b-gray-400"> */}
        {/* Warm Light Apricot & Coral */}
        {/* <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 30%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.25) 0%, transparent 20%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
          }}
        /> */}
        {/* Your Content/Components */}

        <section
          id="about"
          className="py-23  rounded-bl-4xl rounded-br-4xl bg-gradient-to-br from-stone-50 to-amber-100/50 border-b border-b-amber-100"
        >
          <div className="container mx-auto px-6 sm:px-6 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[47px] font-bold text-gray-800 mb-8 font-merri tracking-wide flex justify-center items-center ">
                  About Rotary PU College
                  <SwatchBook stroke="#374151" className="ml-3 w-9 h-9" />
                </h2>
                <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed font-nuno">
                  Rotary PU College is a student-friendly campus where quality
                  education meets excellent facilities. We are committed to
                  shaping young minds by blending academic excellence with
                  holistic development. At Rotary, the right atmosphere
                  motivates students to learn, explore, and discover their true
                  potential
                </p>
                <ul className="text-xl font-medium text-gray-600 mb-8 leading-relaxed font-nuno list-none space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Well-equipped classrooms for interactive learning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>Modern laboratories for practical exposure.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      A rich library with books and digital resources.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Sports and cultural activities that build creativity and
                      teamwork
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 mt-1 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      Dedicated faculty and mentors who guide and support every
                      student.
                    </span>
                  </li>
                  <div className="flex justify-center items-center">
                    <button className="btn btn-outline bg-yellow-200 mt-5">
                      Learn More About Us
                    </button>
                  </div>
                </ul>
              </div>
              <div>
                <img
                  src={campus}
                  alt=""
                  className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    // </div>
  );
}
export default AboutUs;
