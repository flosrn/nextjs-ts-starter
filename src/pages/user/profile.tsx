import React from 'react';

import ProfileForm from '@/components/forms/settings/ProfileForm';
import { getLayout } from '@/components/layout/UserAccountLayout';

export default function UserProfilePage() {
  return (
    <div>
      <ProfileForm />
    </div>
  );
}

UserProfilePage.getLayout = getLayout;
