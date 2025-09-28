import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import SkillCard from "@/components/skillCard";

function SkillsLayout() {
    return ( 
        <div>
            <Hero 
                title="My main stack is React and JavaScript, along with modern styling frameworks."
                videoUrl="https://microsistem.s3.us-east-2.amazonaws.com/portfolio/serchSkills.webm"
            />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <SkillCard />
        </div>
    );
}

export default SkillsLayout;