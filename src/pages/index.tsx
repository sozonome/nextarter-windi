import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 min-h-80vh justify-center items-center text-center">
      <div className="grid gap-2.5">
        <h1 className="text-2xl font-bold">nextarter-windi</h1>
        <p className="text-sm">
          Next.js starter template with WindiCSS and TypeScript setup
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <a
            className="btn bg-green-400 hover:bg-green-700 rounded-3xl font-semibold"
            href="https://github.com/sozonome/nextarter-windi/generate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use This Template
          </a>

          <a href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-windi">
            <Image
              width={92}
              height={32}
              src="https://vercel.com/button"
              alt="Vercel deploy button"
            />
          </a>
        </div>

        <div>
          <a
            className="btn rounded-3xl text-xs font-semibold"
            href="https://github.com/sozonome/nextarter-windi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
