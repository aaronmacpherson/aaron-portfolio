import { Project, TechStack } from "@/tools/data.model";

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <>
            <section id="projects" className="flex flex-col items-center my-10 gap-4 scroll-m-14">
                <div>
                    <h2 className="flex flex-col items-center text-4xl font-bold after:border-b-8 after:rounded-sm after:w-44 after:block after:border-accent after:relative after:bottom-4 after:z-[-1]">Projects</h2>
                </div>
                {projects.map((project: Project, n: number) =>
                    <div key={`project-${n}`} className="flex w-3/4 bg-subBackground rounded border border-subBackgroundBorder">
                        <img className="hidden lg:block w-[360px] h-[242px] m-5 rounded" src={project.preview.src} alt={project.preview.alt}></img>
                        <div className="flex flex-col m-5">
                            <div className="font-bold">{project.name}</div>
                            <div className="flex font-bold">
                                Tech Stack:
                                {project.techStack.map((tech:TechStack, m:number) => 
                                    <img key={`techStack-icon-${m}`} className="w-[24px] h-[24px]" src={tech.src} alt={tech.name}></img>
                                )}
                            </div>
                            <div className="text-mainText">
                                {project.description}
                            </div>
                            <div className="mt-16">
                                <a className="border-b-2 border-accent rounded-sm" href={project.demo}>Demo</a>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}