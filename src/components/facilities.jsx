import campusImg from '../assets/campus.webp'
import commerceImg from "../assets/commerce.webp";
import bioLab from '../assets/bio-lab.webp'
import library from '../assets/library.webp'
import sports from '../assets/sports.webp'
import midDay from '../assets/mid-day.webp'

function Facilities() {
  const cards = [
    { title: "Sports & Athletics", desc: "Stay active with various sports and fitness programs", img: sports, link:"/" },
    { title: "Cultural Events", desc: "Express creativity through festivals and performances", img: campusImg },
    { title: "Study Groups", desc: "Collaborative learning in our modern library", img: library },
    { title: "Campus Social Life", desc: "Build lifelong friendships and connections", img: commerceImg },
    { title: "Tech Workshops", desc: "Learn cutting-edge technology and skills", img: bioLab },
    { title: "Mid-Day Meals", desc: "Free Mid-Day Meals For Students", img: midDay },
  ];
  return (
    <div>
      {/* <div className="w-full bg-white relative text-gray-800 border-gray-400 border-b  "> */}
        {/* Crosshatch Art - Light Pattern */}
        {/* <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
          }}
        /> */}
        {/* Your Content/Components */}

        <section className="mx-auto   rounded-bl-4xl rounded-br-4xl bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-100/60 border-b border-t border-amber-200">
          <div className="text-center px-6 pt-8 md:pt-8 ">
            <h2 className="font-merri text-5xl tracking-wide font-bold text-gray-800 mb-6">
              Facilities & Campus Life
            </h2>
            <p className="text-2xl  font-medium text-gray-600 mb-8 leading-relaxed font-nuno">
              Explore the resources and activities that make learning at Rotary PU College vibrant and engaging.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5 pb-12 cursor-pointer">
            {cards.map((c, i) => (
              <a href={c.link}>
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition group ring-1 ring-black/5">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-58 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                  <h3 className="text-white font-merri text-xl sm:text-2xl font-bold drop-shadow-md tracking-wide">{c.title}</h3>
                  
                </div>
              </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    // </div>
  );
}
export default Facilities;
