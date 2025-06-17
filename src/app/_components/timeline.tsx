import { TimelineItem } from "./timeline-item"

type Props = {
    jobs: Job[]
}

export function Timeline({ jobs }: Props) {
    return (
        <div className="my-16">
            <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter pb-8">Experince</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {jobs.map((item, key) => {
                    return (
                        <TimelineItem
                            role={item.role}
                            company={item.company}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            responsibilities={item.responsibilities}
                        />
                    )
                })}
            </ol>
        </div>
    )
}