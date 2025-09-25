import RotaryCampus from '../assets/campus-rotory.webp'

function Hero() {
    return (
        <section id="home" className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={RotaryCampus}
            alt="Rotary PU College Campus"
            className="w-full h-full object-cover"
            fetchPriority='high'
            loading='eager'
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 sm:from-blue-900/80 to-maroon-900/50 sm:to-maroon-900/60 "></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-merri drop-shadow-lg">
              Welcome to <br />  <span className="text-yellow-400 drop-shadow-md">Rotary Pre University College</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 font-nuno drop-shadow-md">
              Empowering minds, shaping futures. Join us in pursuing academic excellence and personal growth in a vibrant learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="btn border-0 rounded-xl btn-soft bg-red-500 text-white font-nuno sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Apply now</button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base">
                Explore Campus
              </button>
            </div>
          </div>
        </div>
      </section>
    )
    
}

export default Hero
