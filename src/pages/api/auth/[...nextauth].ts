import NextAuth, { User } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import TwitterProvider from 'next-auth/providers/twitter';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.NEXT_PUBLIC_SECRET,
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
    secret: process.env.NEXT_PUBLIC_SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: '/login', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Displays errorError code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    signIn: async ({ profile, account }) => {
      if (!profile.email) {
        return `/login?error=NoEmailProvided&provider=${account.provider}`;
      }
      return true;
    },
    // redirect: async () => {
    //   return '/';
    // },
    // redirect: async ({ url, baseUrl }) => {
    //   return url;
    // },
    // redirect: async ({ url, baseUrl }) => {
    //   console.log('url :', url);
    //   console.log('baseUrl :', baseUrl);
    //   // return url.startsWith(baseUrl)
    //   //   ? Promise.resolve(url)
    //   //   : Promise.resolve(baseUrl);
    //   return `${baseUrl}/contact`;
    // },
    session: async ({ session, token }) => {
      session.jwt = token.jwt;
      session.user = token.user as User;
      session.accessToken = token.accessToken;

      return session;
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = !!user;
      let username = '';
      let strapiId = 0;
      let provider: string | undefined = '';
      const isCredentialsProvider = account?.provider === 'credentials';

      const getUrl = (provider?: RequestInfo | URL): string => {
        switch (provider) {
          case 'discord': {
            return `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`;
          }
          case 'twitter': {
            return `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?oauth_token=${account?.oauth_token}&oauth_token_secret=${account?.oauth_token_secret}`;
          }
          default: {
            return '';
          }
        }
      };

      if (isSignIn && !isCredentialsProvider) {
        const response = await fetch(getUrl(account?.provider));

        const data = await response?.json();

        if (data?.error) {
          // eslint-disable-next-line no-console
          console.error('🚨️ data.error :', data.error);
          throw data.error;
        }
        token.jwt = data?.jwt;
        username = data?.user?.username;
        strapiId = data?.user?.id;
        provider = account?.provider;
      }

      if (account) {
        if (account.provider === 'discord') {
          token.accessToken = account.access_token;
        } else if (account.provider === 'twitter') {
          token.accessToken = account.oauth_token;
        }
      }

      if (user) {
        token.user = {
          ...user,
          strapiId,
          username,
          provider,
        };
      }
      return token;
    },
  },
  theme: {
    colorScheme: 'dark',
  },
  // Enable debug messages in the console if you are having problems
  debug: true,
});
