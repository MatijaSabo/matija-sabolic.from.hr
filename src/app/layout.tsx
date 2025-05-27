import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://matija-sabolic.from.hr'),
  title: 'Matija Sabolić',
  description: 'Matija Sabolić - Experienced Adobe Experience Manager engineer',
  verification: {
    google: 'xj8iIPSQWG45BJAvGftVUREf4DKhQ3n7JZpQ11mH5TA'
  }, 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://matija-sabolic.from.hr',
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
          href="/favicon/safari-pinned-tab.svg"
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
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
        <script src="https://www.googletagmanager.com/gtm.js?id=GTM-WK6WPRPG" id="_next-gtm" data-ntpc="GTM" data-nscript="afterInteractive"></script>
      </body>
    </html>
  );
}
