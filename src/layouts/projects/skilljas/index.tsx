import HeroDetailProject from "@/components/hero/hero-detail-project";
import { Separator } from "@/components/ui/separator";
import DescriptionProject from "@/components/projectCards/descriptionProject";
import ProjectTechnologiesData from "@/data/projects/details";
import ProjectTechnologies from "@/components/projectCards/descriptionProject/projectTechnologies";

function SkilljasLayout() {

    const project = ProjectTechnologiesData.find(p => p.name === "Skilljas");

    return ( 
        <div>
            <HeroDetailProject 
                title="SkillJAS"
                projectUrl="https://skilljas.vercel.app/"
                projectRepository="https://github.com/sergioandresco/SkillJAS"
            />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <DescriptionProject 
                gifUrl="https://microsistem.s3.us-east-2.amazonaws.com/portfolio/projects/ezreadme.gif"
                nameProject="SkillJAS"
                description="SkillJAS is a 100% free educational web platform where users can learn key technologies through pre-curated content.
                Unlike other platforms with thousands of cluttered options, here you'll find only the best resources, organized to optimize your time."
            />
            <ProjectTechnologies 
                technologies={project ? project.technologies : []}
            />
        </div>
    );
}

export default SkilljasLayout;