function TopAnnouncement() {

    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 text-white h-7 overflow-hidden relative border-2 border-b-orange-700 ">
            <div className="flex items-center h-full">
                <div className="animate-marquee whitespace-nowrap font-nuno text-sm font-medium">
                    <span className="mr-8">🎓 Admission's Open - Apply Now!</span>
                    <span className="mr-8">📞 +91 8258298524</span>
                    <span className="mr-8">✉️ info@rotarycollege.edu</span>
                    <span className="mr-8">🎓 Admission's Open - Apply Now!</span>
                    <span className="mr-8">📞 +91 8258298524</span>
                    <span className="mr-8">✉️ info@rotarycollege.edu</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default TopAnnouncement
