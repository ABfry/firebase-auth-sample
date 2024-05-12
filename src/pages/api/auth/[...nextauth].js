import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import { auth } from '@/firebase/admin';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async ({ idToken }) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);

            return { ...decoded };
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified;
      session.user.uid = token.uid;
      return session;
    },
  },
};

export default NextAuth(authOptions);
