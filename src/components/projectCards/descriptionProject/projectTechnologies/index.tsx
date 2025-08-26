import { Card } from "@/components/ui/card";
import Skills from "@/data/skills";

function ProjectTechnologies({ technologies }: { technologies: string[] }) {
    return ( 
        <div
            className="
                flex
                flex-col
                px-[18px]
                py-[90px]
            "
        >
            <div>
                <h2
                    className="
                        text-[50px]
                        sm:text-[88px]
                        text-center
                    "
                >
                    Stack
                </h2>
            </div>
            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-5
                    gap-[25px]
                "
            >
                {technologies.map((stack) => {

                    const skill = Skills.find((s) => s.technologie === stack);
                    if (!skill) return null;

                    return(
                        <Card 
                            key={stack}
                            className="
                                border-0
                                bg-[#4527A0]
                                text-white
                                rounded-md
                                shadow-lg
                                transition-transform
                                duration-300
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(124,77,255,0.6)]
                            "
                        >
                            <div
                                className="
                                    flex
                                    flex-col
                                    items-center
                                "
                            >
                                <skill.icon color="white" className="w-[40px] h-[40px]"/>
                                <h2 className="text-[30px]">
                                    {skill.technologie}
                                </h2>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectTechnologies;