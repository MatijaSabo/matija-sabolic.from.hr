'use client'

import Container from "@/components/container";
import { motion } from "motion/react";

type Props = {
  links: SocialMediaLinks
  email: string
}

export function Footer({ links, email }: Props) {
  return (
    <footer>
      <Container>
        <div className="pt-28 pb-20 flex flex-col lg:flex-row items-center">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Let's get in touch
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <motion.a
              href={`mailto:${email}`}
              className="mx-3 font-bold hover:underline focus:underline underline-offset-4"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 1.1
              }}
              whileFocus={{
                scale: 1.1
              }}
            >
              Email
            </motion.a>
            <motion.a
              href={links.linkedIn}
              target="_blank"
              className="mx-3 font-bold hover:underline focus:underline underline-offset-4"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 1.1
              }}
              whileFocus={{
                scale: 1.1
              }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={links.gitHub}
              target="_blank"
              className="mx-3 font-bold hover:underline focus:underline underline-offset-4"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 1.1
              }}
              whileFocus={{
                scale: 1.1
              }}
            >
              GitHub
            </motion.a>
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
