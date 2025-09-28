import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { ImArrowRight2, ImArrowUpRight2 } from "react-icons/im";
import projects from "@/data/projects";

function ProjectCard() {
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
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="
                            bg-[#4527A0]
                            border-0
                            rounded-md
                            px-[42px]
                        "
                    >
                        <div>
                            <img
                                src={project.imageProject}
                                alt={project.nameProject}
                            />
                        </div>

                        <div>
                            <h1
                                className="text-[40px]"
                            >
                                {project.nameProject}
                            </h1>
                            <p
                                className="text-[25px]"
                            >
                                {project.descriptionProject}
                            </p>
                        </div>

                        <div>
                            <Link 
                                href={project.detailUrl}
                                className="flex items-center gap-2"
                            >
                                <p className="text-[30px] font-bold">Details</p>
                                <ImArrowRight2 color="white" />
                            </Link>
                            <a 
                                href={project.linkProject} 
                                target="_blank"
                                className="flex items-center gap-2"
                            >
                                <p className="text-[30px]">Live</p>
                                <ImArrowUpRight2 color="white" />
                            </a>
                        </div>

                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;