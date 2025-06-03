type Props = {
    title: string;
    description: string;
}

export function Card({title, description} : Props) {
    return (
        <div className="static section-beige-light border-2 border-r-8 border-b-8 rounded-3xl shadow-sm p-6 xl:p-8">
            <h4 className="text-lg xl:text-xl font-bold pb-4">{title}</h4>
            <div className="text-sm xl:text-base " dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
    )
}