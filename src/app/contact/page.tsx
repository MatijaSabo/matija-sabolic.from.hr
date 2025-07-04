import { getAuthorById } from "@/api/author/api";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { Intro } from "@/components/intro";
import ContactForm from "@/components/contactForm";

export default async function Contact() {
  const author: ContentfulAuthor = await getAuthorById(process.env.CONTENTFUL_ENTITY_ID as string);

  return (
    <>
      <main>
        <Container>
          <Intro 
            title={author.name} 
          />
          <ContactForm />
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