import { DefaultSession } from 'next-auth';

export type User = {
  id: string;
  strapiId?: number;
  username?: string;
  provider?: string;
} & DefaultSession['user'];

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }
}
