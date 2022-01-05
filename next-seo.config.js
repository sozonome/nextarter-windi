/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-wind",
  titleTemplate: "%s | nextarter-wind",
  defaultTitle: "nextarter-wind",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-wind.sznm.dev",
  openGraph: {
    url: "https://nextarter-wind.sznm.dev",
    title: "nextarter-wind",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-wind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-wind.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-wind",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
