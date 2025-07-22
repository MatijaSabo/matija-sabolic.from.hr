'use client';

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { usePathname } from 'next/navigation';

type Props = {
    data: ContentfulAuthor;
}

export function Intro({ data } : Props) {
  const pathname = usePathname();

  const livePost = useContentfulLiveUpdates(data);
  const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id });

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <a href="/">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
          {...inspectorProps({ fieldId: 'name' })}>
          {livePost.name}
        </h1>
      </a>
      { pathname === "/" ? 
        <a href="/contact" className="text-xl font-bold hover:underline underline-offset-4">
          <h2 className="text-2xl mt-6 md:text-4xl font-bold md:pr-8">
            Contact
          </h2>
        </a>
      : <a href="/" className="text-xl font-bold hover:underline underline-offset-4">
          <h2 className="text-2xl mt-6 md:text-4xl font-bold md:pr-8">
            Home
          </h2>
        </a>
      }
    </section>
  );
}
