import { Card } from "@/components/card";
import data from "@/dam/data/skills.json";

export default function Skills() {

    function formatSkills(skills: string[]) {
        let bio = "<ul class='ml-6 list-disc'>";
        
        skills.forEach((element) => {
            bio += `<li>${element}</li>`
        })

        bio += "</ul>"
        return bio;
    }

    return (
        <div className="my-16">
          <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter pb-8">Skills & Interests</h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {data.map((item, key) => {
                return <Card
                    title={item.area} 
                    description={formatSkills(item.skills)}
                />
            })}
          </div>
        </div>
    )
}