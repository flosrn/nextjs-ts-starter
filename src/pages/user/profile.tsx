import React from 'react';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

import ProfileForm from '@/components/forms/settings/ProfileForm';
import { getLayout } from '@/components/layout/UserAccountLayout';

// @ts-ignore
export default function UserProfilePage({ session }) {
  // eslint-disable-next-line no-console
  console.log('session :', session);
  return (
    <div>
      <ProfileForm />
    </div>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

UserProfilePage.getLayout = getLayout;
