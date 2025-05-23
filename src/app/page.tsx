import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Hero } from "./_components/hero";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <Hero 
          title="Matija Sabolić"
          bio="AEM Senior Software Engineer and Technical Architect"
          coverImage="/assets/blog/authors/matija_sabolic.jpg"
        />
      </Container>
    </main>
  );
}
