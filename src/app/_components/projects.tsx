import Section from "@/components/section";
import ProjectItem from "./project";

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
        <Section>
          <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter md:pr-8 pb-6 xl:pb-8">Projects</h2>
          <p className="text-base xl:text-xl tracking-tighter md:pr-8 pb-8">Some highlight projects on which I worked on</p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((item, key) => {
                return (
                    <ProjectItem 
                        client={item.client} 
                        role={item.role}
                        responsibilities={item.responsibilities} 
                    />
                )
            })}
          </div>
        </Section>
    )
}