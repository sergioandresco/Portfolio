import TitleHero from "@/components/hero/title";
import VideoHero from "@/components/hero/video";

function AboutLayout() {
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
                <TitleHero title="Hi, I'm Sergio. Frontend Developer." />
            </div>
            <div>
                <VideoHero videoURL="https://microsistem.s3.us-east-2.amazonaws.com/serchAnimation.webm" />
            </div>
        </div>
    );
}

export default AboutLayout;