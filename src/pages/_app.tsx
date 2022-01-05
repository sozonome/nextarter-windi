import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import 'windi.css';
import defaultSEOConfig from '../../next-seo.config';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
