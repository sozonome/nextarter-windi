/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-windi",
  titleTemplate: "%s | nextarter-windi",
  defaultTitle: "nextarter-windi",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-windi.sznm.dev",
  openGraph: {
    url: "https://nextarter-windi.sznm.dev",
    title: "nextarter-windi",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-windi**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-windi.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-windi",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
