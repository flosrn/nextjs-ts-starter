import React from 'react';
import { GetServerSideProps } from 'next';
import { getProviders, signIn, useSession } from 'next-auth/react';

import SignInForms from '@/components/forms/SignInForms';
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

export const SignInPage: React.FC<SignInPageProps> = ({ providers }) => {
  const { data: session } = useSession();
  // const { error, callbackUrl } = useRouter().query;
  const [values, setValues] = React.useState({
    email: 'strapi@strapi.com',
    password: 'test123',
  });
  // const router = useRouter();
  // eslint-disable-next-line no-console
  console.log('session : ', session);
  // console.log('error : ', error);
  // console.log('router : ', router);
  // const csrfToken = getCsrfToken();
  // const providers = getProviders();
  // console.log('csrfToken : ', csrfToken);
  // console.log('providers : ', providers);
  // console.log('callbackUrl : ', callbackUrl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    // eslint-disable-next-line no-console
    console.log('response : ', response);
  };

  return (
    <Layout>
      <div className="flex h-screen min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
        </div>
        <SignInForms
          values={values}
          changeHandler={handleChange}
          submitHandler={handleSubmit}
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

export default SignInPage;
