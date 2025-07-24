import Container from "@/components/container";
import { Intro } from "@/components/intro";
import { Timeline } from "@/components/timeline";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Qualifications from "@/components/qualifications";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import FadeIn from "@/components/animateOnScroll";

import { getAuthorById } from "@/api/author/api";
import { getFeedbacks } from "@/api/feedbacks/api";
import richTextToHtml, { paragraph_styling } from "@/api/author/richTextToHtml";

import about from "@/dam/data/about.json"
import { draftMode } from "next/headers";

export async function generateMetadata() {
  return {
    title: `${about.role.shortName} | ${about.name}`,
    alternates: {
      canonical: '/',
    },
  }
}

export default async function Index() {
  const { isEnabled } = await draftMode();

  const author: ContentfulAuthor = await getAuthorById(process.env.CONTENTFUL_ENTITY_ID as string, isEnabled);
  const feedbacks: Feedback[] = await getFeedbacks();

  return (
    <>
      <main>
        <Container>
          <Intro 
            data={author} 
          />
          <About 
            title={author.jobsCollection.items[0].role} 
            description={await richTextToHtml(author.bio, paragraph_styling)} 
            image={author.picture} />
          
          <FadeIn>
            <Skills 
              items={author.skillsCollection.items}
            />
          </FadeIn>
          
          <FadeIn>  
            <Qualifications 
              education={author.education}
              certificates={author.certificatesCollection.items}
            />
          </FadeIn>
          
          <FadeIn>
            <Timeline 
              jobs={author.jobsCollection.items}
            />
          </FadeIn>
            
          <FadeIn>
            <Projects 
              projects={author.projectsCollection.items}
            />
          </FadeIn>

          <FadeIn>
            <Testimonial 
              feedbacks={feedbacks}
            />
          </FadeIn>
        </Container>
      </main>
      <Footer 
        links={author.socialMedia}
        email={author.email}
      />
      <BackToTop />
    </>
  );
}
