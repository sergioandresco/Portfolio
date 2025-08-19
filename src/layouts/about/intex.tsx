import TitleHero from "@/components/hero/title";
import VideoHero from "@/components/hero/video";
import { Separator } from "@/components/ui/separator";
import Title from "@/components/title";
import Paragraph from "@/components/paragraph";

function AboutLayout() {
    return (
        <div>
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
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <div
                className="
                    mt-[45px]
                    flex
                    flex-col
                    gap-[25px]
                "
            >
                <Title title="About Me" />
                <div>
                    <Paragraph 
                        texts={[
                            "👋 Hi! I'm a Systems Engineer specialized in Frontend Development, based in Colombia.I have over 4.5 years of experience working in the world of web development — building intuitive, high-performance, and visually engaging user interfaces.",
                            "I'm deeply passionate about coding, video games, soccer, and especially music. Music is a big part of my life — it helps me focus, disconnect from the outside world, and get into the flow while building great digital experiences.",
                            "I consider myself a fun, organized, and highly punctual person. I love collaborating with others, sharing my knowledge, and contributing to meaningful projects that solve real problems through technology.",
                            "In my free time, I enjoy building new web projects, discovering fresh music, and continuously learning new things.",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutLayout;