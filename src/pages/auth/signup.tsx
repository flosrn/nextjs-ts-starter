import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getProviders, signIn, useSession } from 'next-auth/react';

import { toast } from 'react-toastify';

import SignUpForms from '@/components/forms/SignUpForms';
import Layout from '@/components/layout/Layout';

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
  const { data: session } = useSession();
  const { error } = useRouter().query;
  const [values, setValues] = React.useState({
    email: 'strapi@strapi.com',
    password: 'test123',
  });
  // const router = useRouter();
  // eslint-disable-next-line no-console
  console.log('session :', session);
  // console.log('error : ', error);
  // console.log('router : ', router);
  // const csrfToken = getCsrfToken();
  // const providers = getProviders();
  // console.log('csrfToken : ', csrfToken);
  // console.log('providers : ', providers);
  // console.log('callbackUrl : ', callbackUrl);

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

    // eslint-disable-next-line no-console
    console.log('response :', response);

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
    <Layout>
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
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignUpPage;
