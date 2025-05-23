import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  bio: string;
  coverImage: string;
};

export function Hero({
  title,
  coverImage,
  bio
}: Props) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-16 md:gap-x-16">
        <CoverImage title={title} src={coverImage} width={460} height={690} />
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            {bio}
          </h2>
        </div>
      </div>
    </section>
  );
}
