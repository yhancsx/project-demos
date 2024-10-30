'use client';
import Image from 'next/image';

const links: { link: string; title: string }[] = [
  {
    link: 'image-similarity-inspection',
    title: 'AD Creative Inspection using Image Similarity',
  },
  {
    link: 'interactive-visualized-report',
    title: 'Interactive Visualized AD Performance Report',
  },
];
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-start flex-col">
          {links.map(({ link, title }, index) => (
            <a
              key={link}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {index + 1}. {title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}