import { Users } from "../icons/users";
import { ChevronRight } from "../icons/chevronRight";
import { ChevronLeft } from "../icons/chevronLeft";
function Testimonials() {
  return (
    <div>
      <div className="w-full bg-white relative text-gray-800  border-t border-amber-100 rounded-br-4xl rounded-bl-4xl">
        {/* Circuit Board - Light Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />
        {/* Your Content/Components */}

        <section className="pb-8">
          <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-5xl 2xl:text-5xl font-bold tracking-wide pt-9  flex justify-center items-center text-red-800 font-merri">
              Voices of Our Alumni
              <Users
                stroke="#991B1B"
                className="ml-3 w-6 h-6 2xl:w-8 2xl:h-8"
              />
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-gray-600 mt-5 font-medium font-nuno">
              Graduates share their journey and memories with us.
            </p>
          </div>

          <div className="card max-w-5xl rounded-3xl card-lg shadow-sm mx-auto bg-gradient-to-br from-blue-300 via-sky-50 to-indigo-300 p-5">
            <div className="card-body flex flex-col justify-center items-center ">
              {/* Large Quotation Mark SVG */}
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-blue-600 opacity-40"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="card-title text-center italic text-gray-800 font-nuno">"I feel truly blessed to have completed both my schooling and
                pre-university studies at this esteemed institution. From my
                early years until PU completion, the teachers provided
                exceptional guidance, instilling values of discipline, hard
                work, and integrity while offering countless opportunities for
                academic and extracurricular growth. The friendly environment
                helped me build confidence and leadership skills, and I'm proud
                to be an alumnus of this remarkable institution that prioritizes
                both quality education and overall development."</h2>
              <p className=" text-center text-gray-800 mt-5 font-extrabold font-merri text-xl">
                Melisha Miranda
              </p>
              <p className="text-center text-gray-600 font-nuno font-medium text-lg/ ">
                Class of 2023
              </p>

              <div className="flex gap-4 justify-center card-actions mt-3">
                <button className="btn btn-outline rounded-[50px] bg-white"><ChevronLeft stroke="#1e40af" /></button>
                <button className="btn btn-outline rounded-[50px] bg-white"><ChevronRight stroke="#1e40af" /></button>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
