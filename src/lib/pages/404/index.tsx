import Link from 'next/link';

const Page404 = () => {
  return (
    <div className="grid min-h-80vh items-center">
      <div className="text-center flex flex-col gap-8">
        <div>
          <h2 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-teal-700">
            404
          </h2>
          <p className="text-gray-400">Looks like you&apos;re lost.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-500">It&apos;s Okay!</p>
          <div>
            <Link href="/" passHref>
              <a className="btn bg-teal-600 text-xs">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
