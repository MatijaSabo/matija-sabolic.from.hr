import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Hero } from "./_components/hero";
import Section from "./_components/section";
import { Card } from "./_components/card";
import { Timeline } from "./_components/timeline";
import BackToTop from "./_components/back-to-top";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <Hero 
          title="AEM Technical Architect & Senior Software Engineer"
          bio="
          <p class='pt-4'>Full stack Software Engineer with strong background with 10+ years experience in software development. Processing a deep knowledge of Web & Java development.</p>
          <p class='pt-4'>Active track record of 6+ years on projects based on Adobe Experience Manager platform as a backend and frontend developer.</p>
          <p class='pt-4'>Adobe Certified Master for AEM as sites Architect.</p>
          <p class='pt-4'>Strong engineering background substantiated with masters degree in software engineering at Faculty of Organization and Informatics</p>"
          coverImage="/assets/blog/authors/matija_sabolic.jpg"
          alt="Matija Sabolić"
        />
        <div className="my-16">
          <h2 className="text-6xl font-bold tracking-tighter pb-8">Skills & Interests</h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <Card
              title="Adobe Experience Manager"
              description="
                <ul>
                  <li>AEMaaCS, AEM On-prem</li>
                  <li>Multi-tenants, MSM</li>
                  <li>Relaunches, Migrations</li>
                  <li>Experience & Content Fragments</li>
                  <li>Dynamic media, GraphQL</li>
                  <li>Core Components</li>
                  <li>AEM Mocks</li>
                  <li>Dispatcher, SSI/ESI, CDN</li>
                  <li>Performance, Caching, Security</li>
                  <li>High Code Quality and Code Coverage</li>
                </ul>
              "
            />
            <Card
              title="Frontend Development"
              description="
                <ul>
                  <li>JavaScript, TypeScript, jQuery</li>
                  <li>NodeJs, NextJs</li>
                  <li>React</li>
                  <li>Html, CSS</li>
                </ul>
              "
            />
            <Card 
              title="Other skills"
              description="
                <ul>
                  <li>Java Development</li>
                  <li>Web Development</li>
                  <li>SQL, MySql, PostgresSQL</li>
                  <li>Unit & Integration testing</li>
                  <li>Software Architeture</li>
                  <li>Software Craftmenship</li>
                  <li>Problem solving</li>
                  <li>Reverse engineering</li>
                  <li>Mentoring</li>
                </ul>
              "
            />
          </div>
        </div>

        <Section>
          <h2 className="text-4xl font-bold tracking-tighter md:pr-8 pb-4">Qualifications & Certificates</h2>

          <div className="text-xl tracking-tighter md:pr-8 pb-8 pt-4">
            <svg className="w-8 h-8 text-gray-800 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z"/>
              <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z"/>
            </svg>

            <span className="pl-2">Master’s degree in Information and Software Engineering, Faculty of Organization and Informatics, Croatia</span>
          </div>

          <div className="text-xl tracking-tighter md:pr-8">
            <svg className="w-8 h-8 text-gray-800 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
              <path fillRule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd"/>
              <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
            </svg>

            <span className="pl-2">Adobe Certified Master & Expert</span>
            <ol className="my-4 ml-6 list-disc">
              <li>AEM Sites Architect</li>
              <li>AEM Sites Developer</li>
              <li>AEM Assets Developer</li>
              <li>AEM Dev/Ops Engineer</li>
              <li>AEMaaCS Migration Expert</li>
            </ol>
          </div>
        </Section>
          
        <Timeline></Timeline>

        <Section>
          <h2 className="text-4xl font-bold tracking-tighter md:pr-8 pb-4">Projects</h2>
          <p className="text-xl tracking-tighter md:pr-8 pb-8 pt-4">Some highlight projects on which I worked on</p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <Card
              title="Luxury vehicle coorporation"
              description="Migration of multi-tenant websites and other systems into a new platform based on Adobe Experience Manager (6.5, AMS) and other Adobe Cloud products for Luxury vehicles corporation from North America."
            />
            <Card
              title="Fashion industry"
              description="For a global fashion and design company from Sweden, I have implemented features for their main website and features for push mobile notification campaigns. Migrated multi-module projects from AEM 6.1 to 6.4 (on-premise). Relaunched the new CI/CD deployment processes."
            />
            <Card 
              title="Private University"
              description="Lead the development team and mentored the next-gen Architect in the migration of multi-tenant websites to AEMaaCS for the largest private University in Germany. Websites based on Content Fragments, GraphQL, React, and Dynamic Media."
            />
            <Card 
              title="European airline company"
              description="Lead the development team and mentored the next-gen Architect in the migration of multi-tenant websites to AEMaaCS for the largest private University in Germany. Websites based on Content Fragments, GraphQL, React, and Dynamic Media."
            />
          </div>
        </Section>
      </Container>
      <BackToTop />
    </main>
  );
}
