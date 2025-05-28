import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Contact me over
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:matijasaboli37@gmail.com"
              className="mx-3 font-bold hover:underline">
              Email
            </a>
            <a
              href="/LinkedIn"
              target="_blank"
              className="mx-3 font-bold hover:underline">
              LinkedIn
            </a>
            <a
              href="/GitHub"
              target="_blank"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
