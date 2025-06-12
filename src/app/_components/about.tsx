import { Hero } from "@/components/hero";
import data from "@/dam/data/about.json";

export default function About() {

    function bio() {
        let bio = "";
        
        data.about.forEach((element) => {
            bio += `<p class='pt-4'>${element}</p>`
        })

        return bio;
    }

    return (
        <Hero 
            title={data.role.name}
            bio={bio()}
            coverImage={data.picture}
            alt={data.name}
        />
    )
}