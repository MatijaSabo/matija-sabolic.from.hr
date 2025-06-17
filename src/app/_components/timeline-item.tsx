import moment from 'moment'
import richTextToHtml, { list_styling } from "@/api/author/richTextToHtml"

type Props = {
    role: string
    company: string
    startDate: Date
    endDate: Date
    responsibilities: string
}

export async function TimelineItem({ role, company, startDate, responsibilities }: Props) {
    const htmlText = await richTextToHtml(responsibilities, list_styling);

    return (
        <li className="mb-8 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {moment(startDate).format('MMMM YYYY')}
            </time>
            <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">{role} @ {company}</h3>
            <div
                className="mb-4 text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{__html: htmlText}} 
            />
        </li>
    )
}