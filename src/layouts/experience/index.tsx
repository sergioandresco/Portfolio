import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import FlipCards from "@/components/flipCards";

function ExperienceLayout() {
    return ( 
        <div>
            <Hero 
                title="Experience as a systems engineer and frontend developer."
                videoUrl="https://microsistem.s3.us-east-2.amazonaws.com/serchAnimation2.webm"
            />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <FlipCards />
        </div>
    );
}

export default ExperienceLayout;