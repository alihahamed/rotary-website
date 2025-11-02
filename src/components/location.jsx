import { Suspense, lazy } from 'react';
import { Layers } from '../icons/layers';
import { Compass } from '../icons/compass';
import { MapPin, PhoneCall, MailCheck, Clock, Car, } from 'lucide-react';

// Lazy load the map component
const MapComponent = lazy(() => import('./MapComponent'));



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
        <div className=" w-full bg-white relative">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
                    backgroundSize: "40px 40px",
                }} 
            />
            <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" id='campusLocation'>
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-blue-800 font-merri">
                    Visit Our Campus
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                <p className="text-gray-600 mt-4 text-xl md:text-2xl 2xl:text-2xl font-nuno">
                    Find us on the map and get directions
                </p>
            </div>

            {/* Simplified Layout */}
            <div className="max-w-7xl mx-auto">
                {/* Address and Contact Info - Simple Text */}
                <div className="text-center mb-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-merri font-bold text-gray-800 mb-4"><MapPin className='inline-block ' size={30} color='red' /> Address</h3>
                            <p className="text-gray-700 leading-relaxed font-nuno text-lg">
                                Rotary Pre-University College, Jyotinagara<br/>
                                Moodbidri, Karnataka<br/>
                                India - 574227
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-merri font-bold text-gray-800 mb-4"><PhoneCall className='inline-block mr-2' color='red' size={30}/> Contact</h3>
                            <div className="text-gray-700 font-nuno text-lg space-y-2">
                                <p><PhoneCall className='inline-block ' size={20} /> +91 8258298524</p>
                                <p><MailCheck className='inline-block' size={20} /> info@rotarycollege.edu</p>
                                <p><Clock className='inline-block' size={20}/> Mon - Sat: 8:30 AM - 3:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map and Quick Actions */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Map - Main Feature */}
                    <div className="lg:col-span-2">
                        <Suspense fallback={
                            <div className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-200 h-[500px] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                    <p className="text-gray-600 font-nuno">Loading map...</p>
                                </div>
                            </div>
                        }>
                            <MapComponent />
                        </Suspense>
                    </div>

                    {/* Quick Actions Sidebar */}
                    <div className="space-y-6">
                        {/* Directions */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                            <h3 className="text-xl font-merri font-bold text-gray-800 mb-4"><Car className='inline-block mr-2' size={28} /> How to Reach </h3>
                            <div className="space-y-3 text-gray-600 font-nuno">
                                <div className="flex items-start">
                                    
                                    <span>5 Minute Drive From Moodbidri Bustand</span>
                                </div>
                                {/* <div className="flex items-start">
                                    <span className="font-bold mr-3">🚌</span>
                                    <span>Bus routes: 15A, 22B, 45C</span>
                                </div> */}
                                <div className="flex items-start">
                                    
                                    <span>Near Police Station, Moodbidri</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                            <h3 className="text-xl font-merri font-bold text-gray-800 mb-4"> Quick Actions</h3>
                            <div className="space-y-3">
                                <button
                                    onClick={handleClick}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center"
                                >
                                    <MapPin className='inline-block mr-2' size={24} /> Get Directions
                                </button>
                                <button onClick={handleCall} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-medium border border-gray-300 transition-colors flex items-center justify-center">
                                    <PhoneCall className='inline-block mr-2' size={22}/> Call Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )

}

export default Location
