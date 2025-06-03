import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  width?: number;
  height?: number;
};

const CoverImage = ({ title, src, slug, width, height }: Props) => {
  const image = (
    <Image
      src={src}
      alt={title}
      className="aspect-2/3 w-full"
      width={width ? width : 1300}
      height={height ? height : 630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
