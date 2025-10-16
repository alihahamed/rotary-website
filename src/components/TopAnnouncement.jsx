function TopAnnouncement() {

    return (
        <div className="bg-gradient-to-r from-red-800 via-blue-800 to-yellow-600 text-white h-10 overflow-hidden relative border border-b-yellow-200">
            <div className="flex items-center h-full">
                <div className="animate-marquee whitespace-nowrap font-nuno font-bold text-base">
                    <span className="mr-8">🎓 Admission's Open - Apply Now!</span>
                    <span className="mr-8">📞 +91 8258298524</span>
                    <span className="mr-8">✉️ info@rotarycollege.edu</span>
                    <span className="mr-8">🏆 Consistent 96%+ Success Rate</span>
                    <span className="mr-8">🎓 Admission's Open - Apply Now!</span>
                    <span className="mr-8">📞 +91 8258298524</span>
                    <span className="mr-8">✉️ info@rotarycollege.edu</span>
                    <span className="mr-8">🏆 Consistent 96%+ Success Rate</span>
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
