import { motion } from 'framer-motion'

function AdmissionBanner() {
  return (
    <div>
      <section className="bg-red-800 mx-auto">
        <motion.div
          className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-12"
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
          {/* Left side - Heading and Description */}
          <motion.div
            className="flex-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
          >
            <h2 className="text-4xl md:text-5xl 2xl:text-5xl font-bold tracking-wide text-white font-merri text-left">
              Ready To Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-white mt-5 font-medium font-nuno text-left max-w-xl">
              Join thousands of successful students who have built their careers with us. Your bright future starts here!
            </p>
          </motion.div>

          {/* Right side - CTA Buttons */}
          <motion.div
            className="flex space-x-4 ml-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
          >
            <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
export default AdmissionBanner;
