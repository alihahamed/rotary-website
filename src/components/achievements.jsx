import { PartyPopper } from "../icons/party";
import { motion } from 'framer-motion'

function Achievements() {
  return (
    <div>
      <section className="mx-auto rounded-bl-4xl rounded-br-4xl bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-100/60 border-b border-amber-200 border-t ">
        <div className="text-center mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide pt-6 md:pt-9 flex flex-col sm:flex-row justify-center items-center text-gray-800 font-merri">
            <span className="mb-2 sm:mb-0">Our Achievements</span>
            <PartyPopper stroke="#374151" className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 mt-2 sm:mt-0 sm:ml-3" />
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto mt-4"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium font-nuno">
            Celebrating excellence in academics and student success
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8  mx-auto px-4 sm:px-5 pb-8 md:pb-12 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div
            className="card w-full bg-base-100 card-lg shadow-2xl rounded-[60px] border-2 border-red-200 bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-3xl hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title  mb-5 bg-gradient-to-l from-[#b91c1c] via-[#ef4444] to-[#fca5a5] p-4 rounded-[50px] text-white border-2 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
              </h2>
              <p className="font-merri text-2xl md:text-3xl font-medium text-red-500">
                95 %
              </p>
              <p className="font-nuno text-gray-600 font-medium text-sm md:text-base">
                Pass percentage
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card w-full bg-base-100 card-lg shadow-2xl rounded-[60px] border-2 border-yellow-200 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-3xl hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="card-body flex justify-center items-center ">
              <h2 className="card-title  mb-5 bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] rounded-[50px] p-5 text-white border-2 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </h2>
              <p className="font-merri text-2xl md:text-3xl font-medium text-yellow-500">
                200+
              </p>
              <p className="font-nuno text-gray-600 font-medium text-sm md:text-base">
                Students Graduated Annually
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card w-full bg-base-100 card-lg shadow-2xl rounded-[60px] border-2 border-blue-200 bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-3xl hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="card-body flex justify-center items-center ">
              <h2 className="card-title  mb-5 bg-gradient-to-r from-[#06b6d4] via-[#2563eb] to-[#6366f1] rounded-[50px] p-5 text-white border-2 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </h2>
              <p className="font-merri text-2xl md:text-3xl font-medium text-blue-500">
                10+
              </p>
              <p className="font-nuno text-gray-600 font-medium text-sm md:text-base">
                Years Of Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
export default Achievements;
