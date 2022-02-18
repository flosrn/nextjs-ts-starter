import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getProviders, signIn } from 'next-auth/react';

import SignUpForms from '@/components/forms/SignUpForms';
import MainLayout from '@/components/layout/MainLayout';

export type Provider = {
  id: 'credentials' | 'google' | 'facebook' | 'github';
  name: 'Credentials' | 'Google' | 'Facebook' | 'Github';
  type: 'credentials' | 'oauth';
  signinUrl: string;
  callbackUrl: string;
};

type SignInPageProps = {
  providers: Provider[];
};

export interface SignInResponse {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

export const SignUpPage: React.FC<SignInPageProps> = ({ providers }) => {
  const { error } = useRouter().query;
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (error) {
      toast.error(Array.isArray(error) ? error[error.length - 1] : error);
    }
  }, [error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = (await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    })) as unknown as SignInResponse;

    const { error } = response || {};

    if (error) {
      toast.error(error);
    } else {
      toast.success('Successfully signed in');
    }
  };

  const handleProviderSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>,
    provider: string
  ) => {
    event.preventDefault();
    return await signIn(provider);
  };

  return (
    <MainLayout>
      <div className="flex h-screen min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Create a new account
          </h2>
        </div>
        <SignUpForms
          values={values}
          changeHandler={handleChange}
          submitHandler={handleSubmit}
          submitProviderHandler={handleProviderSubmit}
          providers={providers}
        />
      </div>
      <Toaster position="bottom-right" />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignUpPage;
