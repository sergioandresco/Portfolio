import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/projectCards";

function ProjectsLayout() {
    return ( 
        <div>
            <Hero 
                title="Projects I've done and participated in."
                videoUrl="https://microsistem.s3.us-east-2.amazonaws.com/portfolio/serchProjects.webm"
            />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <ProjectCard />
        </div>
    );
}

export default ProjectsLayout;