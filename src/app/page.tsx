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
          
        <Timeline></Timeline>

        <Section>
          <h2 className="text-4xl font-bold tracking-tighter md:pr-8 pb-4">Projects</h2>
          <p className="text-xl tracking-tighter md:pr-8 pb-8">Some highlight projects on which I worked on</p>
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
