import { Project, TechStack } from "@/tools/data.model";
import Tag from "./Tag";

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <>
            <section id="projects" className="flex flex-col items-center my-10 gap-4 scroll-m-14">
                <div>
                    <h2 className="flex flex-col items-center text-4xl font-bold after:border-b-8 after:rounded-sm after:w-44 after:block after:border-accent after:relative after:bottom-4 after:z-[-1]">Projects</h2>
                </div>
                {projects.map((project: Project, n: number) =>
                    <div key={`project-${n}`} className="flex w-3/4 bg-subBackground rounded border border-subBackgroundBorder hover:border-accent">
                        <img className="hidden lg:block w-[360px] h-[242px] m-5 rounded" src={project.preview.src} alt={project.preview.alt}></img>
                        <div className="flex flex-col m-5">
                            <div className="font-bold">{project.name}</div>
                            <div className="text-mainText">
                                {project.description}
                            </div>
                            <div className="flex flex-wrap font-bold mt-2">
                                {project.techStack.map((tech:TechStack, m:number) => 
                                    <Tag key={tech.name} name={tech.name} />
                                )}
                            </div>
                            <div className="mt-16">
                                <a className={`border-b-2 border-accent rounded-sm mr-4 ${project.demo == "#" ? "hidden" : ""}`} href={project.demo}>Demo</a>
                                <a className={`border-b-2 border-accent rounded-sm ${project.source == "#" ? "hidden" : ""}`} href={project.source}>Source code</a>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}