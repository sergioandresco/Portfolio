import ProjectsData from "@/data/projects/details";
import HeroDetailProject from "@/components/hero/hero-detail-project";
import { Separator } from "@/components/ui/separator";
import DescriptionProject from "@/components/projectCards/descriptionProject";
import ProjectTechnologies from "@/components/projectCards/descriptionProject/projectTechnologies";

function DetailProjectLayout({ params }: { params: { slug: string } }) {

    const project = ProjectsData.find(p => p.slug === params.slug);

    return ( 
        <div>
            <HeroDetailProject 
                title={project ? project.name : "Project"}
                projectUrl={project ? project.urlLive : "#"}
                projectRepository={project ? project.urlRepository : "#"}
            />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <DescriptionProject 
                gifUrl={project ? project.gifProject : ""}
                nameProject={project ? project.name : "Project"}
                description={project ? project.descriptionProject : ""}
            />
            <ProjectTechnologies 
                technologies={project ? project.technologies : []}
            />
        </div>
    );
}

export default DetailProjectLayout;