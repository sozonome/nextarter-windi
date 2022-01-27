import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '@fontsource/outfit/latin.css';
import 'windi.css';

import defaultSEOConfig from '../../next-seo.config';
import Layout from 'lib/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
