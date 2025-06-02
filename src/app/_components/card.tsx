type Props = {
    title: string;
    description: string;
}

export function Card({title, description} : Props) {
    return (
        <div className="static section-beige-light border-2 border-r-8 border-b-8 rounded-3xl p-8 shadow-sm">
            <h4 className="text-xl font-bold pb-4">{title}</h4>
            <div dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
    )
}