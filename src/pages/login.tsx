import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/seo/Seo';

import SvgDiscord from '~/svg/discord.svg';
import SvgTwitter from '~/svg/twitter.svg';

export type SignInErrorTypes =
  | 'Signin'
  | 'OAuthSignin'
  | 'OAuthCallback'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'
  | 'NoEmailProvided'
  | 'default';

const errors: Record<SignInErrorTypes, string> = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  NoEmailProvided: 'It seems your account is not linked to an email address.',
  default: 'Unable to sign in. Please try again.',
};

function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { status } = useSession();
  const { error: errorType, provider } = useRouter().query;

  const error =
    errorType && (errors[errorType as keyof typeof errors] ?? errors.default);

  useEffect(() => {
    error && setErrorMsg(error);
  }, [error]);

  useEffect(() => {
    errorMsg && toast.error(errorMsg, { id: 'error', duration: 5000 });
  }, [errorMsg]);

  const handleProviderSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>,
    provider: string
    // eslint-disable-next-line unicorn/consistent-function-scoping
  ) => {
    event.preventDefault();
    return await signIn(provider, {
      callbackUrl: `${window.location.origin}`,
    });
  };

  if (status === 'authenticated') {
    return (
      <div className="layout flex h-screen flex-col items-center justify-center">
        <h1 className="font-secondary w-full text-center text-7xl">
          <span className="text-neon-green block">
            You are already logged in!
          </span>
        </h1>
      </div>
    );
  }

  return (
    <>
      <Seo title="Login" noindex nofollow />
      <section>
        <div className="layout flex h-screen flex-col items-center justify-center text-center">
          <div className="flex flex-col justify-center">
            <button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleProviderSubmit(event, 'discord')
              }
              className="bg-discord mx-auto flex w-fit justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-white shadow-sm hover:border-indigo-400 hover:bg-indigo-400 hover:ring-2 hover:ring-indigo-500"
            >
              <span className="min-w-5 mr-2 flex h-5 w-5 shrink-0 items-center">
                <SvgDiscord />
              </span>
              <span className="">Login with Discord</span>
            </button>

            <button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleProviderSubmit(event, 'twitter')
              }
              className="bg-twitter mx-auto mt-8 flex w-fit justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-white shadow-sm hover:border-blue-400 hover:bg-blue-400 hover:ring-2 hover:ring-blue-500"
            >
              <span className="min-w-5 mr-2 flex h-5 w-5 shrink-0 items-center">
                <SvgTwitter />
              </span>
              <span className="">Login with Twitter</span>
            </button>

            <p className="mt-12 text-sm text-tw-primary-medium">
              <ArrowLink href="/">Back to home page</ArrowLink>
            </p>

            <div className="mt-4 max-w-md text-center">
              <span className="text-sm text-red-400">{errorMsg}</span>
              {errorType === 'NoEmailProvided' && (
                <div className="mt-2 text-sm">
                  Please go to {provider} and add an email address to your
                  account to continue the sign up workflow.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Toaster position="bottom-center" toastOptions={{ duration: 3500 }} />
    </>
  );
}

export default LoginPage;
