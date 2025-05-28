import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Hero } from "./_components/hero";

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
      </Container>
    </main>
  );
}
