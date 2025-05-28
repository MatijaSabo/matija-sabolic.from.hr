import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  bio: string;
  coverImage: string;
  alt: string;
};

export function Hero({
  title,
  coverImage,
  bio,
  alt
}: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CoverImage title={alt} src={coverImage} width={400} height={600} />
        <div>
          <h2 className="text-2xl font-bold tracking-tighter leading-tight md:pr-8">{title}</h2>
          <div className="text-xl tracking-tighter leading-tight md:pr-8" dangerouslySetInnerHTML={{__html: bio}}></div>
        </div>
      </div>
    </section>
  );
}
