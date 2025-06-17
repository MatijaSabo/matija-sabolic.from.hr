import { Hero } from "@/components/hero";

type Props = {
    title: string
    description: string
    image: Picture
}

export default function About({ title, description, image}: Props) {
    return (
        <Hero 
            title={title}
            bio={description}
            coverImage={image.url}
            alt={image.description}
        />
    )
}