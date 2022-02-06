// import NextAuth from 'next-auth';
// import { DefaultJWT } from 'next-auth/jwt/types';
//
// /** Example on how to extend the built-in session types */
// declare module 'next-auth' {
//   interface Session extends Record<string, unknown>, DefaultJWT {
//     /** This is an example. You can find me in types/next-auth.d.ts */
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image: string | undefined;
//     };
//   }
// }
// //
// // /** Example on how to extend the built-in types for JWT */
// // declare module 'next-auth/jwt' {
// //   interface JWT {
// //     /** This is an example. You can find me in types/next-auth.d.ts */
// //     bar: number;
// //   }
// // }
