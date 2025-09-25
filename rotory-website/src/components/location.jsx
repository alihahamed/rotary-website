import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Layers } from '../icons/layers';
import { Compass } from '../icons/compass';
import 'leaflet/dist/leaflet.css';



function Location() {

    
const center = {
            lat:13.068932055296235,
            lng: 75.00785375289702
        }
    const handleClick = () => {
            const url = `https://maps.google.com/maps?q=${center.lat},${center.lng}`
            window.open(url,'_blank')
    }

    const handleCall = () => {
        window.location.href = 'tel:+918867145921'
    }

    return (
        <div className="w-full bg-white relative text-gray-800 border-t border-amber-100 rounded-br-4xl rounded-bl-4xl">
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

            {/* Content on top of background */}
            <div className="relative z-10">
                <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-blue-800 font-merri">
                    Visit Our Campus
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Find us on the map and get directions
                </p>
            </div>

            {/* Bento Box Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Info Cards - Vertical Stack */}
                <div className="space-y-6">
                    {/* Address Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl shadow-lg border border-blue-300">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-600 p-3 rounded-2xl mr-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-merri font-bold text-gray-800 tracking-wide">Address</h3>
                        </div>
                        <p className="text-blue-800 leading-relaxed font-nuno">
                            Rotary Pre-University College, Jyotinagara<br/>
                            Moodbidri, Karnataka<br/>
                            India - 574227
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl shadow-lg border border-yellow-300">
                        <div className="flex items-center mb-4">
                            <div className="bg-yellow-500 p-3 rounded-2xl mr-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-merri font-bold text-gray-800 tracking-wide">Contact</h3>
                        </div>
                        <div className="space-y-2 text-yellow-800 font-nuno">
                            <p>📞 +91 12345 67890</p>
                            <p>✉️ info@rotarycollege.edu</p>
                            <p>🕒 Mon - Sat: 8:30 AM - 2:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Center Map - Main Feature */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-200">
                        <MapContainer
                            center={center}
                            zoom={14}
                            style={{height:'500px', width:'100%'}}
                            className="rounded-2xl"
                            eventHandlers={{click:handleClick}}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker
                                position={center}
                                eventHandlers={{
                                    click: handleClick
                                }}
                            >
                                <Popup>
                                    <div className='text-center p-2'>
                                        <h3 className="font-bold text-lg mb-2">Rotary Pre-University College</h3>
                                        <p className="text-sm text-gray-600 mb-3">Click to open in Google Maps</p>
                                        <button
                                            onClick={handleClick}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                                        >
                                            🗺️ Open in Google Maps
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>

                {/* Right Info Cards - Vertical Stack */}
                <div className="space-y-6">
                    {/* Directions Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-4 rounded-3xl shadow-lg border border-red-300">
                        <div className="flex items-center mb-3">
                            <div className="bg-red-400 p-2 rounded-2xl mr-4">
                                <Compass />
                            </div>
                            <h3 className="text-xl font-merri font-bold text-gray-800 tracking-wide">How to Reach</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 font-nuno">
                            <div className="flex items-start">
                                <span className="font-bold mr-2">🚗</span>
                                <span>5 Minute Drive From Moodbidri Bustand</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-bold mr-2">🚌</span>
                                <span>Bus routes: 15A, 22B, 45C</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-bold mr-2">🚆</span>
                                <span>Near Police Station, Moodbidri</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-4 rounded-3xl shadow-lg border border-orange-200">
                        <div className="flex items-center mb-3">
                            <div className="bg-orange-400 p-2 rounded-2xl mr-4">
                                <Layers />
                            </div>
                            <h3 className="text-xl font-merri font-bold text-gray-800">Quick Actions</h3>
                        </div>
                        <div className="space-y-2">
                            <button
                                onClick={handleClick}
                                className="w-full bg-orange-300 hover:bg-orange-600 text-white py-2 px-3 rounded-xl font-medium transition-colors flex items-center justify-center"
                            >
                                🗺️ Get Directions
                            </button>
                            <button onClick={handleCall} className="w-full bg-white hover:bg-gray-50 text-orange-800 py-2 px-3 rounded-xl font-medium border border-orange-300 transition-colors flex items-center justify-center">
                                📞 Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        </div>
    )

}

export default Location
