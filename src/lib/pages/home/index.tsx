import type { NextPage } from 'next';

import CTASection from 'lib/components/samples/CTASection';
import SomeText from 'lib/components/samples/SomeText';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 min-h-80vh justify-center items-center text-center">
      <SomeText />
      <CTASection />
    </div>
  );
};

export default Home;
