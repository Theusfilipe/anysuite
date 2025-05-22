import { getTranslation } from "@repo/i18n/getTranslation";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@repo/db";
import bcrypt from "bcrypt";


const lang = "pt";

export const options : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
        credentials: {
            username: { label: getTranslation(lang, "email")+":", type: "text" },
            password: { label: getTranslation(lang, "password")+":", type: "password" }
            
        },
        async authorize(credentials) {
          const { username, password } = credentials as { username: string; password: string };

          const user = await prisma.user.findUnique({
            where: { email: username },
            include: {
              access: true
            }
          });

          if (!user) return null;

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) return null;

          // Mapeia acessos por departamento
          const accessMap = Object.fromEntries(
            user.access.map(a => [a.department, a.level])
          );

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            access: accessMap
          };
        }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.access = user.access;
      }
      return token;
    },

    //for client side session
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.access = token.access;
      }
      return session;
    },

  }
}