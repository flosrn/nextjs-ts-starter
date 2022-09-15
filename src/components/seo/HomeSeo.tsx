import React from 'react';

import Seo from '@/components/seo/Seo';

const HomeSeo = () => {
  return (
    <>
      <Seo
        title="nextjs-ts-starter"
        description="A Next.js starter project with TypeScript and TailwindCSS"
        images={[
          {
            url: `${process.env.NEXT_PUBLIC_URL}/images/seo/banner.png`,
            width: 800,
            height: 320,
            alt: 'nextjs-ts-starter',
            type: 'image/png',
          },
        ]}
        twitter={{
          handle: '@flosrn',
          site: '@flosrn',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export default HomeSeo;
