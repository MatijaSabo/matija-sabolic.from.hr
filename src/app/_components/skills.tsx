import { Card } from "@/components/card";

type Props = {
    items: Skills[]
}

export default function Skills({ items }: Props) {

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
            {items.map((item, key) => {
                return <Card
                    key={key}
                    title={item.area} 
                    description={formatSkills(item.skills)}
                />
            })}
          </div>
        </div>
    )
}