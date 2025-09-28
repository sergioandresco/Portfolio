function Hero({ title, videoUrl }: { title: string, videoUrl: string }) {
    return (
        <div
            className="
                flex
                items-center
                h-[80dvh]
                sm:h-[65dvh]
                flex-col
                sm:flex-row
                justify-center
            "
        >
            <div>
                <div 
                    className="
                        title-hero
                        max-w-[1000px]
                    "
                >
                    <h2
                        className="
                            text-white
                            text-center
                            sm:text-start
                            text-[50px]
                            sm:text-[76px]
                            leading-[64px]
                            sm:leading-[108px]
                        "
                    >{title}</h2>
                </div>
            </div>
            <div>
                <div className="video-hero">
                    <video autoPlay loop muted playsInline>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Hero;