import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Timeline } from "./_components/timeline";
import BackToTop from "./_components/back-to-top";
import About from "./_components/about";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Qualifications from "./_components/qualifications";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <About />
        <Skills />
        <Qualifications />
        <Timeline />
        <Projects />
      </Container>
      <BackToTop />
    </main>
  );
}
