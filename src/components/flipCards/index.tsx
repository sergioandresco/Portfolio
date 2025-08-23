import { Card } from "@/components/ui/card";
import ExperienceData from "@/data/experience";

function FlipCards() {
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
                    grid-cols-1
                    sm:grid-cols-2
                    gap-[25px]
                "
            >
                {ExperienceData.map((exp, index) => (
                    <div key={index} className="w-full h-[200px] perspective">
                        <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">

                            {/* Front Card */}
                            <Card className="absolute border-0 w-full h-full backface-hidden flex items-center justify-center bg-[#4527A0] text-white rounded-xl shadow-[-5px_5px_4px_0px_rgba(255,255,255,0.26)]">
                                <div className="text-center">
                                    <h3 className="text-[25px] font-bold">{exp.position}</h3>
                                    <h3 className="text-[25px]">{exp.company}</h3>
                                    <h3 className="text-[25px]">{exp.date}</h3>
                                </div>
                            </Card>

                            {/* Back Card */}
                            <Card className="absolute border-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-[#4527A0] text-white rounded-xl shadow-[-5px_5px_4px_0px_rgba(255,255,255,0.26)]">
                                <div className="text-center px-4">
                                    <p className="text-[20px]">
                                        {exp.description}
                                    </p>
                                </div>
                            </Card>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlipCards;