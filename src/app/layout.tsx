import { draftMode, headers } from "next/headers";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ContentfulPreviewProvider } from "./_components/contentful-preview-provider";

import cn from "classnames";
import about from "@/dam/data/about.json"

import "./globals.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

const jsonLd = {
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

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') ?? 'matija-sabolic.from.hr';
  const protocol = headersList.get('x-forwarded-proto') ?? 'https';
  const fullUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(fullUrl),
    title: {
      template: '%s | Matija Sabolić',
    },
    description: about.description,
    verification: {
      google: 'xj8iIPSQWG45BJAvGftVUREf4DKhQ3n7JZpQ11mH5TA'
    }, 
    openGraph: {
      type: 'website',
      url: about.websiteUrl,
      images: '/assets/blog/authors/og_image.png',
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

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
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'), }}/>
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">
          <ContentfulPreviewProvider
            locale="en-US"
            enableInspectorMode={isEnabled}
            enableLiveUpdates={isEnabled}
            debug={isEnabled}>
            {children}
          </ContentfulPreviewProvider>
        </div>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-WK6WPRPG" />
        <GoogleAnalytics gaId="G-MQ4B4XVQBR" />
      </body>
    </html>
  );
}
