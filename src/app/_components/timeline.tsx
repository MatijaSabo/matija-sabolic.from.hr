import data from "../../../public/data/experiences.json";

export function Timeline() {
    return (
        <div className="my-16">
            <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter pb-8">Experince</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {data.map((item, key) => {
                    return <>
                        <li className="mb-8 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate}</time>
                            <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">{item.role} @ {item.company}</h3>
                            <div className="mb-4 text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                                <ul className="mt-4 px-6 list-disc">
                                    {item.responsabilities.map((element) => {
                                        return <li>{element}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    </>
                })}
            </ol>
        </div>
    )
}