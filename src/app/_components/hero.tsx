import CoverImage from "@/app/_components/cover-image";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CoverImage title={alt} src={coverImage} width={400} height={600} />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter leading-tight md:pr-8">{title}</h2>
          <div className="text-xl tracking-tighter leading-tight md:pr-8" dangerouslySetInnerHTML={{__html: bio}}></div>
        </div>
      </div>
    </section>
  );
}
