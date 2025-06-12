import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import cn from "classnames";

import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import about from "@/dam/data/about.json"

import "./globals.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: about.name,
  image: about.picture,
  description: about.description,
  sameAs: [
    about.websiteUrl,
    about.socialMedia.LinkedIn,
    about.socialMedia.GitHub
  ],
  jobTitle: about.role.name
}

export const metadata: Metadata = {
  metadataBase: new URL(about.websiteUrl),
  title: about.name + " - " + about.role.shortName,
  description: about.description,
  verification: {
    google: 'xj8iIPSQWG45BJAvGftVUREf4DKhQ3n7JZpQ11mH5TA'
  }, 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: about.websiteUrl,
    images: '/assets/blog/authors/og_image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/favicon.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="preload" href="https://www.googletagmanager.com/gtm.js?id=GTM-WK6WPRPG" as="script"></link>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'), }}/>
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
        <BackToTop />
        <script src="https://www.googletagmanager.com/gtm.js?id=GTM-WK6WPRPG" id="_next-gtm" data-ntpc="GTM" data-nscript="afterInteractive"></script>
      </body>
    </html>
  );
}
