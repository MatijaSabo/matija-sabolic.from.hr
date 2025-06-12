import Container from "@/components/container";
import { Intro } from "@/components/intro";
import { Timeline } from "@/components/timeline";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Qualifications from "@/components/qualifications";
import Testimonial from "@/components/testimonial";

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
        <Testimonial />
      </Container>
    </main>
  );
}
