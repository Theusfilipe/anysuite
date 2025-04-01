import NextAuth from "next-auth";
import {options} from "./options";
import { getTranslation } from "@repo/i18n/getTranslation";

const handler = NextAuth(options);

export { handler as GET, handler as POST }