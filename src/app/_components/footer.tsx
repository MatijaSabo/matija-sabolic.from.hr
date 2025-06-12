import Container from "@/components/container";
import about from "@/dam/data/about.json"

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="pt-28 pb-20 flex flex-col lg:flex-row items-center">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Contact me over
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`mailto:${about.email}`}
              className="mx-3 font-bold hover:underline">
              Email
            </a>
            <a
              href={about.socialMedia.LinkedIn}
              target="_blank"
              className="mx-3 font-bold hover:underline">
              LinkedIn
            </a>
            <a
              href={about.socialMedia.GitHub}
              target="_blank"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="pb-8 text-xs text-center text-gray-400">
          Copyright © 2025 - All right reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
