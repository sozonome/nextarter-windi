import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '@fontsource/outfit/latin.css';
import 'windi.css';

import defaultSEOConfig from '../../next-seo.config';
import Layout from 'components/layout';

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
