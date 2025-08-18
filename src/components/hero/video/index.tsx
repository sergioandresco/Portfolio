function VideoHero({videoURL}: {videoURL: string}) {
    return ( 
        <div className="video-hero">
            <video autoPlay loop muted playsInline>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoHero;