import { Hero } from "./hero";
import data from "../../../public/data/about.json";

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
            title={data.role}
            bio={bio()}
            coverImage={data.picture}
            alt={data.name}
        />
    )
}