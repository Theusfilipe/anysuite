import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      access: Record<string, string> // ex: { Stockroom: 'MANAGER', Personnel: 'READ_ONLY' }
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    name: string
    email: string
    access: Record<string, string>
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    name: string
    email: string
    access: Record<string, string>
  }
}