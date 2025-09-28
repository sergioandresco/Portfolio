import { SlLink } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

function HeroDetailProject({title, projectUrl, projectRepository} : {title: string, projectUrl: string, projectRepository: string}) {
    return ( 
        <div
            className="
                flex
                items-center
                h-[40dvh]
                sm:h-[30dvh]
                flex-col
                sm:flex-col
                justify-center
                gap-[25px]
                py-0
                md:py-[90px]
                mx-[18px]
                my-0
                md:my-[90px]
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
                            sm:text-[88px]
                            leading-[64px]
                            sm:leading-[108px]
                        "
                    >{title}</h2>
                </div>
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-center
                    md:items-start
                    md:flex-row
                    gap-[3px]
                    md:gap-[46px]
                "
            >
                <div>
                    <a 
                        href={projectUrl}
                        className="
                            flex
                            flex-row
                            items-center
                            gap-[14px]
                        "
                        target="_blank"
                    >
                        <SlLink color="white" className="w-[30px] md:w-[35px] h-[30px] md:h-[35px]"/>
                        <p className="text-[35px] md:text-[35px]">
                            Live
                        </p>
                    </a>
                </div>
                <div>
                    <a 
                        href={projectRepository}
                        className="
                            flex
                            flex-row
                            items-center
                            gap-[14px]
                        "
                        target="_blank"
                    >
                        <FaGithub color="white" className="w-[30px] md:w-[35px] h-[30px] md:h-[35px]"/>
                        <p className="text-[30px] md:text-[35px]">
                            Repository
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default HeroDetailProject;