function AdmissionBanner() {
  return (
    <div>
      <section className="bg-red-800 mx-auto">
        <div className="flex justify-between items-center  px-4 sm:px-6 md:px-8 lg:px-16 py-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl 2xl:text-5xl font-bold tracking-wide text-white font-merri text-left">
              Ready To Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-white mt-5 font-medium font-nuno text-left max-w-xl">
              Join thousands of successful students who have built their careers with us. Your bright future starts here!
            </p>
          </div>

          <div className="flex space-x-4 ml-8">
            {/* CTA Buttons will go here */}
            <button className="bg-white text-red-800 px-6  rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdmissionBanner;
