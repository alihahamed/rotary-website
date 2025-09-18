import campusImg from "../assets/campus-rotory.jpg";
import labImg from "../assets/lab.jpg";
import commerceImg from "../assets/commerce.webp";

function Facilities() {
  const cards = [
    { title: "Sports & Athletics", desc: "Stay active with various sports and fitness programs", img: campusImg, link:"/" },
    { title: "Cultural Events", desc: "Express creativity through festivals and performances", img: campusImg },
    { title: "Study Groups", desc: "Collaborative learning in our modern library", img: commerceImg },
    { title: "Campus Social Life", desc: "Build lifelong friendships and connections", img: commerceImg },
    { title: "Tech Workshops", desc: "Learn cutting-edge technology and skills", img: labImg },
    { title: "Outdoor Adventures", desc: "Explore nature with educational trips", img: campusImg },
  ];
  return (
    <div>
      <div className="min-h-screen w-full bg-white relative text-gray-800 ">
        {/* Crosshatch Art - Light Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
          }}
        />
        {/* Your Content/Components */}

        <section className="mx-auto border  rounded-bl-4xl rounded-br-4xl">
          <div className="text-center px-6 pt-8 md:pt-12 ">
            <h2 className="font-merri text-5xl tracking-wide font-bold text-gray-800 mb-6">
              Facilities & Campus Life
            </h2>
            <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed font-nuno">
              Explore the resources and activities that make learning at Rotary PU College vibrant and engaging.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6 pb-12 cursor-pointer">
            {cards.map((c, i) => (
              <a href={c.link}>
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition group ring-1 ring-black/5">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-50 sm:h-64 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                  <h3 className="text-white font-merri text-xl sm:text-2xl font-bold drop-shadow-md tracking-wide">{c.title}</h3>
                  <p className="text-white/90 font-nuno mt-2 text-sm sm:text-base drop-shadow">{c.desc}</p>
                </div>
              </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Facilities;
