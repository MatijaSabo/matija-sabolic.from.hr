type Props = {
  text: string;
  author?: string;
};

export function Quote({ text, author }: Props) {
  return (
    <figure className="max-w-screen-sm mt-4 md:mx-4 mb-12">
        <svg className="h-8 ml-2 mb-2 text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
        </svg> 
        <blockquote>
        <p className="text-sm xl:text-base italic mb-4">
            "{text}"
        </p>
        </blockquote>
        { author && 
          <figcaption className="italic text-gray-600 text-xs xl:text-sm">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
                <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>
              {author}
            </div>
          </figcaption>
        }
    </figure>
  );
}
