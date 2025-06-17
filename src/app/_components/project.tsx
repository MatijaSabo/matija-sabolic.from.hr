import richTextToHtml, { list_styling_light_margin } from "@/api/author/richTextToHtml"
import { Card } from "@/components/card"

export default async function ProjectItem({ client, responsibilities }: Project) {
    const htmlText = await richTextToHtml(responsibilities, list_styling_light_margin)
    
    return (
        <Card
            title={client}
            description={htmlText}
        />
    )
}