import ProjectsData from "@/data/projects/details";
import DetailProjectLayout from "@/layouts/projects/detail-project";

export async function generateStaticParams() {
    return ProjectsData.map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    return ( 
        <DetailProjectLayout 
            params={{ slug }}
        />
    );
}