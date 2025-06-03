import { Card } from "./card";
import Section from "./section";
import data from "../../../public/data/projects.json";

export default function Projects() {
    
    function formatResponsabilities(responsabilities: string[]) {
        let bio = "<ul class='ml-4 list-disc'>";
        
        responsabilities.forEach((element) => {
            bio += `<li>${element}</li>`
        })

        bio += "</ul>"
        return bio;
    }
    
    return (
        <Section>
          <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter md:pr-8 pb-6 xl:pb-8">Projects</h2>
          <p className="text-base xl:text-xl tracking-tighter md:pr-8 pb-8">Some highlight projects on which I worked on</p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {data.map((item, key) => {
                return <Card
                    title={item.client}
                    description={formatResponsabilities(item.responsabilities)}
                />
            })}
          </div>
        </Section>
    )
}