import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import Title from "@/components/title";
import SubTitle from "@/components/subtitle";
import Paragraph from "@/components/paragraph";
import Image from "next/image";
import CarouselImages from "@/components/carousel";
import Halo from "@/resources/images/halo.webp";
import Gears from "@/resources/images/gears.jpg";
import CallOfDuty from "@/resources/images/call-of-duty.jpg";

function AboutLayout() {
    return (
        <div>
            {/* Hero */}
            <Hero 
                title="Hi, I'm Sergio. Frontend Developer."
                videoUrl="https://microsistem.s3.us-east-2.amazonaws.com/serchAnimation.webm"
            />
            <Separator className="hidden sm:block flex-1 bg-purple-300/40" />
            {/* About Me */}
            <div
                className="
                    mt-0
                    md:mt-[45px]
                    flex
                    flex-col
                    gap-[25px]
                "
            >
                <Title title="About Me" />
                <div>
                    <Paragraph 
                        texts={[
                            "👋 Hi! I'm a Systems Engineer specialized in Frontend Development, based in Colombia. I have over 4.5 years of experience working in the world of web development — building intuitive, high-performance, and visually engaging user interfaces.",
                            "I'm deeply passionate about coding, video games, soccer, and especially music. Music is a big part of my life — it helps me focus, disconnect from the outside world, and get into the flow while building great digital experiences.",
                            "I consider myself a fun, organized, and highly punctual person. I love collaborating with others, sharing my knowledge, and contributing to meaningful projects that solve real problems through technology.",
                            "In my free time, I enjoy building new web projects, discovering fresh music, and continuously learning new things. And for a last detail, I love my Country, Colombia 🇨🇴 but I love so much Argentina 🇦🇷 country too.",
                        ]}
                    />
                </div>
                <div>
                    <CarouselImages />
                </div>
            </div>
            {/* Inspiration Corner */}
            <div
                className="
                    mt-[45px]
                    flex
                    flex-col
                    gap-[25px]
                "
            >
                <Title title="Inspiration Corner"/>
                <SubTitle subTitle="Playlist" />
                <div
                    className="
                        grid
                        grid-cols-2
                        gap-[31px]
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-[31px]
                        "
                    >
                        <div>
                            <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" style={{ width: '100%', overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/co/playlist/favorites/pl.u-Ymb0vd5IgBNPzrm?l=en"></iframe>
                        </div>
                        <div>
                            <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" style={{ width: '100%', overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/co/playlist/chillhop-lofi-coding-session-instrumental-focus-beats/pl.7487e898f4d342b6affce9d99a67306e?l=en"></iframe>
                        </div>
                    </div>
                    <div
                        className="
                            flex
                            flex-col
                            gap-[31px]
                        "
                    >
                        <div>
                            <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" style={{ width: '100%', overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/co/playlist/lofi-girl-beats-to-relax-study-to/pl.u-2aoq8mqiGo7J6A0?l=en"></iframe>
                        </div>
                        <div>
                            <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" style={{ width: '100%', overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/co/playlist/gym/pl.u-RRbVvB7tm9M3Dql?l=en"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Games */}
            <div
                className="
                    mt-[45px]
                    flex
                    flex-col
                    gap-[25px]
                "
            >
                <SubTitle subTitle="Games" />
                <div
                    className="
                        grid
                        grid-cols-2
                        gap-[31px]
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-[31px]
                        "
                    >
                        <div
                            className="
                                h-[100%]
                            "
                        >
                            <a href="https://www.xbox.com/games/store/halo-infinite/9PP5G1F0C2B6/0010" target="_blank">    
                                <Image 
                                    src={Halo} 
                                    className="
                                        rounded-md
                                        h-[100%]
                                        object-cover
                                    "
                                    alt="Halo image" 
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className="
                            flex
                            flex-col
                            gap-[31px]
                        "
                    >
                        <div
                            className="
                                h-[100%]
                            "
                        >
                            <a href="https://www.xbox.com/games/gears-5" target="_blank">
                                <Image 
                                    src={Gears} 
                                    className="
                                        rounded-md
                                    "
                                    alt="Gears 5 image" 
                                />
                            </a>
                        </div>
                        <div
                            className="
                                h-[100%]
                            "
                        >
                            <a href="https://www.xbox.com/games/store/call-of-duty-warzone/9NNFG8BQRCXL/0010" target="_blank">
                                <Image 
                                    src={CallOfDuty} 
                                    className="
                                        rounded-md
                                    "
                                    alt="Call of Duty Warzone image" 
                                />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AboutLayout;