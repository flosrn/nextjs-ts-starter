import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'response', type: 'text', placeholder: 'response' },
        password: { label: 'toto123', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        // const user = {
        //   // username: 'strapiuser',
        //   email: 'strapi@strapi.com',
        //   password: 'test123',
        // };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              // @ts-ignore
              identifier: credentials?.email,
              password: credentials?.password,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => data);

        const error = response?.error;
        const errorMessage = error?.message;
        const errorDetail = error?.details?.errors;

        // eslint-disable-next-line no-console
        console.log('response :', response);
        // eslint-disable-next-line no-console
        console.log('error :', error);
        // eslint-disable-next-line no-console
        console.log('errorDetail :', errorDetail);

        if (errorMessage) throw new Error(errorMessage);

        return response.user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: '/auth/signin', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    error: '/auth/signin', // Displays errorError code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    // signIn: async ({ user, account, profile, email, credentials }) => {
    //   console.log('user : ', user);
    //   console.log('account : ', account);
    //   console.log('profile : ', profile);
    //   console.log('email : ', email);
    //   console.log('credentials : ', credentials);
    //   // return Promise.resolve({ response: 'hello' });
    //   // Promise.resolve(user);
    //   // if (!user.data) return user;
    //   // return 'triririr';
    //   if (user) return true;
    //   return false;
    // },
    // redirect: async ({ url, baseUrl }) => {
    //   return Promise.resolve('https://google.com');
    // },
    // redirect: async ({ url, baseUrl }) => {
    //   console.log('url : ', url);
    //   console.log('baseUrl : ', baseUrl);
    //   // return url.startsWith(baseUrl)
    //   //   ? Promise.resolve(url)
    //   //   : Promise.resolve(baseUrl);
    //   return Promise.resolve(`${baseUrl}/auth/signin`);
    // },

    // async session({ session, token, user }) {
    //   console.log('session : ', session);
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
    session: async ({ session, token }) => {
      session.jwt = token.jwt;
      session.user = token.user as User;

      return session;
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = !!user;

      if (isSignIn && account?.provider !== 'credentials') {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response?.json();

        if (data.error) {
          // eslint-disable-next-line no-console
          console.log('data.error :', data.error);
          throw data.error;
        }

        token.jwt = data?.jwt;
        token.id = data?.user?.id;
      }

      // console.log('user : ', user);
      // console.log('account : ', account);

      if (user) {
        //   token.jwt = user.jwt;
        //   token.user = user.user;
        token.user = user;
      }

      // console.log('token : ', token);

      return token;
    },
  },
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = 'admin';
  //     return token;
  //   },
  // },
  theme: {
    colorScheme: 'dark',
  },
  // Enable debug messages in the console if you are having problems
  debug: true,
});
