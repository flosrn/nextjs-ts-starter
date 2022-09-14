import React from 'react';
import Link from 'next/link';

import { Provider } from '@/pages/auth/signin';

import SvgFacebook from '~/svg/facebook.svg';
import SvgGithub from '~/svg/github.svg';
import SvgGoogle from '~/svg/google.svg';

type SignInFormsProps = {
  values: {
    email: string;
    password: string;
  };
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  submitProviderHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    provider: string
  ) => void;
  providers: Provider[];
};

const providerIcons: { [key: string]: JSX.Element } = {
  google: <SvgGoogle />,
  facebook: <SvgFacebook />,
  github: <SvgGithub />,
};

const SignInForms: React.FC<SignInFormsProps> = ({
  values: { email, password },
  changeHandler,
  submitHandler,
  submitProviderHandler,
  providers,
}) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="mb-6 grid grid-cols-3 gap-3">
          {Object.values(providers)
            .filter((provider) => provider.id !== 'credentials')
            .map((provider) => (
              <div key={provider.id}>
                <button
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    submitProviderHandler(event, provider.id)
                  }
                  className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 shadow-sm hover:border-indigo-400 hover:bg-gray-50 hover:ring-2 hover:ring-indigo-500"
                >
                  <span className="min-w-5 mr-2 flex h-5 w-5 shrink-0 items-center">
                    {providerIcons[provider.id]}
                  </span>
                  <span className="">{provider.name}</span>
                </button>
              </div>
            ))}
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={changeHandler}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-600 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={changeHandler}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-600 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700"
            >
              Sign in
            </button>
          </div>

          <div>
            <p className="text-center text-sm text-gray-500">
              {`Don't have an account?`}{' '}
              <Link href="/auth/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForms;
