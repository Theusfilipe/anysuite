import { getTranslation } from "@repo/i18n/getTranslation";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const lang = "pt";

export const options : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
        credentials: {
            username: { label: getTranslation(lang, "user")+":", type: "text" },
            password: { label: getTranslation(lang, "password")+":", type: "password" }
        },
        async authorize(credentials) {
            const user = {id:"42", name:"Dave", password:"next"};
            const { username, password } = credentials as { username: string; password: string };
            if(credentials?.username === user.name && credentials?.password === user.password) {
                return user;
            }else {
                return null;
            }
        }
    })
  ]
}