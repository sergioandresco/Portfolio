import { Card } from "../ui/card";
import Skills from "@/data/skills";

function SkillCard() {
    return ( 
        <div
            className="
                mt-[45px]
                flex
                flex-col
                gap-[25px]
            "
        >
            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-5
                    gap-[25px]
                "
            >
                {Skills.map((skill, index) => (
                    <Card 
                        key={index}
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
                        <a href={skill.url} target="_blank">
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
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;