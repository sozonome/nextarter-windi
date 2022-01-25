import Image from 'next/image';

const CTASection = () => {
  return (
    <div className="grid gap-2.5">
      <div className="flex items-center gap-2">
        <a
          className="btn bg-gradient-to-br from-gray-100 to-green-200 hover:from-gray-200 hover:to-green-200 text-green-700 hover:text-green-800 border-green-400 border-2 rounded-3xl font-semibold"
          href="https://github.com/sozonome/nextarter-windi/generate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>

        <a
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-windi"
          className="flex items-center"
        >
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
  );
};

export default CTASection;
