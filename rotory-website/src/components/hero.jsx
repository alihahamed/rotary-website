import RotaryCampus from '../assets/campus-rotory.webp'

function Hero() {
    const handleExploreCampus = () => {
        const element = document.getElementById('campusLocation');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 sm:from-blue-900/80 to-maroon-900/50 sm:to-maroon-900/60 backdrop-blur-sm"></div>
          
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-merri drop-shadow-lg tracking-wide">
              Welcome to <br />  <span className="text-yellow-400 drop-shadow-md">Rotary Pre University College</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 font-nuno drop-shadow-md font-bold">
              Empowering minds, shaping futures. Join us in pursuing academic excellence and personal growth in a vibrant learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-nuno font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 text-sm sm:text-base">Apply now</button>
              <button onClick={handleExploreCampus} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-lg hover:bg-white hover:text-blue-800 transition-all duration-300 text-sm sm:text-base">
                Explore Campus
              </button>
            </div>
          </div>
        </div>
      </section>
    )
    
}

export default Hero
