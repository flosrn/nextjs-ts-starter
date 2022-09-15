import Head from 'next/head';
import { NextSeo } from 'next-seo';

export const AppConfig = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  defaultTitle: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  site_name: 'Next.js + Tailwind CSS + TypeScript Starter',
  type: 'website',
  locale: 'en_US',
};

type IMetaProps = {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  images?: {
    url: string;
    width: number;
    height: number;
    alt: string;
    type: string;
  }[];
  twitter?: {
    handle: string;
    site: string;
    cardType: string;
  };
};

const Seo = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`/favicon/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`/favicon/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        noindex={props.noindex}
        nofollow={props.nofollow}
        openGraph={{
          title: props.title || AppConfig.title,
          description: props.description || AppConfig.description,
          url: props.canonical,
          type: AppConfig.type,
          images: props.images,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
        twitter={props.twitter}
      />
    </>
  );
};

export default Seo;
