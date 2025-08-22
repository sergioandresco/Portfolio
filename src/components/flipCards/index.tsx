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

                            {/* Front */}
                            <Card className="absolute w-full h-full backface-hidden flex items-center justify-center bg-purple-700 text-white rounded-xl shadow-lg">
                                <div className="text-center">
                                    <p className="text-lg font-bold">{exp.position}</p>
                                    <p className="text-sm">{exp.company}</p>
                                    <p className="text-sm">{exp.date}</p>
                                </div>
                            </Card>

                            {/* Back */}
                            <Card className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-purple-600 text-white rounded-xl shadow-lg">
                                <div className="text-center px-4">
                                    <p>
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