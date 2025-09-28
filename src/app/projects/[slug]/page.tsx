import ProjectsData from "@/data/projects/details";
import DetailProjectLayout from "@/layouts/projects/detail-project";

export async function generateStaticParams() {
    return ProjectsData.map((project) => ({
      slug: project.slug,
    }));
}

function ProjectPage({ params }: { params: { slug: string } }) {

    return ( 
        <DetailProjectLayout 
            params={{ slug: params.slug }}
        />
    );
}

export default ProjectPage;