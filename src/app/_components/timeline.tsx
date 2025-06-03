type Props = {
    title: string;
    items: TimelineItem[];
}

type TimelineItem = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

export function Timeline() {
    return (
        <div className="my-16">
            <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter pb-8">Experince</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-8 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023</time>
                    <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">Technical Arhitect & Senior Software Engineer @ IBM iX</h3>
                    <div className="mb-4 text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul className="mt-4 px-6 list-disc">
                            <li>Defining the architecture and concepts of the solution</li>
                            <li>Resolving unresolvable challenges</li>
                            <li>Providing technical guidance and serving as the main contact for inquiries</li>
                            <li>Supporting presales with development of RFPs</li>
                        </ul>
                    </div>
                </li>
                <li className="mb-8 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apr 2022</time>
                    <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">Lead Developer @ IBM iX</h3>
                    <div className="text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul className="mt-4 px-6 list-disc">
                            <li>Leading development by following the best practices</li>
                            <li>Leading unit and integration testing for quality accurance</li>
                            <li>Supporting tehnical arhitect with concepts of the solution</li>
                            <li>Transforming complex requirements into maintainable, high-performance code</li>
                        </ul>
                    </div>
                </li>
                <li className="mb-8 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2020</time>
                    <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">Profesional Developer @ IBM iX</h3>
                    <div className="text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul className="mt-4 px-6 list-disc">
                            <li>Coaching and guiding the team and colleagues</li>
                            <li>Providing mentorship and training for Java and AEM developers</li>
                            <li>Implementing unit and integration testing for quality assurance</li>
                        </ul>
                    </div>
                </li>
                <li className="mb-8 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2018</time>
                    <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">Java Web Developer @ IBM iX</h3>
                    <div className="text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul className="mt-4 px-6 list-disc">
                            <li>Implementing Enterprise CMS solutions with Adobe Experience Manager(AEM) 6.5 and AEM as a Cloud Service</li>
                            <li>Active peer code review on Azure, GitHub and Bitbucket on projects for insurance of code quality and for following coding guidelines</li>
                            <li>Working in international Scrum teams developing web solutions for top European brands</li>
                        </ul>
                    </div>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-xs xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2018</time>
                    <h3 className="text-base xl:text-lg font-semibold text-gray-900 dark:text-white">Internship @ IBM iX</h3>
                    <div className="text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul className="mt-4 px-6 list-disc">
                            <li>Working on internal starter project developing web components in Adobe Experience Manager</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    )
}