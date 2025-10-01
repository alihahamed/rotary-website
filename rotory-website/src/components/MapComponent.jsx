import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const center = {
        lat: 13.068932055296235,
        lng: 75.00785375289702
    };

    const handleClick = () => {
        const url = `https://maps.google.com/maps?q=${center.lat},${center.lng}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-200">
            <MapContainer
                center={center}
                zoom={14}
                style={{ height: '500px', width: '100%' }}
                className="rounded-2xl"
                eventHandlers={{ click: handleClick }}
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
    );
}

export default MapComponent;
